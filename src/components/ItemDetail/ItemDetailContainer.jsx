import { useState, useEffect } from "react";
import { getItem } from "../../services/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Jelly } from "@uiball/loaders";
import "./ItemDetailContainer.css"


function ItemDetailContainer() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const id = useParams().id;

  useEffect(() => {
    getItem(id)
      .then((respuesta) => setData(respuesta))
      .catch((errorMsg) => setError(errorMsg.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <>
        {error ? 
          <div>
            <h3 style={"font-weight: bold"}>Error</h3>
            <p>{error}</p>
          </div>
         : 
         <div className="loader">
         <Jelly size={100} speed={0.9} color="black" />
       </div>
        }
      </>
    );
  }

  return (
    <div className="container">
      <div className="detail">
        <ItemDetail
        key={data.id}
          id={data.id}
          img={data.img}
          name={data.name}
          detail={data.detail}
          stock={data.stock}
          price={data.price}
        />
      </div>
    </div>
  );
}

export default ItemDetailContainer;

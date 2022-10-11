import { useState, useEffect } from "react";
import { getItem } from "../../services/mockAPI";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Jelly } from "@uiball/loaders";


function ItemDetailContainer() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const id = Number(useParams().id);

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
          <Jelly size={80} speed={0.9} color="black" />
        }
      </>
    );
  }

  return (
    <div>
      <div className="container">
        <ItemDetail
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

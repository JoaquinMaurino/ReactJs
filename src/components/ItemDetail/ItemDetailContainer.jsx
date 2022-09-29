import { useState, useEffect } from "react";
import { getItem } from "../../services/mockAPI";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  
  let [data, setData] = useState({});

  const id = Number(useParams().id);

  useEffect(() => {
    getItem(id).then((respuesta) => setData(respuesta));
  }, [id]);

  return (
    <div>
      <div className="container">
        <ItemDetail
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

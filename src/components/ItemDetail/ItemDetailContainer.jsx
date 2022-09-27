import { useState, useEffect } from "react";
import  {getItem}  from "../../services/mockAPI";
import ItemDetail from "./ItemDetail";
function ItemDetailContainer() {
  let [data, setData] = useState({});

  useEffect(() => {
    getItem().then((respuesta) => setData(respuesta));
  }, []);

  return (
    <div>
      <div className="container">
        <ItemDetail
        img={data.img}
        name={data.name}
        detail={data.detail}
        stock={data.stock}/>
      </div>
    </div>
  );
}

export default ItemDetailContainer;

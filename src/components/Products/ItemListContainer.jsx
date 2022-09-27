import { useState, useEffect } from "react";
import getItems from "../../services/mockAPI";
import ItemList from "./ItemList";

function ItemListContainer(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setData(respuestaDatos);
    });
  }, []);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList item={data}/>
    </div>
  );
}
export default ItemListContainer;

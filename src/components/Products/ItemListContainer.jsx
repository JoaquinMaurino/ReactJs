import { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../services/mockAPI";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  let [data, setData] = useState([]);

  const cat = useParams().cat;

  useEffect(() => {
    if (cat === undefined) {
      getItems().then((respuestaDatos) => {
        setData(respuestaDatos);
      });
    } else {
      getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
    }
  }, [cat]);

  return (
    <div>
      <h1 className="text-center">{props.greeting}</h1>
      <ItemList item={data} />
    </div>
  );
}
export default ItemListContainer;

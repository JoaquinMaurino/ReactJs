import { useState, useEffect } from "react";
import { getItems, /* getItemsByCategory */ } from "../../services/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Jelly } from "@uiball/loaders";

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const cat = useParams().cat;

  useEffect(() => {
    setData([]);
    setLoading(true);

    if (cat === undefined) {
      getItems()
        .then((respuestaDatos) => {
          setData(respuestaDatos);
        })
        .finally(() => setLoading(false));
    } /* else {
      getItemsByCategory(cat)
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setLoading(false));
    } */
  }, [cat]);

  return (
    <div>
      {loading && <Jelly size={80} speed={0.9} color="black" />}
      <h1 className="text-center">{props.greeting}</h1>
      <ItemList item={data} />
    </div>
  );
}
export default ItemListContainer;

import { useState, useEffect } from "react";
import { getItems, getItemsByCategory } from "../../services/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Jelly } from "@uiball/loaders";
import "./itemListContainer.css";

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
    } else {
      getItemsByCategory(cat)
        .then((respuestaDatosFiltrados) => setData(respuestaDatosFiltrados))
        .finally(() => setLoading(false));
    }
  }, [cat]);

  return (
    <div>
      <h1 className="text-center">Bienvenido/a la tienda de SGA Uniformes</h1>
      {loading && (
        <div className="loader">
          <Jelly size={100} speed={0.9} color="black" />
        </div>
      )}
      
      <ItemList item={data} />
    </div>
  );
}
export default ItemListContainer;

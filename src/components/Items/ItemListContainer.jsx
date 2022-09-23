import Cards from "./Cards";
import { useState, useEffect } from "react";
import getItems from "../../services/mockAPI";

function ItemListContainer(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos)=>{
      setData(respuestaDatos)
      });
  }, []);

  return (
    <div className="text-center">
      <h1>{props.greeting}</h1>
      <div className="container">
        {data.map((item) => {
          return (
            <Cards
              name={item.name}
              price={item.price}
              detail={item.detail}
              img={item.img}
            ></Cards>
          );
        })}
      </div>
    </div>
  );
}
export default ItemListContainer;

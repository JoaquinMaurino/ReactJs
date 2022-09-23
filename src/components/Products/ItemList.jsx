import { useState, useEffect } from "react";
import getItems from "../../services/mockAPI";
import Item from "./Item";

function ItemList() {
  
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setData(respuestaDatos);
    });
  }, []);

  return (
    <div>
      <div className="container">
        {data.map((item) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              price={item.price}
              detail={item.detail}
              img={item.img}
            ></Item>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;

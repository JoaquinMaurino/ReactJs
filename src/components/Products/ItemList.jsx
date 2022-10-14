import React from "react";
import Item from "./Item";

function ItemList(data) {
  return (
    <div className="container">
      {data.item.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            detail={item.detail}
            img={item.img}
            stock={item.stock}
          ></Item>
        );
      })}
    </div>
  );
}

export default ItemList;

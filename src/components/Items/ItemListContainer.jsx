import Cards from "./Cards";
import ClickCounter from "../ItemCount/ClickCounter";
import { useEffect } from "react";

const data = [
  {
    id: "1",
    name: "Producto 1",
    detail: "Indumentaria",
    img: "https://dummyimage.com/250",
    price: "$5000",
    stock: "",
  },
  {
    id: "2",
    name: "Producto 2",
    detail: "Indumentaria",
    img: "https://dummyimage.com/250",
    price: "$5000",
    stock: "",
  },
  {
    id: "3",
    name: "Producto 3",
    detail: "Indumentaria",
    img: "https://dummyimage.com/250",
    price: "$5000",
    stock: "",
  },
  {
    id: "4",
    name: "Producto 4",
    detail: "Indumentaria",
    img: "https://dummyimage.com/250",
    price: "$5000",
    stock: "",
  },
  {
    id: "5",
    name: "Producto 5",
    detail: "Indumentaria",
    img: "https://dummyimage.com/250",
    price: "$5000",
    stock: "",
  },
];

function ItemListContainer(props) {
  function getItemsDB() {}

  useEffect(() => {
    getItemsDB();
  }, []);

  return (
    <div className="text-center">
      <h1>{props.greeting}</h1>
      <div className="container">
        {data.map((item) => {
          console.log(item);
          return <Cards name={item.name} price={item.price} img={item.img}></Cards>;
        })}
      </div>
    </div>
  );
}
export default ItemListContainer;

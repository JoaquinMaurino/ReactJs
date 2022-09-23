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
    price: "$6000",
    stock: "",
  },
  {
    id: "3",
    name: "Producto 3",
    detail: "Indumentaria",
    img: "https://dummyimage.com/250",
    price: "$4500",
    stock: "",
  },
  {
    id: "4",
    name: "Producto 4",
    detail: "Indumentaria",
    img: "https://dummyimage.com/250",
    price: "$8700",
    stock: "",
  },
  {
    id: "5",
    name: "Producto 5",
    detail: "Indumentaria",
    img: "https://dummyimage.com/250",
    price: "$6200",
    stock: "",
  },
];

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}

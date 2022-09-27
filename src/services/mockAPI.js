const data = [
  {
    id: "1",
    name: "Botas Hombre",
    detail: "Indumentaria",
    img: "/ItemIMG/BotasHombre.jpeg",
    price: "$5000",
    stock: "8",
  },
  {
    id: "2",
    name: "Borcegos Integral Work",
    detail: "Borcegos de cuero reforzado, con suela febo con cierre lateral. Plantilla termoformada, forrería interior absorbente.",
    img: "/ItemIMG/BotasMujer.jpeg",
    price: "$6000",
    stock: "5",
  },
  {
    id: "3",
    name: "Camisa",
    detail: "Indumentaria",
    img: "/ItemIMG/Camisa.jpeg",
    price: "$4500",
    stock: "15",
  },
  {
    id: "4",
    name: "Cargo",
    detail: "Indumentaria",
    img: "/ItemIMG/Cargo.jpeg",
    price: "$8700",
    stock: "18",
  },
  {
    id: "5",
    name: "Chaleco",
    detail: "Indumentaria",
    img: "/ItemIMG/Chaleco.jpeg",
    price: "$6200",
    stock: "7",
  },
  {
    id: "6",
    name: "Chaleco Blindado",
    detail: "Indumentaria",
    img: "/ItemIMG/ChalecoBlindado.jpeg",
    price: "$6200",
    stock: "7",
  },
  {
    id: "7",
    name: "Chaqueta",
    detail: "Indumentaria",
    img: "/ItemIMG/Chaqueta.jpeg",
    price: "$6200",
    stock: "7",
  },
  {
    id: "8",
    name: "Cinturones",
    detail: "Indumentaria",
    img: "/ItemIMG/Cinturones.jpeg",
    price: "$6200",
    stock: "7",
  },
  {
    id: "9",
    name: "Pantalon",
    detail: "Indumentaria",
    img: "/ItemIMG/Pantalon.jpeg",
    price: "$6200",
    stock: "7",
  },
  {
    id: "10",
    name: "Remera",
    detail: "Indumentaria",
    img: "/ItemIMG/Remera.jpeg",
    price: "$6200",
    stock: "7",
  },
  {
    id: "10",
    name: "Short",
    detail: "Indumentaria",
    img: "/ItemIMG/Short.jpeg",
    price: "$6200",
    stock: "7",
  },
  {
    id: "10",
    name: "Zapatos Hombre",
    detail: "Indumentaria",
    img: "/ItemIMG/ZapatosHombre.jpeg",
    price: "$6200",
    stock: "7",
  },
  {
    id: "10",
    name: "Zapatos Mujer",
    detail: "Indumentaria",
    img: "/ItemIMG/ZapatosMujer.jpeg",
    price: "$6200",
    stock: "7",
  },
];

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}


export function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data[1]);
    }, 1500);
  });
}
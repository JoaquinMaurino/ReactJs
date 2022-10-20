// Import the functions you need from the SDKs you need
import { fireEvent } from "@testing-library/react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAqjQ_0uQZ5guEd1YumD4Y3tdR-1qbZgk",
  authDomain: "sga-uniformes.firebaseapp.com",
  projectId: "sga-uniformes",
  storageBucket: "sga-uniformes.appspot.com",
  messagingSenderId: "723462043293",
  appId: "1:723462043293:web:26b9065e4ccc3c3f890674",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const miColeccion = collection(firestore, "ProductosSGA");
  let respuesta = await getDocs(miColeccion);
  let dataDocs = respuesta.docs.map((documento) => {
    let docWithID = { ...documento.data(), id: documento.id };
    return docWithID;
  });
  return dataDocs;
}

export async function getItem(idParams) {
  const docRef = doc(firestore, "ProductosSGA", idParams);
  const docSnap = await getDoc(docRef);
  return { ...docSnap.data(), id: docSnap.id };
}

export async function getItemsByCategory(catParams) {
  const miColeccion = collection(firestore, "ProductosSGA");
  const queryCat = query(miColeccion, where("categoria", "==", catParams));
  const respuesta = await getDocs(queryCat);
  let dataDocs = respuesta.docs.map((documento) => {
    let docWithID = { ...documento.data(), id: documento.id };
    return docWithID;
  });
  return dataDocs;
}

export async function createBuyOrder(orderData) {
  const miColeccion = collection(firestore, "Orders");
  let respuesta = await addDoc(miColeccion, orderData);
  return respuesta.id;
}

export async function exportDataToFirebase() {
  const data = [
    {
      id: "1",
      name: "Botas Hombre",
      detail: "Indumentaria",
      img: "/ItemIMG/BotasHombre.jpeg",
      price: 5000,
      stock: 8,
      categoria: "Calzado",
    },
    {
      id: "2",
      name: "Borcegos Integral Work",
      detail:
        "Borcegos de cuero reforzado, con suela febo con cierre lateral. Plantilla termoformada, forrería interior absorbente.",
      img: "/ItemIMG/BotasMujer.jpeg",
      price: 6000,
      stock: 5,
      categoria: "Calzado",
    },
    {
      id: "3",
      name: "Camisa",
      detail: "Indumentaria",
      img: "/ItemIMG/Camisa.jpeg",
      price: 4500,
      stock: 15,
      categoria: "Indumentaria",
    },
    {
      id: "4",
      name: "Cargo",
      detail: "Indumentaria",
      img: "/ItemIMG/Cargo.jpeg",
      price: 8700,
      stock: 18,
      categoria: "Indumentaria",
    },
    {
      id: "5",
      name: "Chaleco",
      detail: "Indumentaria",
      img: "/ItemIMG/Chaleco.jpeg",
      price: 6200,
      stock: 7,
      categoria: "Chaleco",
    },
    {
      id: "6",
      name: "Chaleco Blindado",
      detail: "Indumentaria",
      img: "/ItemIMG/ChalecoBlindado.jpeg",
      price: 6200,
      stock: 7,
      categoria: "Chaleco",
    },
    {
      id: "7",
      name: "Chaqueta",
      detail: "Indumentaria",
      img: "/ItemIMG/Chaqueta.jpeg",
      price: 6200,
      stock: 7,
      categoria: "Indumentaria",
    },
    {
      id: "8",
      name: "Cinturones",
      detail: "Indumentaria",
      img: "/ItemIMG/Cinturones.jpeg",
      price: 6200,
      stock: 7,
      categoria: "Indumentaria",
    },
    {
      id: "9",
      name: "Pantalon",
      detail: "Indumentaria",
      img: "/ItemIMG/Pantalon.jpeg",
      price: 6200,
      stock: "7",
      categoria: "Indumentaria",
    },
    {
      id: "10",
      name: "Remera",
      detail: "Indumentaria",
      img: "/ItemIMG/Remera.jpeg",
      price: 6200,
      stock: 7,
      categoria: "Indumentaria",
    },
    {
      id: "11",
      name: "Short",
      detail: "Indumentaria",
      img: "/ItemIMG/Short.jpeg",
      price: 6200,
      stock: 7,
      categoria: "Indumentaria",
    },
    {
      id: "12",
      name: "Zapatos Hombre",
      detail: "Indumentaria",
      img: "/ItemIMG/ZapatosHombre.jpeg",
      price: 6200,
      stock: 7,
      categoria: "Calzado",
    },
    {
      id: "13",
      name: "Zapatos Mujer",
      detail: "Indumentaria",
      img: "/ItemIMG/ZapatosMujer.jpeg",
      price: 6200,
      stock: 7,
      categoria: "Calzado",
    },
  ];

  const miColecion = collection(firestore, "ProductosSGA");

  for (let item of data) {

    const newDoc = await addDoc(miColecion, item);
  }
}

export default firestore;

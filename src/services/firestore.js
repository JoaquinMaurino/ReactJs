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
  const miColeccion = collection(firestore, "Indumentaria");
  let respuesta = await getDocs(miColeccion);
  let dataDocs = respuesta.docs.map((documento) => {
    let docWithID = { ...documento.data(), id: documento.id };
    return docWithID;
  });
  return dataDocs;
}

export async function getItem(idParams) {
  const docRef = doc(firestore, "Indumentaria", idParams);
  const docSnap = await getDoc(docRef);
  return { ...docSnap.data(), id: docSnap.id };
}

export async function getItemsByCategory(catParams) {
  const miColeccion = collection(firestore, "Indumentaria");
  const queryCat = query(miColeccion, where("categoria", "==", catParams));
  const respuesta = await getDocs(queryCat);
  let dataDocs = respuesta.docs.map((documento) => {
    let docWithID = { ...documento.data(), id: documento.id };
    return docWithID;
  });
  return dataDocs;
}

export default firestore;

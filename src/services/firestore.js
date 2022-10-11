/* // Import the functions you need from the SDKs you need
import { fireEvent } from "@testing-library/react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAqjQ_0uQZ5guEd1YumD4Y3tdR-1qbZgk",
  authDomain: "sga-uniformes.firebaseapp.com",
  projectId: "sga-uniformes",
  storageBucket: "sga-uniformes.appspot.com",
  messagingSenderId: "723462043293",
  appId: "1:723462043293:web:26b9065e4ccc3c3f890674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export async function getItems(){
const miColeccion = collection(firestore, "indumentaria");
let respuesta = await getDocs(miColeccion);
let dataDocs = respuesta.docs.map(documento => documento.data());
return dataDocs
}

export default firestore;  */
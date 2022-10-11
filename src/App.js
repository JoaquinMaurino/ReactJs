import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/Cart/CartContext";
import Cart from "./components/Cart/Cart";
//import firestore from ":/services/firestore"

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido/a la tienda de SGA Uniformes" />
            }
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:cat" element={<ItemListContainer />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

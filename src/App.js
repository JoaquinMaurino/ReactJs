import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/Cart/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import {exportDataToFirebase} from "./services/firestore"

function App() {

  return (
    <CartContextProvider>
   {/*  <button onClick={exportDataToFirebase}>Export</button> */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer/>
            }
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:cat" element={<ItemListContainer />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/:orderID" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

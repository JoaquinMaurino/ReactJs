import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProvider from "./components/CartWidget/CartContext";
import Cart from "./components/CartWidget/Cart"

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
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
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;

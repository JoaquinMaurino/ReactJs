import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      {/* <ItemListContainer greeting="Bienvenido/a la tienda de SGA Uniformes"/> */}
    <ItemDetailContainer/>
    </div>
  );
}

export default App;

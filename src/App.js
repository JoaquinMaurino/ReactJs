import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer greeting="Bienvenido/a la tienda de RocketFitnes"/>
      <ItemCount initial={1} stock={8}/>
    </div>
  );
}

export default App;

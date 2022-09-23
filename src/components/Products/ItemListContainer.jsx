import ItemList from "./ItemList";

function ItemListContainer(props) {
  return (
    <div className="text-center">
      <h1>{props.greeting}</h1>
      <ItemList/>
    </div>
  );
}
export default ItemListContainer;

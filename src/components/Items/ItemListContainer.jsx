import Cards from "./Cards";

function ItemListContainer(props) {
  return (
    <div className="text-center">
      <h1>{props.greeting}</h1>
      <div className="container">
        <Cards
          title="Card-1"
          desc="Indumentaria"
          img="https://dummyimage.com/250"
          price="$5600"
        />
        <Cards
          title="Card-2"
          desc="Indumentaria"
          img="https://dummyimage.com/250"
          price="$6200"
        />
        <Cards
          title="Card-3"
          desc="Indumentaria"
          img="https://dummyimage.com/250"
          price="$4000"
        />
      </div>
    </div>
  );
}
export default ItemListContainer;

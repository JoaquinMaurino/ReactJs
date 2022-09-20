import Cards from "./Cards";
import ClickCounter from "../ItemCount/ClickCounter";

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
        <ClickCounter stock={8} initial={1} />
        <Cards
          title="Card-2"
          desc="Indumentaria"
          img="https://dummyimage.com/250"
          price="$6200"
        />
        <ClickCounter stock={4} initial={1}/>
        <Cards
          title="Card-3"
          desc="Indumentaria"
          img="https://dummyimage.com/250"
          price="$4000"
        />
        <ClickCounter stock={15} initial={1} />
      </div>
    </div>
  );
}
export default ItemListContainer;

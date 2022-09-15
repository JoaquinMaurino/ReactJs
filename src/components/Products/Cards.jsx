import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardStyles.css";

function Cards() {
  return (
    <div className="cardContainer row">
      <Card style={{ width: "18rem" }}>
        <img src="" alt="" />
        <Card.Body>
          <Card.Title>Product Title</Card.Title>
          <Card.Text>Product Description</Card.Text>
          <Card.Text>Price</Card.Text>
          <Button variant="primary">Buy!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;

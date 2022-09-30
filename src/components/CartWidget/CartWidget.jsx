import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "./CartContext";


function CartWidget() {

  const {getItemQty}=useContext(CartContext)

  return (
    <div>
        <BsFillCartFill />
      <span></span>
    </div>
  );
}

export default CartWidget;

import { useState, createContext } from "react";

const cartContext = createContext();
const { Provider } = cartContext;

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  //Metodo Some - Indica si el porducto ya existe en el carrito => (True/False)
  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  //Agrega item al cart sin pisar los productos ya existentes
  function addItem(item, count) {
    if (isInCart(item.id)) {
      let newCart = cart.map((itemMap) => {
        if (itemMap.id === item.id) {
          itemMap.count += count;
          return itemMap;
        } else return itemMap;
      });
      setCart(newCart);
    } else {
      let newCart = cart.map((item) => item);
      newCart.push({ ...item, count });
      setCart(newCart);
    }
  }

  //Elimina todos los items del cart (Boton)
  const emptyCart = () => {
    return setCart([]);
  };

  //Elimina un item especifico del cart (Boton)
  const deleteItem = (id) => {
    return setCart(cart.filter((item) => item.id !== id));
  };

  //Cuantos items hay en el cart
  const getItemQty = () => {
    return cart.reduce((acc, item) => (acc += item.count), 0);
  };

  //Retorna el precio del item por la cantidad de ese item en el cart
  const getItemPrice = () => {
    return cart.reduce((acc, item) => (acc += item.price * item.count), 0);
  };

  return (
    <Provider
      value={{
        cart,
        isInCart,
        addItem,
        emptyCart,
        deleteItem,
        getItemQty,
        getItemPrice,
      }}
    >
      {children}
    </Provider>
  );
}

export default CartContextProvider;
export { cartContext };

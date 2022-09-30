import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState();

  //Metodo Some - Indica si el porducto ya existe en el carrito => (True/False)
  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  };

//Agrega item al cart sin pisar los productos ya existentes
  const addItem = (item, count) => {
    const newItem = {
        ...item, count
    }
    if (isInCart(newItem.id)){
        const findProduct = cart.find(item => item.id === newItem.id)
        const productIndex = cart.indexOf(findProduct)
        const auxArray = [...cart]
         auxArray[productIndex].count += count       
         setCart[auxArray]
    }else{
        setCart([...cart, newItem])
    }
  };
  

  //Elimina todos los items del cart (Boton)
  const emptyCart = () => {
    return setCart([])
  };

  //Elimina un item especifico del cart (Boton)
  const deleteItem = (id) => {
    return setCart(cart.filter(item => item.id !== id ))
  };

  //Cuantos items hay en el cart
  const getItemQty = () => {
    return cart.reduce((acc, item)=> acc += item.count, 0)
  };

  //Retorna el precio del item por la cantidad de ese item en el cart 
  const getItemPrice = () => {
    return cart.reduce((acc, item)=> acc += item.price * item.count, 0)
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
};

export default MyProvider;

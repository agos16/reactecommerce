import { NavLink } from 'react-router-dom';
import cart from "../assets/cart.png"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


export const CartWidget = () => {
const { items } = useContext(CartContext);


const total = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity,
    0
);

return (
    <div className>
    <NavLink to="/cart">
    <img src={cart} alt="Carrito" className/>
    </NavLink>
    <span className>{total}</span>
    </div>
);
};
import { useContext } from "react";

import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({item}) => {
    const { onAdd } =useContext (CartContext)
    const add = () => {
    onAdd(item);
    };
    return (
        <>
        <h1>{item.tittle}</h1>
        <img src={item.pictureUrl} />
        <ItemCounter onAdd = {add} />
        </>
    )
}
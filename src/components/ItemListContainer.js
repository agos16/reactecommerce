import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import { products } from '../data/products';
import { Itemlist } from '../components/ItemList'



export const ItemListContainer = (props) => {

        const [items, setItems] = useState([]);

        useEffect(()=> {
            const mypromise = new Promise ((resolve, reject) => {
                setTimeout(() => {
                resolve(products);  
                },2000);
            });
            
            mypromise.then((response) => setItems (response))

        }, [])

        console.log (items);



    return (<Container className= "mt-4">
        <h1>{props.greeting}</h1>
        <Itemlist items = {items} />
        </Container>)
}
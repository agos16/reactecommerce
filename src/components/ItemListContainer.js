import { useParams } from 'react-router-dom';
import { useEffect, useState,} from 'react';
import Container from 'react-bootstrap/Container';
import { getFirestore, getDoc, doc} from 'firebase/firestore';

import { products } from '../data/products';
import { Itemlist } from '../components/ItemList'




export const ItemListContainer = (props) => {

        const [items, setItems] = useState([]);

        const { id }= useParams ();

        useEffect (() => {
            const db = getFirestore();

            const refDoc = doc (db, "items", "3G9jZM57U3r7px5tQ0yC");

            getDoc (refDoc).then ((snapshot) => {
                console.log ({ id: snapshot.id, ...snapshot.data()})
            })
        },[])


        useEffect(()=> {
            const mypromise = new Promise ((resolve, reject) => {
                setTimeout(() => {
                resolve(products);  
                },2000);
            });
            
            mypromise.then((response) => {if (!id) {setItems (response);} else {
                const filterByCategory = response.filter (item => item.category === id);
                setItems(filterByCategory);
            }})

        }, [id])

        console.log (items);



    return (<Container className= "mt-4">
        <h1>{props.greeting}</h1>
        <Itemlist items = {items} />
        </Container>)
}
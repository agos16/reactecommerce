
import { BrowserRouter,Routes, Route} from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer} from "./components/ItemListContainer";

import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContext";




function App (){
  return ( <CartProvider>
  <BrowserRouter> 
    <NavBar />;
    <Routes>
      <Route path = "/" element={<ItemListContainer greeting ="Bienvenidos"/>}/>
      <Route path = "/category/:id" element={<ItemListContainer greeting ="Bienvenidos"/>}/>
      <Route path = "/items/:id" element={<ItemDetailContainer greeting ="Bienvenidos"/>}/>
    </Routes>
  
  
  </BrowserRouter>
  </CartProvider>
  )}

export default App;

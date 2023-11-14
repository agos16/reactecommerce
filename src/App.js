
import { BrowserRouter,Routes, Route} from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer} from "./components/ItemListContainer";

import "./App.css";

function App (){
  return (
  <BrowserRouter> 
    <NavBar />;
    <Routes>
      <Route path = "/" element={<ItemListContainer greeting ="Bienvenidos"/>}/>
      <Route path = "/category/:id" element={<ItemListContainer greeting ="Bienvenidos"/>}/>
      <Route path = "/items/:id" element={<ItemListContainer greeting ="Bienvenidos"/>}/>

    </Routes>
  
  
  </BrowserRouter>)}

export default App;

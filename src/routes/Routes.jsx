import React from 'react'
import {Routes,Route} from "react-router";
import{Home,Gestion}from "../pages"

 function Rutas() {
  return (
    <Routes>    
        <Route path='/home' element={<Home/>}/>
        <Route path='/Gestion' element={<Gestion/>}/>
    </Routes>
  )
}
export default Rutas
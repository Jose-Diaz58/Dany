import React from 'react'
import {Routes,Route} from "react-router";
import{Home,Gestion}from "../pages"
import { AdminLayout } from '../layouts';

 function Rutas() {

  const LoadedLayout=(Layout, Page)=>{
    return(
      <Layout>
        <Page/>
      </Layout>
    )
  }
  return (
    <Routes>  
<<<<<<< HEAD
      <Route path='/' element={LoadedLayout(AdminLayout,Home)}/>
=======
      <Route path='/home' element={LoadedLayout(AdminLayout,Home)}/>
>>>>>>> 93a86136f8e353606641fb404233cbb304a350dc
      <Route path='/Gestion' element={LoadedLayout(AdminLayout,Gestion)}/>
    </Routes>
  )
}
export default Rutas
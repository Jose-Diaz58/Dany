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
      <Route path='/home' element={LoadedLayout(AdminLayout,Home)}/>
      <Route path='/Gestion' element={LoadedLayout(AdminLayout,Gestion)}/>
    </Routes>
  )
}
export default Rutas
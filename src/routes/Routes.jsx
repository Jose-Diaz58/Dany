import React from 'react'
import {Routes,Route, Navigate} from "react-router";
import{Home,Gestion, Dashoard}from "../pages"
import { AdminLayout } from '../layouts';
import { FormPersona } from '../components/persona'
 
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
      <Route path='/' element={LoadedLayout(AdminLayout,Dashoard)}/>
      <Route path='/home' element={LoadedLayout(AdminLayout,Home)}/>
      <Route path='/persona' element={LoadedLayout(AdminLayout,FormPersona)}/>
      <Route path='*' element={<Navigate to="/" />}/>
    </Routes>
  )
}
export default Rutas
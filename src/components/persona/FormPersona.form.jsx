import * as Yup from 'yup'

export function InitialValues(){
  return {
    nombre:"",
    telefono:"",
    correo:"",
    nomuser:""
  }
}

export function ValidationSchema(){
  return Yup.object({
    nombre: Yup.string().required("No puede ir vacio"),
    telefono: Yup.number().required("No puede ir vacio"),
    correo: Yup.string().email().required("Le falta el arroba @ papu"),
    nomuser: Yup.string(),
  })
}
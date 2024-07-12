import React from 'react'
import { Permiso } from './Permiso'

interface Props{
    nombre:string,
    apellido:string,
    edad?:number //El signo ? significa que es opcional
}

export const Perfil = (props:Props) => {
  return (
    <>
        <h1>Hola</h1>
        <p>Nombre: {props.nombre}</p>
        <p>Apellido: {props.apellido}</p>
        <p>Edad: {props.edad}</p>

        {/*Renderizado Condicional*/}
        {
            props.edad != undefined &&
            props.edad >= 18 &&
            <>
            <p>Tienes permitido pasar</p>
            <Permiso permiso1='Beber' permiso2='Conducir'/>
            </>
        }
        {
            props.edad != undefined &&
            props.edad < 18 &&
            <>
            <p>Tienes permitido pasar</p>
            <Permiso permiso1='Tomar leche' permiso2='Divertirse'/>
            </>
        }
    </>
  )
}

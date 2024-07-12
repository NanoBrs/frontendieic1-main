import { obtenerPersonas } from '@/Firebase/Promesas'
import { Persona } from '@/Interfaces/Interfaces'
import React, { useEffect,useState } from 'react'
import { Table , Button } from 'react-bootstrap'
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";

export const Pagina4 = () => {
    const [personas,setPersonas] = useState<Persona[]>([])
    useEffect(() => {
        obtenerPersonas().then((personas) => {
            console.log(personas)
            setPersonas(personas)
        }).catch((e)=>{
            alert("No se logra cargar los datos")
            console.log(e)
        })
      },[])  
    return (
    <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>RUT</th>
                    <th>Correo</th>
                    <th>Fecha Nacimiento</th>
                    <th>Edad</th>
                    <th>Acción </th>
                </tr>
            </thead>
            <tbody>
                {
                    personas.map((p)=>{
                        return(
                            <tr>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.rut}</td>
                                <td>{p.correo}</td>
                                <td>{p.fechaNacimiento}</td>
                                <td>{p.edad}</td>
                                <Link href={{pathname:"Pagina5",query:{key:p.key}}}>
                                    <Button variant="warning"><FiEdit /></Button>
                                </Link>
                                
                                <Button variant="danger"><MdDeleteForever /></Button>
                            </tr>
                        ) 
                        
                    })
                }
                
            </tbody>
        </Table>
    </>
  )
}
export default Pagina4
import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Persona } from "@/Interfaces/Interfaces";
import { initialstatePersona } from "@/EstadosIniciales/Persona";
import { registrarPersona } from "@/Firebase/Promesas";

export const Pagina3 = () => {
    const [persona, setPersona] = useState<Persona>(initialstatePersona)
    const handlePersona = (name:string, value:string) => {
        setPersona({...persona,[name]:value})
    }
    const handleRegistrar = () =>{
        registrarPersona(persona).then(() => {
            alert("Se registro con exito")
        }).catch((e) => {
            alert("Algo Ocurrio")
            console.log(e)
        })
    }
  return (
    <>
        <Form>
            <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type = "text" placeholder="Ingrese nombre"
                    name = 'nombre'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type = "text" placeholder="Ingrese apellido"
                    name = 'apellido'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Rut:</Form.Label>
                <Form.Control type = "text" placeholder="Ingrese RUT"
                    name = 'rut'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Fecha de nacimiento:</Form.Label>
                <Form.Control type = "date" placeholder="Ingrese fecha de nacimiento"
                    name = 'fechaNacimiento'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo:</Form.Label>
                <Form.Control type = "email" placeholder="Ingrese correo"
                    name = 'correo'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Edad:</Form.Label>
                <Form.Control type = "number" placeholder="Ingrese edad"
                    name = 'edad'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Button type="button" variant = "primary" onClick={handleRegistrar}>Registrar</Button>
        </Form>
    </>
  )
}
export default Pagina3
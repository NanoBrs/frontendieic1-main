import { initialstatePersona } from '@/EstadosIniciales/Persona'
import { obtenerPersona } from '@/Firebase/Promesas'
import { Persona } from '@/Interfaces/Interfaces'
import { useRouter } from 'next/router'
import React, { useEffect,useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export const Pagina5 = () => {
    const [persona, setPersona] = useState<Persona>(initialstatePersona)
    const handlePersona = (name:string, value:string) => {
        setPersona({...persona,[name]:value})
    }
    const router = useRouter()
    useEffect(()=>{
        const key = router.query.key;
        if (typeof key == "string"){
            obtenerPersona(key).then((p)=>{
                if (p!=undefined)
                {
                    setPersona(p)
                }
                else{
                    //Devolverse a la tabla
                }
                

            })
        }
        else{
            //Devolverse a la tabla
        }
        console.log(router.query)
    },[])
    const handleModificar = ()=>{

    }
  return (
    <>
        <Form>
            <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type = "text" placeholder="Ingrese nombre"
                    value={persona.nombre}
                    name = 'nombre'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type = "text" placeholder="Ingrese apellido"
                    value={persona.apellido}
                    name = 'apellido'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Rut:</Form.Label>
                <Form.Control type = "text" placeholder="Ingrese RUT"
                    value={persona.rut}
                    name = 'rut'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Fecha de nacimiento:</Form.Label>
                <Form.Control type = "date" placeholder="Ingrese fecha de nacimiento"
                    value={persona.fechaNacimiento}
                    name = 'fechaNacimiento'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo:</Form.Label>
                <Form.Control type = "email" placeholder="Ingrese correo"
                    value={persona.correo}
                    name = 'correo'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Edad:</Form.Label>
                <Form.Control type = "number" placeholder="Ingrese edad"
                    value={persona.edad}
                    name = 'edad'
                    onChange={(e) => (handlePersona(e.currentTarget.name, e.currentTarget.value))}/>
                <Form.Text></Form.Text>
            </Form.Group>
            <Button type="button" variant = "primary" onClick={handleModificar}>Modificar</Button>
        </Form>
    </>
  )
}
export default Pagina5
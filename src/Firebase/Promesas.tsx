import { Persona } from "@/Interfaces/Interfaces"
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "./Firebase"

export const registrarPersona = async(persona:Persona) => {
    const docRef = await addDoc(collection(db, "persona"),persona);
}

export const obtenerPersonas = async() => {
    const querySnapshot = await getDocs(collection(db, "persona"));
    let personas:Persona[] = []
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let persona:Persona = {
        nombre:doc.data().nombre,
        apellido:doc.data().apellido,
        correo:doc.data().correo,
        fechaNacimiento:doc.data().fechaNacimiento,
        rut:doc.data().rut,
        edad:doc.data().edad,
        key:doc.id
    }
    personas.push(persona)
});
return personas
}

export const obtenerPersona =async (key:string) => {
    const docRef= doc(db,"persona",key);
    const docSnap= await getDoc(docRef);
    if (docSnap.exists()){
        let persona:Persona = {
            nombre:docSnap.data().nombre,
            apellido:docSnap.data().apellido,
            correo:docSnap.data().correo,
            fechaNacimiento:docSnap.data().fechaNacimiento,
            rut:docSnap.data().rut,
            edad:docSnap.data().edad,
            key:docSnap.id
        }
        return persona
    }
    else {
        return undefined
    }
}

export const modificarPersona = async(persona:Persona)=>{
    const ref = doc(collection(db,"persona"),persona.key)
    //con key incluida
    //await updateDoc(ref,{...persona})
    //sin key
    await updateDoc(ref,{
        nombre:persona.nombre,
        apellido:persona.apellido,
        rut:persona.rut,
        edad:persona.edad,
        fechaNacimiento:persona.fechaNacimiento,
        correo:persona.correo

    })
}
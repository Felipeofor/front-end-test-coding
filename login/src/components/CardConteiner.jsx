import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

function Toast() {

    const [user, setUsuarios] = useState()
    const {productById} = useParams();


    // API CALL  - Llamado a un archivo .JSON local
    // Creo una función asincrónica
    const getUsuarios = async () => {
        // Espero a que la data se fetchee
        const data = await fetch('https://api.github.com/search/users?q=YOUR_NAME')
        console.log(data)
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseData = await data.json()
        // Vemos qué llegó
        setUsuarios(responseData.filter((items) => items.id=== productById)[0]);
        console.log(setUsuarios)
    }

    useEffect(() => {
        getUsuarios()
    }, [])

    return(
        <div className="CardConteiner">
            <Card
            // key = {user.id}
            // avatar = {user.avatar_url}
            // id = {user.id}
            // name = {user.login}
            />
        </div>
    )
}

export default Toast;

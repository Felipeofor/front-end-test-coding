import React, { useState, useEffect } from 'react';
import Card from './Card';

function Toast() {

        const [user, setUsuarios] = useState()

    // API CALL  - Llamado a un archivo .JSON local
    // Creo una función asincrónica
    const getUsuarios = async () => {
        // Espero a que la data se fetchee
        const data = await fetch('https://api.github.com/search/users?q=felipe')
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseData = await data.json()
        // Vemos qué llegó
        console.log(responseData);
        setUsuarios(responseData)
    }

    useEffect(() => {
        setTimeout(() => getUsuarios(), 500)
    }, [])

    return(
        <div className="CardConteiner">
            <Card
            key = {user.id}
            avatar = {user.avatar_url}
            id = {user.id}
            name = {user.login}
            />
        </div>
    )
}

export default Toast;

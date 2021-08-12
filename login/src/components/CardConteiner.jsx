import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

function CardConteiner() {

    const [user, setUsuarios] = useState()
    const { productById } = useParams();


    // API CALL  - Llamado a un archivo .JSON local
    // Creo una función asincrónica
    const getUsuarios = async () => {
        // Espero a que la data se fetchee
        const data = await fetch('https://api.github.com/search/users?q=YOUR_NAME')
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseData = await data.json()
        // Vemos qué llegó
        // setUsuarios(responseData.filter((items) => items.id === productById)[0]);
        setUsuarios(responseData)
        console.log(responseData.items[0].login)
    }

    useEffect(() => {
        getUsuarios()
    }, [productById])

    return(
        <div className="CardConteiner">
            <Card
            // key = {user[0].id}
            // avatar = {user[0].avatar_url}
            // id = {user[0].id}
            // name = {user[0].login}
            />
        </div>
    )
}

export default CardConteiner;

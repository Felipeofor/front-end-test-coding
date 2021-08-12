import React, { Link } from 'react';
import Card from './Card';

function Toast() {

        // const [usuario, setUsuarios] = useState()

    // // API CALL  - Llamado a un archivo .JSON local
    // // Creo una función asincrónica
    // const getProducts = async () => {
    //     // Espero a que la data se fetchee
    //     const data = await fetch('https://api.github.com/search/users?q=${usuario}')
    //     // Aplico el método JSON() para extraer la respuesta a la petición
    //     const responseData = await data.json()
    //     // Vemos qué llegó
    //     setUsuarios(responseData)
    // }

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

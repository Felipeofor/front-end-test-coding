import React, { Link } from 'react';
import { searchUsuario } from '../api';

function Card () {

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
        <div className='containerCard card mx-1 my-1' >
                {/* <Link to={`/user.login/${user}`} className='linkCard col-12'>
                <div className='imageCard col-12' style={{backgroundImage:`url(${avatar_url})`, width: '80%'}}></div>
                <h3 key={user.id} >{user.login}</h3>
                </Link> */}
            </div>
    );
}

export default Card;

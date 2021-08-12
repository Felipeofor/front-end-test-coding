import React from 'react';

const UserDetails = async(user) => {

    try {
        /*Creamos una variable que consume de la api el perfil que el usuario este buscando */
        let url = `https://api.github.com/users/${user}`/*Buscamos el pokemon que el usuario ingreso */
        const response = await fetch(url);/*Fetch nos permite obtener la informacion de esa url*/
        const data = await response.json();/*Pasamos la informacion recibida a Json*/console.log(data)
        return data;/*Retornamos esa infomarcion a nuestro componente de React */
        
    }
    catch (err) {

    }

    return(
        <div>
            ${user.avatar_url}
           <h5>${user.login}</h5>
           <h5>${user.id}</h5>
        </div>   
    );
}

export default UserDetails;

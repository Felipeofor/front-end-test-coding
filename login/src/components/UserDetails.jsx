import React from 'react';
import { useState } from 'react'
import { useParams } from 'react-router';
import { useEffect } from 'react';
import Toast from './Toast'

const UserDetails = (use) => {

    const { userLogin} = useParams()

    
    const [users,setUsers] =useState('')
    const [showError,setShowError]=useState(false)
    const [error,setError]=useState('')


    const getUserDetails = async () => {

        try{
        // Espero a que la data se fetchee
        const dataUser = await fetch(`https://api.github.com/users/${userLogin}`)
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseDataUser = await dataUser.json()
        // Vemos qué llegó
        setUsers(responseDataUser);
        }catch(err){
            console.log('Resultado de Err: ',err)
            setError(err)
            console.log(error)
            setShowError(true)
        }
    }

    useEffect(()=>{
        getUserDetails()
    },[userLogin])

    console.log(use)
    return(

        <div className="Card">
            {showError ?  <Toast value={{error}}/>
            :
        <div class="card-usuario">
            <div className="seccion-avatar">
                <div className="avatar">
                    <div className="img-avatar">
                        <img src={users.avatar_url} alt=""/>
                    </div>
                </div>
                <div className="datos-redes">
                    <div className="datos-usuario">
                        <span>{users.followers}</span>
                        <span> Seguidores</span>
                    </div>
                    <div className="datos-usuario">
                        <span>{users.following}</span>
                        <span> Seguidos</span>
                    </div>
                </div>
            </div>
            <div className="seccion-datos">
                <h5>{users.login}</h5>
                <p><i className="fas fa-map-marker-alt"></i> {users.location}</p>
            </div>
        </div>
            }
        
        </div> 
    );
}

export default UserDetails;

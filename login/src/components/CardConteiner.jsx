import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Card from './Card';
import { useContext } from 'react';
import Context from './Context';

function CardConteiner() {

    
    const {users} = useContext(Context)
    // const { productById } = useParams();


    // API CALL  - Llamado a un archivo .JSON local
    // Creo una función asincrónica


    return(
        <div className="CardConteiner">
            {console.log("users",users)}
            {users.items.slice(0,10).map((e)=>(
                <div>{e.id}</div>
            ))}

        </div>
    )
}

export default CardConteiner;

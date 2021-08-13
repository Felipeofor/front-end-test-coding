import { Link } from 'react-router-dom';
import React from 'react';

function Toast({value}) {

    const {error} = value

    return(
        <div className="cardConteiner">
               <h5 >{error.message}</h5>
               <Link to="/">Volver al Home</Link> 
        </div>   
    );
}

export default Toast;

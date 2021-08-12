import React, { Link } from 'react-router-dom';

function Toast() {

    return(
        <div className="toast">
               <h5>¡Error!</h5>
               <Link to="/">Volver al buscador</Link> 
        </div>   
    );
}

export default Toast;

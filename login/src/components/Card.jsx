import React from 'react';

function Card ({ avatar, name, id, key }) {

    return(
        <div className="card">
            <img src={avatar} alt={key}/>
            <h3>{name}</h3>
            <p>{id}</p>
        </div>
    );
}

export default Card;

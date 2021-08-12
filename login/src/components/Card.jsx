import React from 'react';

function Card ({ avatar, name, id, key }) {

    return(
        <div className="card" alt={key}>
            <img src={avatar}/>
            <h3>{name}</h3>
            <p>{id}</p>
        </div>
    );
}

export default Card;

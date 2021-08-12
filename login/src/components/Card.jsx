import React from 'react';

function Card ({ avatar, name, id }) {

    return(
        <div className="card">
            <img src={avatar}/>
            <h3>{name}</h3>
            <p>{id}</p>
        </div>
    );
}

export default Card;

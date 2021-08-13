import React from 'react';

const User = ({ login, id }) => {
 return(
    <div className="cards">    
    <div className="card card-1">
    <div className="card__icon"><i className="fas fa-bolt"></i></div>
    <p className="card__exit"><i className="fas fa-times"></i></p>
    <section className="cardConteiner">
        <h2 className="card__title" key={ id }>Usuario: { login }</h2>
        <p className="card__apply">ID: { id }</p>
    </section>
  </div></div>
 )   
}

export default User;
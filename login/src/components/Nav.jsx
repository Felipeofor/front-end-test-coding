//Importamos los componentes
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Context from './Context'
import { useHistory } from 'react-router';

function Nav () {
    const {setSearch ,getUsuarios,search} = useContext(Context)
    const history = useHistory()
    const onChange = (e) => {
      /*Actualizamos el DOM con cada cambio que ingrese el usuario*/
      setSearch(e.target.value);
      if (e.target.value.lenght === 0) {
      setSearch(search);
      }
    };
    /*Cuando presionemos el boton llamaremos a la funcion searchUsuario del archivo api.js para que busque los usuarios*/
    const onClick =  (e) => {
      e.preventDefault()
        if(search === 'noloro'){
        return alert('Busqueda no permitida');
        } else{
        getUsuarios()
        history.push('/usuarios')
      }  
      };

    return(
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Lista de Usuarios</Link>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={ onChange }/>
              { search.length > 3 ? <button className="btn btn-outline-success"  onClick={ onClick }>Search</button> : <div>Ingrese al menos cuatro caracteres</div>}
            </form>
          </div>
        </nav>
      </div>
    );
}

export default Nav;


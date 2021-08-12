//Importamos los componentes
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Context from './Context'
import { useHistory } from 'react-router';
/*Le avisamos a React que renderice con cada cambio de estado*/
const { useState } = React; 


function Nav () {

      /*Ingreso el valor inicial del search*/
      // const { onSearch } = props;
      const {onSearch} = {};
 //     const [search,setSearch] = useState("");
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
          console.log("antes del getUsuario",search)
          
           
           
           getUsuarios()
          history.push('/usuarios')

        }
          
      };
      //  console.log(search);


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


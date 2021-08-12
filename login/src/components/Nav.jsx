//Importamos los componentes
import React from 'react';
/*Le avisamos a React que renderice con cada cambio de estado*/
const { useState } = React; 


function Nav (props) {

      /*Ingreso el valor inicial del search*/
      const { onSearch } = props;
      const [search,setSearch] = useState("");
  
      const onChange = (e) => {
          /*Actualizamos el DOM con cada cambio que ingrese el usuario*/
          setSearch(e.target.value);
          if (e.target.value.lenght === 0) {
             onSearch(null);
         }
      };
      /*Cuando presionemos el boton llamaremos a la funcion searchUsuario del archivo api.js para que busque los usuarios*/
      const onClick = async (e) => {
        if(search === 'noloro'){
          return alert('No exite');
        } else{
          return onSearch(search);
        }
          
      };
       console.log(search);


    return(
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">Lista de Usuarios</a>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={ onChange }/>
              { search.length > 3 ? <button class="btn btn-outline-success" type="submit" onClick={ onClick }>Search</button> : <div>Ingrese al menos cuatro caracteres</div>}
            </form>
          </div>
        </nav>
      </div>
    );
}

export default Nav;


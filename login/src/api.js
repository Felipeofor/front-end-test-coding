/*Aqui estan las constantes que consumen de la api */


export const searchUsuario = async (usuario) => {
    /*Protegemos la aplicacion ante cualquier error que pueda traer la api con try catch */
    try {
        /*Creamos una variable que consume de la api el perfil que el usuario este buscando */
        let url = `https://api.github.com/search/users?q=`/*Buscamos el pokemon que el usuario ingreso */
        const response = await fetch(url);/*Fetch nos permite obtener la informacion de esa url*/
        const data = await response.json();/*Pasamos la informacion recibida a Json*/console.log(data)
        return data;/*Retornamos esa infomarcion a nuestro componente de React */
        
    }
    catch (err) {

    }
};

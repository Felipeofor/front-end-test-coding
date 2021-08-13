import React from 'react'
import { Provider} from './Context'
import { useState } from 'react'
const CustomProvider =  ({children}) =>{

    const [search,setSearch] = useState('')
    const [users,setUsers] =useState({items:[]})

    const getUsuarios = async () => {
        // Espero a que la data se fetchee
        const data = await fetch(`https://api.github.com/search/users?q=${search}`)
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseData = await data.json()
        // Vemos qué llegó
        setUsers(responseData)
    }


    return(
        <Provider value={{search, setSearch, users, getUsuarios}} >
            {children}
            </Provider>

    )
}

export default CustomProvider
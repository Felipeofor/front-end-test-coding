import React from 'react'
import { Provider} from './Context'
import { useState } from 'react'
const CustomProvider =  ({children}) =>{

    const [search,setSearch] = useState('')
    const [users,setUsers] =useState({items:[]})
    const [showError,setShowError]=useState(false)
    const [error,setError]=useState('')

    const getUsuarios = async () => {
        try{
        // Espero a que la data se fetchee
        const data = await fetch(`https://ai.github.com/search/users?q=${search}`)
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseData = await data.json()
        // Vemos qué llegó
        setUsers(responseData)
        } catch(err){
            setError(err)
            setShowError(true)
        }
    }


    return(
        <Provider value={{search, setSearch, users, getUsuarios, showError, error,}} >
            {children}
            </Provider>

    )
}

export default CustomProvider
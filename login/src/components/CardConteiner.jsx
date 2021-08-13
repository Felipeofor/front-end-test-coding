import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context  from './Context';
import User from './User';
import Toast from "./Toast";

function CardConteiner() {
    const {users, error, showError} = useContext(Context)

    return(
        <div>
            {showError ? <Toast value= {{error}}/> 
            : <div className="cardConteiner">
            {users.items.slice(0,10).map((e)=>(
            <Link to={`/usuario/${e.login}`}>
                <User
                    login = {e.login}
                    id = {e.id}
                /></Link>
            ))}
            </div>
            }
        </div>
    )
}

export default CardConteiner;

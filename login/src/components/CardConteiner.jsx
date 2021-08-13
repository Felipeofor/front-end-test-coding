import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context  from './Context';
import User from './User';

function CardConteiner() {
    const {users} = useContext(Context)

    return(
        <div className="cardConteiner">
            {users.items.slice(0,10).map((e)=>(
            <Link to={`/usuario/${e.login}`}>
                <User
                    login = {e.login}
                    id = {e.id}
                /></Link>
            ))}
        </div>
    )
}

export default CardConteiner;

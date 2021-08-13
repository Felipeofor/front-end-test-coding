import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context from './Context';
import UserDetails from "./UserDetails";

function CardConteiner(props) {
    const {users} = useContext(Context)

    return(
        <div className="cardConteiner">
            {users.items.slice(0,10).map((e)=>(
            <Link to={`${e.login}`}>
                <div key={e.login} className="cardConteiner_card">
                    <ul>
                        <li >Usuario: {e.login} -----ID: {e.id}</li>
                    </ul>
                </div></Link>
            ))}
        </div>
    )
}

export default CardConteiner;

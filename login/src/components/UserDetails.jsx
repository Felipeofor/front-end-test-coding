import React, {useContext} from 'react';
import Context from './Context';

const UserDetails = (use) => {
    const {users} = useContext(Context)
    console.log(use)
    return(
        <div key={users.id}>
            <img alt="imagen avatar" className="cardConteiner_imagen" src={users.avatar_url}/>
            <h5>${users.login}</h5>
            <h5>${users.id}</h5>
        </div>   
    );
}

export default UserDetails;

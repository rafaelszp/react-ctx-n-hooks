import React,{useEffect,useState} from 'react';

import UserContext from '../../user/UserContext'
import UserService from "../../user/UserService";


const  GlobalState = props => {

    const [user,setUser] = useState(null);

    useEffect(()=>{

        UserService.get().then(result => setUser(result));

    },[]);

    return (
        <UserContext.Provider
            value={
                {
                    loggedUser: user || {name: "Fetching used...",login:""}
                }
            }>

            {props.children}
        </UserContext.Provider>
    );
};

export default GlobalState;
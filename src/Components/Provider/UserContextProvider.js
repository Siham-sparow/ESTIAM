import React, {useState} from 'react';
import UserContext from './UserContext';
const UserContextProvider = ({children}) => {
    const [user,setUser]= useState({});
    const changeUser=(u)=>{
        setUser(u);
    }
    const setProp=(prop,value)=>{
        const copy = Object.assign({}, user);
        copy[prop]=value;
        setUser(copy);
    }
    const cleanUser=()=>{
        setUser({});
    }
    return (
        <UserContext.Provider 
            value={{
                user,
                setProp,
                cleanUser
            }}> 
            {children}
            </UserContext.Provider>

    );
}

export default UserContextProvider;
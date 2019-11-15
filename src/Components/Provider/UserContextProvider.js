import React, {useState} from 'react';
import UserContext from './UserContext';
const UserContextProvider = ({children}) => {
    const [user,setUser]= useState({});
    const changeUser=(u)=>{
        setUser(u);
    }
    return (
        <UserContext.Provider 
            value={{

            }}> 
            {children}
            </UserContext.Provider>

    );
}

export default UserContextProvider;
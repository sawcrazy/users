import {createContext, useEffect, useState} from 'react';
import {fetchUserNameApi} from './pages/tasks/api';

export const UserContext = createContext({});

export const UserProvider = (props) =>{
    const [user, setUser] = useState({});
    useEffect( ()=>{
        const fetchUser = async () =>{
            const allUsers = await fetchUserNameApi();
            const users = allUsers.find((item) => item.email === localStorage.getItem('auth'));
            setUser(users);
        };
        fetchUser();
    });
    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
};


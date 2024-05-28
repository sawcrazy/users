import React, {useEffect, useState} from 'react';
import {Input} from '../../components/Input';
import {Button} from '../../components/button';
import {passwordUser} from '../../constants/password';
import {fetchUserEmailApi} from '../tasks/api';
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [emails, setEmails] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchEmails = async () => {
            const newEmails = await fetchUserEmailApi();
            setEmails(newEmails);
        };
        fetchEmails();
    },
    []
    );

    const inputLogin = (value) => {
        setLogin(value);
    };
    const inputPassword = (value) => {
        setPassword(value);
    };
    const entrance = () => {
        const arr = emails.includes(login.toLowerCase());
        if (arr && +password === passwordUser) {
            localStorage.setItem('auth', login);
            navigate('/');
            return;
        }
        return alert('wrong login or password');
    };
    return (
        <div>
            <h1>Login</h1>
            <div>
                <p>Login</p>
                <Input
                    placeholder="Enter login"
                    onChange={inputLogin}
                />
            </div>
            <div>
                <p>Password</p>
                <Input
                    placeholder="Enter password"
                    type="password"
                    onChange={inputPassword}
                />
            </div>
            <div>
                <Button
                    onClick={entrance}
                >
                    Entrance
                </Button>
            </div>
            <div>
                {login}
            </div>
            <div>
                {password}
            </div>
        </div>
    );
};


import React, {useEffect} from 'react';
import {Header} from './header';
import {SideBar} from './side-bar';
import {Outlet, useNavigate} from 'react-router-dom';
import './styles.css';

export const Layout =() => {
    const navigate = useNavigate();
    useEffect(() =>{
        const email = localStorage.getItem('auth');
        if (!email) {
            navigate('/login');
        }
    },
    []
    );
    return (
        <div className="main">
            <SideBar/>
            <div className="search-and-content">
                <Header/>
                <div className="content">
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};


import React, {useContext} from 'react';
import {ReactComponent as SettingsIcon} from './img/settings.svg';
import {ReactComponent as SubtracIcon} from './img/subtract.svg';
import {ReactComponent as ExitIcon} from './img/exit.svg';
import {Link, useNavigate} from 'react-router-dom';
import {MENU} from './constants';
import {UserContext} from '../../context';

export const SideBar = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const renderMenu = () =>{
        return MENU.map(({path, Icon, name}) =>{
            return (
                <div key={path} className="user-menu-lists_item">
                    {Icon}
                    <span><Link to={path}>{name}</Link></span>
                </div>
            );
        });
    };
    const exit = () =>{
        localStorage.removeItem('auth');
        navigate('/login');
    };
    return (
        <div>
            <div className="users-menu">
                <section className="user-menu-name">
                    <h2>SaaS Kit</h2>
                </section>
                <section className="user-menu-avatar">
                    <div className="user-menu-avatar_img">
                        <img src={user.avatar} alt="avatar"/>
                    </div>
                    <div className="user-menu-avatar_info">
                        <div className="user-menu-avatar_name">
                            {user.fullName} {user.username}
                        </div>
                        <div className="user-menu-avatar_email">{user.email}</div>
                    </div>
                </section>
                <section className="user-menu-lists">
                    {renderMenu()}
                </section>
                <section className="user-menu-setting">
                    <div className="user-menu-lists_item">
                        <span><SettingsIcon/></span>
                        <span>Settings</span>
                    </div>
                    <div onClick={exit} className="user-menu-lists_item">
                        <span><ExitIcon/></span>
                        <span>Exit</span>
                    </div>
                </section>
                <section className="user-menu-toggle">
                    <div className="user-menu-lists_item">
                        <span><SubtracIcon/></span>
                        <span>Toggle sidebar</span>
                    </div>
                </section>
            </div>
        </div>
    );
};


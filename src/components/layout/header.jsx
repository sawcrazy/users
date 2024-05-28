import React from 'react';
import notifications from './img/notifications.svg';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <section className="header-search">
                    <div className="header-search-input">
                        <input type="text" placeholder="Global search"/>
                    </div>
                    <div className="header-search-bell">
                        <img src={notifications} alt="bell"/>
                    </div>
                </section>
            </div>
        );
    };
}


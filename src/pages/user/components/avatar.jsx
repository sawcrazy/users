import React from 'react';
import '../style.css';

export class Avatar extends React.Component {
    render() {
        return (
            <div>
                <div className="section_avatar">
                    <img className="section_avatar_img" src={this.props.avatar} alt="avatar"/>
                    <span className="user-name">
                        {this.props.userName}
                    </span>
                    <div className="info">
                        <span>{this.props.info}</span>
                    </div>
                    <button className="btn_users">Follow</button>
                    <button className="btn_users">Massage</button>
                </div>
            </div>
        );
    }
}


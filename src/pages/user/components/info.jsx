import React from 'react';
import '../style.css';
import {MAP_USER_INFO} from '../constants';

export class Info extends React.Component {
    render() {
        return (
            <div className="section_info">
                {this.renderList()}
            </div>
        );
    }

    renderList = ()=>{
        return Object.entries(MAP_USER_INFO).map(([name, value], index) =>{
            return (
                <div className="section_info_text" key={index}>
                    <div className="section_info_text-name">{value}</div>
                    <div className="section_info_text-value">{this.props[name]}</div>
                </div>
            );
        });
    }
}


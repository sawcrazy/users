import React from 'react';

export class SectionWithProgress extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <span className="user-name">{this.props.titel}</span>
                {this.renderList()}
            </div>
        );
    }
    renderList = () =>{
        return Object.entries(this.props.items).map(([name, value], index)=>{
            return (
                <div key={index}>
                    <div>
                        {name}
                    </div>
                    <div className="progress-line" style={{width: `${value}%`}}/>
                </div>
            );
        });
    }
}


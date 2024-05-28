import React from 'react';
import './styles.css';
import {classNames} from '../../unity/class-names';

export class Button extends React.Component {
    render() {
        const {className, onClick, ...restProps}=this.props;
        return (
            <button
                className={classNames('button', className)}
                onClick={onClick}
                {...restProps}
            >
                {this.props.children}
            </button>
        );
    }
}

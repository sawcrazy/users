import React from 'react';
import './styles.css';
import {classNames} from '../../unity/class-names';

export class Input extends React.Component {
    render() {
        const {className, onChange, ...restProps} = this.props;
        return (
            <input
                className={classNames('input', className)}
                type="text"
                onChange={(event) => onChange(event.target.value)}
                {...restProps}
            />
        );
    }
}


import React from 'react';
import {Input} from '../../components/Input';

export class Field extends React.Component {
    render() {
        const {onChange, name, ...restProps} = this.props;
        return (
            <div>
                <Input
                    onChange={(value) => onChange(value, name)}
                    {...restProps}
                />
            </div>
        );
    }
}

import React from 'react';
import {Button} from '../button';
import './styles.css';

export class Modal extends React.Component {
    render() {
        if (!this.props.open) {
            return null;
        }
        return (
            <div className="modal">
                <div className= "modal_widow">
                    <div className="modal_header">
                        <div className="modal_name">
                            {this.props.title}
                        </div>
                        <Button className="modal_button_close" onClick={this.props.closeModal}>
                            X
                        </Button>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

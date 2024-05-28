import React from 'react';
import './styles.css';
import {Modal} from '../modal';
import {Button} from '../../button';

export class ModalAvatar extends React.Component {
    render() {
        return (
            <Modal title={this.props.title} open={this.props.open} closeModal={this.props.closeModal}>
                <div className="avatars_change">
                    {this.renderAvatar()}
                </div>
                <div className="modal_footer">
                    <Button className="modal_footer_cancel" onClick={this.props.closeModal}>
                        Cancel
                    </Button>
                    <Button onClick={this.props.changeAvatarButton}>
                        Create
                    </Button>
                </div>
            </Modal>
        );
    }
    renderAvatar=()=>{
        return this.props.avatars.map((item) => {
            return (
                <div
                    className={this.props.avatarWay !== item.avatar ? 'avatars_choice' : 'avatars_choice active'}
                    onClick={()=> this.props.changeAvatar(item.id)}
                >
                    <img src={item.avatar} alt="AVATAR"/>
                </div>
            );
        });
    }
}

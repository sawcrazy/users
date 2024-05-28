import React from 'react';
import {Field} from '../../../pages/contacts/field';
import {Button} from '../../button';
import {Modal} from '../modal';
import './styles.css';
import avatars from './avatars.json';
import {ModalAvatar} from '../avatar/modal-avatar';

export class ModalAddUser extends React.Component {
    state={
        avatar: '',
        avatarChange: '/img/avatar1.png',
        name: '',
        username: '',
        email: '',
        website: '',
        technologies: 5,
        languages: 5,
        open: false,
    }
    render() {
        const {avatar, name, username, email, website, technologies, languages} = this.state;
        return (
            <Modal title="Add User" open={this.props.open} closeModal={this.props.closeModal}>
                <div className="modal_avatar" onClick={this.openModal}>
                    <img src={this.state.avatarChange} alt="Avatar"/>
                    <p>Click here to change the picture</p>
                </div>
                <div className="modal_fields">
                    <Field
                        className="modal_fields_input"
                        placeholder="Name"
                        onChange={this.inputValue}
                        name="name"
                        required
                    />
                    <Field
                        className="modal_fields_input"
                        placeholder="FullName"
                        onChange={this.inputValue}
                        name="username"
                        required
                    />
                    <Field
                        className="modal_fields_input"
                        placeholder="Email"
                        onChange={this.inputValue}
                        name="email"
                        required
                    />
                    <Field
                        name="website"
                        className="modal_fields_input"
                        placeholder="Website"
                        onChange={this.inputValue}
                        required
                    />
                </div>
                <div className="modal_body">
                    <div className="modal_skill">
                        <p>PHP</p>
                        <div className="modal_skill_buttons">
                            <button className="modal_skill_button" onClick={this.plusTechnologies}>+</button>
                            <div className="modal_skill_value">{this.state.technologies}</div>
                            <button className="modal_skill_button" onClick={this.minusTechnologies}>-</button>
                        </div>
                    </div>
                    <div className="modal_skill">
                        <p>English</p>
                        <div className="modal_skill_buttons">
                            <Button className="modal_skill_button" onClick={this.plusLanguages}>+</Button>
                            <div className="modal_skill_value">{this.state.languages}</div>
                            <Button className="modal_skill_button" onClick={this.minusLanguages}>-</Button>
                        </div>
                    </div>
                </div>
                <div className="modal_footer">
                    <Button className="modal_footer_cancel" closeModal={this.props.closeModal}>
                            Cancel
                    </Button>
                    <Button
                        onClick={()=>this.props.addUser({
                            avatar,
                            name,
                            username,
                            email,
                            website,
                            technologies,
                            languages})}
                    >
                            Create
                    </Button>
                </div>
                <ModalAvatar
                    name="Change avatar"
                    open={this.state.open}
                    closeModal={this.closeModal}
                    avatars={avatars}
                    avatarWay={this.state.avatar}
                    changeAvatar={this.changeAvatar}
                    changeAvatarButton={this.changeAvatarButton}
                />
            </Modal>
        );
    }
    openModal=()=>{
        this.setState({open: true});
    }
    closeModal=()=>{
        this.setState({open: false});
    }
    inputValue=(value, name)=> {
        this.setState({[name]: value});
    }
    plusTechnologies =()=>{
        const technologies = this.state.technologies + 1;
        this.setState({technologies});
    }
    minusTechnologies =()=>{
        const technologies = this.state.technologies - 1;
        this.setState({technologies});
    }
    plusLanguages =()=>{
        const languages = this.state.languages + 1;
        this.setState({languages});
    }
    minusLanguages =()=>{
        const languages = this.state.languages - 1;
        this.setState({languages});
    }
    changeAvatar=(id)=>{
        const avatar = avatars.filter((item) => item.id === id);
        const avatarWay = avatar[0].avatar;
        this.setState({avatar: avatarWay});
    }
    changeAvatarButton=()=>{
        this.setState({avatarChange: this.state.avatar, open: false});
    }
}


import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import {ROUTE} from '../../constants/route';
import {ReactComponent as DeleteIcon} from './img/delete.svg';
import {Button} from '../../components/button';
import {ModalAddUser} from '../../components/modal/add-user/modal-add-user';
import {API} from '../../constants/api';

export class Contacts extends React.Component {
    state={
        users: null,
        open: false,
        userNotFound: true,
        tasks: null,
    }
    async componentDidMount() {
        await this.getUsers();
        await this.getTasks();
    }
    render() {
        if (this.state.userNotFound) {
            return 'User is not found';
        }
        if (this.state.user === null || this.state.tasks === null) {
            return (
                <div>
                    <h1>Loging!</h1>
                </div>
            );
        }
        return (
            <>
                <div className="table">
                    <Button className="button" onClick={this.openModal}>
                        Add user
                    </Button>
                    <table>
                        <thead className="table-header">
                            <th>Name</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Technologies</th>
                            <th>Languages</th>
                            <th>Tasks</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                </div>
                <ModalAddUser
                    name="Add Users"
                    open={this.state.open}
                    closeModal={this.closeModal}
                    addUser={this.addUser}
                />
            </>
        );
    }
    renderList = () => {
        return this.state.users.map((item) =>{
            return (
                <tr className="table-body">
                    <td>
                        <div className="users">
                            <div className="users-img"><img src={item.avatar} alt="AVATAR"/></div>
                            <div className="users-name">
                                <Link to={`${ROUTE.CONTACTS}/${item.id}`}>
                                    {item.username}
                                </Link>
                            </div>
                        </div>
                    </td>
                    <td>{item.fullName}</td>
                    <td>{item.email}</td>
                    <td>{item.website}</td>
                    <td>{item.technologies && item.technologies.php}</td>
                    <td>{item.languages && item.languages.english}</td>
                    <td>{this.tasks(item.id)}</td>
                    <td>  <DeleteIcon onClick={()=> {
                        this.deleteUser(item.id);
                    }}/> </td>
                </tr>
            );
        });
    }
    async getUsers() {
        const usersJson = await fetch(`${API.USERS}`);
        const users = await usersJson.json();
        this.setState({users, userNotFound: users === undefined});
    }
    async getTasks() {
        const tasksJson = await fetch(`${API.TASKS}`);
        const tasks = await tasksJson.json();
        this.setState({tasks, userNotFound: tasks === undefined});
    }
    async deleteUser(id) {
        await fetch(`${API.USERS}/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        });
        await this.getUsers();
    }
    openModal =()=>{
        this.setState({open: true});
    }
    closeModal=()=>{
        this.setState({open: false});
    }
     addUser = async (values) => {
         const user = {
             avatar: values.avatar,
             username: values.name,
             fullName: values.username,
             email: values.email,
             website: values.website,
             technologies: {php: values.technologies},
             languages: {english: values.languages},
             tasks: 0,
         };
         await fetch(`${API.USERS}`, {
             method: 'POST',
             body: JSON.stringify(user),
             headers: {'Content-Type': 'application/json'},
         });
         await this.getUsers();
         this.setState({open: false});
     }
     tasks = (id) =>{
         const task = this.state.tasks;
         return task.reduce((total, item) => {
             if (id === +item.userId && item.checkTask === false) {
                 total++;
             }
             return total;
         }, 0);
     }
}

import React, {useEffect, useState} from 'react';
import {Modal} from '../modal';
import {Input} from '../../Input';
import {Button} from '../../button';
import {fetchUserNameApi} from '../../../pages/tasks/api';
import './styles.css';

export const ModalTasks = (props) =>{
    const [userName, setUserName] = useState([]);
    useEffect(() => {
        const fetchUserName = async () => {
            const newTasks = await fetchUserNameApi();
            setUserName(newTasks);
        };
        fetchUserName();
    },
    []
    );
    const renderUserName = () =>{
        return userName.map((item) => {
            return (
                <option key={item.id} value={item.id}>{item.username}</option>
            );
        });
    };
    return (
        <Modal
            title={props.title}
            closeModal={props.closeModal}
            open={props.open}
        >
            <div className="modal_tasks">
                <Input className="modal_tasks_input" onChange={props.onChange}/>
                <div>
                    <select name="users"
                        className="modal_tasks_select"
                        id="users" onChange={(event) => props.onChangeUserName(event.target.value)}
                    >
                        <option>select user</option>
                        {renderUserName()}
                    </select>
                </div>
                <div className="modal_tasks_footer">
                    <Button className="button" onClick={props.onClick}>
                        Task save
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

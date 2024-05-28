import React, {useEffect, useState} from 'react';
import {Button} from '../../components/button';
import {ReactComponent as DeleteIcon} from '../contacts/img/delete.svg';
import {API} from '../../constants/api';
import {fetchTasksWithUsersApi} from './api';
import {ModalTasks} from '../../components/modal/tasks/modal-tasks';
import './styles.css';

export const Tasks = () =>{
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [userId, setUserId] = useState('');
    useEffect(() => {
        const fetchTasks = async () => {
            const newTasksWithUsers = await fetchTasksWithUsersApi();
            setTasks(newTasksWithUsers);
        };
        fetchTasks();
    },
    []
    );

    const renderTasks = () => {
        if (tasks.length === 0) {
            return <h2>
                Tasks is not found!
            </h2>;
        }
        return tasks.map((item) => {
            return (
                <div key={item.id} className="tasks_content_input">
                    <input
                        type="checkbox" id={item.id} name="scales"
                        onChange={(event)=>checkUser(item.id, event.target.checked)}
                        checked={item.checkTask}
                    />
                    <label htmlFor={item.id}>{`${item.name} for ${item.userName}`}</label>
                    <div className="tasks_content_input_icon">
                        <DeleteIcon onClick={() => deleteUser(item.id)}/>
                    </div>
                </div>
            );
        });
    };
    const checkUser = async (id, check) =>{
        const newTask = {
            checkTask: check,
        };
        await fetch(`${API.TASKS}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(newTask),
            headers: {'Content-Type': 'application/json'},
        });
        const newTasksWithUsers = await fetchTasksWithUsersApi();
        setTasks(newTasksWithUsers);
    };
    const saveTasks = async () => {
        const newTask = {
            name: task,
            checkTask: false,
            userId,
        };
        await fetch(`${API.TASKS}`, {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers: {'Content-Type': 'application/json'},
        });
        const newTasksWithUsers = await fetchTasksWithUsersApi();
        setTasks(newTasksWithUsers);
        setOpen(false);
    };
    const deleteUser = async (id) => {
        await fetch(`${API.TASKS}/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        });
        const newTasksWithUsers = await fetchTasksWithUsersApi();
        setTasks(newTasksWithUsers);
    };

    return (
        <div className="tasks">
            <div className="tasks_header">
                <h1>Tasks</h1>
            </div>
            <div className="tasks_button">
                <Button className="button" onClick={() => setOpen(true)}>
                    Add tasks
                </Button>
            </div>
            <div className="tasks_content">
                {renderTasks()}
            </div>

            <ModalTasks
                title="Add Tasks"
                open={open}
                closeModal={() => setOpen(false)}
                onChange={(value) => setTask(value)}
                onChangeUserName={(value) => setUserId(value)}
                onClick={saveTasks}
                showTask={tasks}
            />
        </div>
    );
};


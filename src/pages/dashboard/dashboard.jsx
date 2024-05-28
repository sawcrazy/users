import React, {useContext, useEffect, useState} from 'react';
import {API} from '../../constants/api';
import {UserContext} from '../../context';

export const Dashboard =() => {
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);
    const allUser = useContext(UserContext);
    useEffect(()=>{
        const fetchUser = async () =>{
            const userNameJson = await fetch(`${API.USERS}`);
            const users= await userNameJson.json();
            const user = await users.find((item) => item.email === localStorage.getItem('auth'));
            setUsers(user);
        };
        const fetchTask = async ()=>{
            const tasksJson = await fetch(`${API.TASKS}`);
            const task = await tasksJson.json();
            setTasks(task);
        };

        fetchTask();
        fetchUser();
    },
    []
    );
    const allTask = () => {
        return tasks.reduce((total, item) => {
            if (users.id === +item.userId && item.checkTask === false) {
                total++;
            }
            return total;
        }, 0);
    };
    const lastThreeTasks = () =>{
        return tasks.reduce((total, item) => {
            if (users.id === +item.userId && item.checkTask === false) {
                total.push(item);
            }
            return total;
        }, [])
            .map((item) =>{
                return item.name;
            })
            .slice(-3)
            .map((item) => {
                return (
                    <div>
                        {item}
                    </div>
                );
            });
    };
    const test = () =>{
        console.log(allUser);
    };
    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={test}>Push</button>
            <h2> All Task: {allTask()}</h2>
            <div>
                <h2>last three tasks:</h2>
                {lastThreeTasks()}
            </div>
        </>
    );
};


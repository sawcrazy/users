import {API} from '../../constants/api';

export const fetchTasksApi = async () => {
    const tasksJson = await fetch(`${API.TASKS}`);
    return tasksJson.json();
};
export const fetchUserNameApi = async () => {
    const userNameJson = await fetch(`${API.USERS}`);
    return userNameJson.json();
};

export const fetchTasksWithUsersApi = async () =>{
    const newTasks = await fetchTasksApi();
    const users = await fetchUserNameApi();
    return newTasks.map((item)=>{
        const userNameId = users.find((user) => +item.userId === user.id);
        return {...item, userName: userNameId?.username};
    });
};
export const fetchUserEmailApi = async () => {
    const userEmail = await fetchUserNameApi();
    return userEmail.map((item) =>{
        return item.email.toLowerCase();
    });
};

import {createBrowserRouter} from 'react-router-dom';
import {Layout} from './components/layout';
import {Dashboard} from './pages/dashboard/dashboard';
import {Contacts} from './pages/contacts/contacts';
import {ROUTE} from './constants/route';
import {UserPage} from './pages/user';
import {Tasks} from './pages/tasks/tasks';
import {Login} from './pages/Login/login';

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: ROUTE.DASHBOARD,
                element: <Dashboard/>,
            },
            {
                path: ROUTE.CONTACTS,
                element: <Contacts/>,
            },
            {
                path: ROUTE.CONTACT,
                element: <UserPage/>,
            },
            {
                path: ROUTE.TASKS,
                element: <Tasks/>,
            },
        ],
    },

]);

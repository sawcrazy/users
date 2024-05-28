import {ReactComponent as DashbordIcon} from './img/dashboard.svg';
import {ReactComponent as TacksIcon} from './img/tasks.svg';
import {ReactComponent as EmailIcon} from './img/email.svg';
import {ReactComponent as ContactsIcon} from './img/contacts.svg';
import {ReactComponent as ChatdIcon} from './img/chat.svg';
import {ReactComponent as DealsdIcon} from './img/deals.svg';
import {ROUTE} from '../../constants/route';

export const MENU =[
    {
        path: ROUTE.DASHBOARD,
        Icon: <DashbordIcon/>,
        name: 'Dashbord',
    },
    {
        path: ROUTE.TASKS,
        Icon: <TacksIcon/>,
        name: 'Tacks',
    },
    {
        path: ROUTE.EMAIL,
        Icon: <EmailIcon/>,
        name: 'Email',
    },
    {
        path: ROUTE.CONTACTS,
        Icon: <ContactsIcon/>,
        name: 'Contacts',
    },
    {
        path: ROUTE.CHAT,
        Icon: <ChatdIcon/>,
        name: 'Chat',
    },
    {
        path: ROUTE.DEALS,
        Icon: <DealsdIcon/>,
        name: 'Deals',
    },

];

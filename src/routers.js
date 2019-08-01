import loginDetail from './components/loginDetail.vue'
import TodoItem from './components/TodoItem.vue'
import { pathToFileURL } from 'url';

const routers = [
    {
        path:'loginDetail',
        name:'loginDetail',
        component:loginDetail
    },
    {
        path:'/',
        component:loginDetail
    }
    
]

export default routers

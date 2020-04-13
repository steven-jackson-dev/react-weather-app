import Homepage from "pages/Homepage"
import Posts from "pages/Posts"
import BoilerplateInfo from "pages/BoilerplateInfo"
import Users from "pages/Users";

const AppRoutes = [
    {
        id: 'homepage',
        name: 'Homepage',
        path: '/',
        page: Homepage
    },
    {
        id: 'users',
        name: 'Users',
        path: '/users',
        page: Users
    },
    {
        id: 'posts',
        name: 'Posts',
        path: '/posts',
        page: Posts
    },
    {
        id: 'boilerplate-info',
        name: 'Boilerplate Info',
        path: '/boilerplate-info',
        page: BoilerplateInfo
    },
]
export default AppRoutes

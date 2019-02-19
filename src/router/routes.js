// import Components
import Home from '../components/Home'
import About from '../components/About';
import Contact from '../components/Contact'

const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },

    {
        path: "/about/",
        component: About,
        exact: false
    },
    {
        path: "/contact/",
        component: Contact,
        exact: false
    }
]

export default routes
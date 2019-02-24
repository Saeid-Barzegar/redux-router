// import your Components
import Home from '../components/Home'
import About from '../components/About';
import Contact from '../components/Contact'

const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
        label: "Home"
    },

    {
        path: "/about/",
        component: About,
        exact: false,
        label: "About"
    },
    {
        path: "/contact/",
        component: Contact,
        exact: false,
        label: "Contact"
    }
]

export default routes
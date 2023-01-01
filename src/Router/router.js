import Blog from "../Blog/Blog";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Details from "../Pages/ProjectDetails/Details";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details/:Id',
                element:<Details></Details>,
                loader:({params})=>fetch(`https://portfolio-1-server-mr7aali.vercel.app/project/${params.Id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])


export default router;
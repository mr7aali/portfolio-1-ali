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
                path:'/details/:_id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/project/${params._id}`)
            },
        ]
    }
])


export default router;
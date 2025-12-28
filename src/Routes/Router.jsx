import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ()=> fetch('/news.json')
            }
        ]
    },
    {
        path: '/about',
        element: <h2>About Layout</h2>
    },
    {
        path: '/career',
        element: <h2>Career Layout</h2>
    }
])


export default router
import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import Home from "./Pages/Home";
import View from "./Pages/View";
import Wishlist from "./Pages/WishList";
import Search from "./Pages/Search";


const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[{
            path:"/",
            element:<Home/>
        },
        {
            path:"/views/:id",
            element:<View/>,
        },
        {
            path:"/wishList",
            element:<Wishlist/>,
        },
        {
            path:"/search",
            element:<Search/>
        }
    ]
    }
])
export default router
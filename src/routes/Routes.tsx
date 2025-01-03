import Login from "@/components/Login/Login";
import User from "@/components/User/User";
import Home from "@/Pages/Home";
import { Root } from "@radix-ui/react-slot";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'/user',
            element:<User/>
        },
       
      ]
    },
    {
        path:'/login',
        element:<Login/>
    }
  ]);
export default routes;
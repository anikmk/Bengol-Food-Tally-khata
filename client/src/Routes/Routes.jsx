import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AddDebts from "../Pages/Home/HomeComponents/AddDebts/AddDebts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ShowAlldebts from "../Pages/Home/HomeComponents/ShowAllDebts/ShowAllDebts";
import AllUsers from "../Pages/Home/HomeComponents/AllUsers/AllUsers";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import DebtsDetailsPage from "../Pages/Home/HomeComponents/ShowAllDebts/DebtsDetailsPage/DebtsDetailsPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addDebts',
                element:<AddDebts />
            },
            {
                path:'/showAlldebts',
                element:<ShowAlldebts />
            },
            {
                path:'/debtsDetailsPage/:id',
                element:<DebtsDetailsPage />
            },
            {
                path:'/allUsers',
                element:<AllUsers />
            },
            {
                path:'/signUp',
                element:<SignUp />
            },
            {
                path:'/signIn',
                element:<SignIn />
            }
        ]
    }
])
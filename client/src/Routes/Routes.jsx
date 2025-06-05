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
import PrivetRoute from "./PrivetRoutes/PrivetRoute";
import Dashboard from "../Layouts/Dashboard";
import OpenYourShop from "../Pages/Home/HomeComponents/OpenYourShop/OpenYourShop";
import OrderFastFood from "../Pages/OrderFastFood/OrderFastFood";
import AllProduct from "../Pages/AllProduct/AllProduct";
import AddFastFood from "../Pages/Dashboard/AddFastFood/AddFastFood";
import AddAllProduct from "../Pages/Dashboard/AddAllProduct/AddAllProduct";
import OrderDetailsPage from "../Pages/OrderFastFood/OrderDetailsPage/OrderDetailsPage";
import ComboPackage from "../Pages/CamboPackage/ComboPackage";
import AboutPage from "../Pages/Home/HomeComponents/AboutPage/AboutPage";
import ContactPage from "../Pages/Home/HomeComponents/ContactSection/ContactPage";
import AllOrders from "../Pages/Dashboard/AllOrders/AllOrders";
import ShopingCart from "../Componnents/Shared/NavBar/ShopingCart/ShopingCart";
import UserRoute from "./PrivetRoutes/UserRoute/UserRoute";
import AddPackages from "../Pages/Dashboard/AddPackages/AddPackages";
import MorePackages from "../Pages/Home/HomeComponents/Package/MorePackages/MorePackages";
import CustomOrderForm from "../Pages/Home/HomeComponents/Package/MorePackages/CustomOrderForm/CustomOrderForm";
import EditCustomPrice from "../Pages/Dashboard/EditCustomPrice/EditCustomPrice";
import EditCustomPriceTwo from "../Pages/Dashboard/EditCustomPrice/EditCustomPriceTwo";
import PackageOrders from "../Pages/Dashboard/AllOrders/PackageOrders/PackageOrders";
import PackageOrderCustomerInfoForm from "../Pages/Home/HomeComponents/Package/MorePackages/PackageOrderCustomerInfoForm";
import EditPackage from "../Pages/Dashboard/EditPackage/EditPackage";
import EditFastFood from "../Pages/Dashboard/EditFastFood/EditFastFood";
import BirthdayCakeCategorys from "../Componnents/BirthdayCake/BirthdayCakeCategorys/BirthdayCakeCategorys";
import BirthdayCakeCard from "../Componnents/BirthdayCake/BirthdayCakeCard/BirthdayCakeCard";
import BirthdayOrderForm from "../Componnents/BirthdayCake/BirthdayOrderForm/BirthdayOrderForm";
import AddBirthdayCakeCatelog from "../Pages/Dashboard/AddBirthdayCakeCatelog/AddBirthdayCakeCatelog";
import EditBirthdayCatelog from "../Pages/Dashboard/EditBirthdayCatelog/EditBirthdayCatelog";
import CheckOutForm from "../Pages/AllProduct/AllProductOrderInfoForm/CheckOutForm";
import PornoOrderList from "../Pages/Dashboard/AllOrders/PornoOrdersList/PornoOrderList";
import Calculator from "../Pages/Dashboard/Calculator/Calculator";
import Analytics from "../Pages/Dashboard/Analytics/Analytics";

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
                path:'/openYourShop',
                element:<OpenYourShop />
            },
            {
                path:'/OrderFastFood',
                element:<OrderFastFood />
            },
            {
                path:'/foodDetails',
                element:<UserRoute><OrderDetailsPage /></UserRoute>
            },
            {
                path:'/packageOrderInfoForm',
                element: <UserRoute><PackageOrderCustomerInfoForm /></UserRoute>
            },
            {
                path:'/morePackagesForWedding',
                element:<MorePackages />
            },
            {
                path:'/customPackageOrderForm',
                element:<UserRoute><CustomOrderForm /></UserRoute>
            },
            {
                path:'/shopingCart',
                element: <ShopingCart />
            },
            {
                path:"/comboPackage",
                element:<ComboPackage />
            },
            {
                path:'/allProduct',
                element:<AllProduct />
            },
            {
                path:'/checkOutForm',
                element: <CheckOutForm />
            },
            {
                path:'/birthdayCakeCategory',
                element:<BirthdayCakeCategorys />
            },
            {
                path:'/birthdaycategoryCard',
                element:<BirthdayCakeCard />
            },
            {
                path:'/birthdayOrderForm',
                element:<UserRoute><BirthdayOrderForm /></UserRoute>
            },
            {
                path:"/about",
                element:<AboutPage />
            },
            {
                path:'/contact',
                element:<ContactPage />
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
    },




    // dashboard

    {
        path:'/dashboard',
        element:<PrivetRoute><Dashboard /></PrivetRoute>,
        errorElement:<ErrorPage />,
        children:[
                {
                    path:'allOrders',
                    element:<PrivetRoute><AllOrders /></PrivetRoute>
                },
                {
                    path:'packageOrders',
                    element:<PrivetRoute><PackageOrders /></PrivetRoute>
                },
                {
                    path:'allPornoOrdersList',
                    element:<PrivetRoute><PornoOrderList /></PrivetRoute>
                },
                {
                    path:'addDebts',
                    element:<PrivetRoute><AddDebts /></PrivetRoute>
                },
                {
                    path:'showAlldebts',
                    element:<PrivetRoute><ShowAlldebts /></PrivetRoute>
                },
                {
                    path:'debtsDetailsPage',
                    element:<PrivetRoute><DebtsDetailsPage /></PrivetRoute>
                },
                {
                    path:'addFastFood',
                    element:<AddFastFood />
                },
                {
                    path:'addPackages',
                    element:<AddPackages />
                },
                {
                    path:'updatePackage',
                    element:<EditPackage />
                },
                {
                    path:'updateFastFood',
                    element:<EditFastFood />
                },
                {
                    path:'updateCustomPrice',
                    element:<EditCustomPrice />
                },
                {
                    path:'updateCustomPrice2',
                    element:<EditCustomPriceTwo />
                },
                {
                    path:'addAllProduct',
                    element:<AddAllProduct />
                },
                {
                    path: 'addBirthdayCakeCatelog',
                    element: <AddBirthdayCakeCatelog />
                },
                {
                    path:'updateBirthdayCake',
                    element:<EditBirthdayCatelog />
                },
                {
                    path:'allUsers',
                    element:<PrivetRoute><AllUsers /></PrivetRoute>
                },
                {
                    path:'calculator',
                    element:<PrivetRoute><Calculator /></PrivetRoute>
                },
                {
                    path:'analytics',
                    element:<PrivetRoute><Analytics /></PrivetRoute>
                },

        ]  
    }
])
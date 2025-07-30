import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import UserProfile from "../Pages/UserProfile";
import LoginPage from "../Pages/Login/LoginPage";
import Error404Page from "../Pages/Error404Page";
import CategoryItems from "../Pages/CategoryItems";
import SingleProductPage from "../Pages/Product/SingleProductPage";
import ProtectedRouter from "./ProtectedRouter";
import Checkout from "../Pages/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // errorElement: <Error404Page />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "category/:CategoryID",
                element: <CategoryItems />,
            },
            {
                path: "product/:ProductID",
                element: <SingleProductPage />,
            }, {
                path: "checkout",
                element: <Checkout />,
            },
            {
                element: <ProtectedRouter ProtectedRole="user" />,
                children: [
                    {
                        path: "profile",
                        element: <UserProfile />,
                    },
                ],
            },
            {
                path: "*",
                element: <Error404Page />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);

const AppRouter = () => {
    return (
        <RouterProvider router={router} />

        // <BrowserRouter>
        // <Routes>
        //     <Route path="/" element={<MainLayout/>}>
        //         <Route index element={<Home/>}/>
        //         <Route path="about" element={<About/>}/>
        //         <Route element={<UserProtectedRouter/>}>
        //             <Route path="profile" element={<UserProfile/>}/>
        //         </Route>
        //     </Route>
        //         <Route path="/login" element={<LoginPage/>}/>
        // </Routes>

        // </BrowserRouter>
    );
};

export default AppRouter;

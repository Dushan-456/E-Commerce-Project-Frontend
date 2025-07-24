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
import UserProtectedRouter from "./UserProtectedRouter";
import Error404Page from "../Pages/Error404Page";
import CategoryItems from "../Pages/CategoryItems";
import Product from "../Pages/Product";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error404Page />,
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
            element: <Product />,
         },
         {
            element: <UserProtectedRouter />,
            children: [
               {
                  path: "profile",
                  element: <UserProfile />,
               },
            ],
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

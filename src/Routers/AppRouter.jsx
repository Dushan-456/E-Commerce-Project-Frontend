import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home"
import About from "../Pages/About"
import UserProfile from "../Pages/UserProfile"
import LoginPage from "../Pages/Login/LoginPage"
import UserProtectedRouter from "./UserProtectedRouter"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route element={<UserProtectedRouter/>}>
                <Route path="profile" element={<UserProfile/>}/>
            </Route>
        </Route>
            <Route path="login" element={<LoginPage/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default AppRouter

import { NavLink } from "react-router-dom";
import './HeaderNavMenu.css'

const HeaderNavMenu = () => {
   return (
      <div className="navmenu">
         <NavLink
            to="/"
            className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "active" : ""
            }>
            Home
         </NavLink>
         <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "active" : ""
            }>
            About Us
         </NavLink>
         <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "active" : ""
            }>
            My Profile
         </NavLink>
         <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "active" : ""
            }>
            Login
         </NavLink>
      </div>
   );
};

export default HeaderNavMenu;

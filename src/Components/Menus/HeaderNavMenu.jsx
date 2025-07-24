import { NavLink } from "react-router-dom";
import "./HeaderNavMenu.css";
import IconButton from "@mui/material/IconButton";

const HeaderNavMenu = () => {
   return (
      <div className="navmenu">
         <IconButton className="nav-link">
            <NavLink
               to="/"
               className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
               }>
               Home
            </NavLink>
         </IconButton>
         <IconButton className="nav-link">
            <NavLink
               to="/about"
               className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
               }>
               About Us
            </NavLink>
         </IconButton>
         <IconButton className="nav-link">
            <NavLink
               to="/profile"
               className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
               }>
               My Profile
            </NavLink>
         </IconButton>
         <IconButton className="nav-link">
            <NavLink
               to="/login"
               className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
               }>
               Login
            </NavLink>
         </IconButton>
      </div>
   );
};

export default HeaderNavMenu;

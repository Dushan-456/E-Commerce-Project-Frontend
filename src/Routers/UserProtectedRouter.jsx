import { Navigate, Outlet } from "react-router-dom";

const UserProtectedRouter = () => {
   const user = true;
   return user ? <Outlet /> : <Navigate to="/login" />;
};

export default UserProtectedRouter;

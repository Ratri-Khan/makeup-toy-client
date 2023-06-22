import { useContext } from "react";
// import { AuthContext } from "../AuthContextProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContextProvider/AuthProviders";

const PraivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};
export default PraivateRoute;

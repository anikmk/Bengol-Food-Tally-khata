
import Loader from "../../../Componnents/Shared/Loader/Loader";
import useAuth from "../../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const UserRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
      if (loading) {
        return <Loader />;
      }
      if (user) {
        return children;
      }
      return <Navigate to={"/signUp"} state={{ from: location }} replace/>;
};

export default UserRoute;
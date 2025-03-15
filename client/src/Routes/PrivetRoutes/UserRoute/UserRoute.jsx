
import Loader from "../../../Componnents/Shared/Loader/Loader";
import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const UserRoute = ({children}) => {
    const {user,loading} = useAuth();
  
      if (loading) {
        return <Loader />;
      }
      if (user) {
        return children;
      }
      return <Navigate to={"/signUp"} />;
};

export default UserRoute;
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Componnents/Shared/Loader/Loader";
import useAuth from "../../hooks/useAuth";
import { getSingleUser } from "../../Api/userRelatedApi/userApi";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loading} = useAuth();
    const {data:singleUser = {}, isLoading} = useQuery({
        queryKey:[user?.email,"singleUser"],
        queryFn:async()=>await getSingleUser(user?.email),
      })
      if (loading || isLoading) {
        return <Loader />;
      }
      if (user && singleUser?.status === "admin") {
        return children;
      }
      return <Navigate to={"/"} />;
};

export default PrivetRoute;
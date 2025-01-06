import { useQuery } from "@tanstack/react-query";
import UsersCard from "./UsersCard/UsersCard";
import { allUsers } from "../../../../Api/userRelatedApi/userApi";

const AllUsers = () => {
    const {data:allUsersData,isLoading,refetch} = useQuery({
        queryKey:"allUsersData",
        queryFn:async () => await allUsers() 
    })

    return <div>
         <div className="h-screen mt-10">
            <div className="grid grid-cols-1 gap-5 place-items-center">
                {
                    allUsersData?.map((item)=>
                        <UsersCard key={item?._id} user={item} loading={isLoading} reFetch={refetch}/>
                   )
                }

            </div>

        </div>
    </div>
}
export default AllUsers;

import UsersCard from "./UsersCard/UsersCard";

const AllUsers = () => {
    return <div>
         <div className="">
            <div className="grid grid-cols-1 gap-5 place-items-center">
                {
                    [1,2,3].map((item,idx)=><div className="" key={idx}>
                        <UsersCard />
                    </div>)
                }

            </div>

        </div>
    </div>
}
export default AllUsers;
import { useQuery } from "@tanstack/react-query";
import UsersCard from "./UsersCard/UsersCard";
import { allUsers } from "../../../../Api/userRelatedApi/userApi";
import { useState } from "react";

const AllUsers = () => {
    const [moreText,setMoreText] = useState(false);
    const handleMoreText = () => {
        setMoreText(!moreText)
    }
    const {data:allUsersData,isLoading,refetch} = useQuery({
        queryKey:"allUsersData",
        queryFn:async () => await allUsers() 
    })

    return <div>
         <div className="my-10">
            <div className="text-center w-[95%] md:w-[600px] mx-auto mb-5">

                <p className="text-lg mb-2 text-primary font-medium">ইউজার কে এখান থেকে ম্যানেজ করুন </p>
                <button onClick={handleMoreText} className="bg-primary py-[2px] text-sm text-neutral shadow-lg px-2 hover:bg-[#ff1c68] transition-all capitalize rounded mb-5">{moreText ? "বন্ধ করুন":"আরো জানুন"}</button> 
                {
                    moreText && <div>
                    <p className="text-base mb-3 text-slate-800">আপনি চাইলে ইউজার কে এডমিন বাটন এ ক্লিক করে  এডমিন করতে পারবেন। </p>
     
                     <p className="text-sm text-slate-800"> <span className="text-green-700 font-semibold text-base">✔ মনে রাখুন:</span> ইউজার কে এডমিন করলে আপনার সকল দায়িত তার কাছে চলে যাবে । এবং সে চাইলে আপনার সফটওয়ার টি ম্যানেজ করেতে পারবে।</p>
     
                     <p className="text-sm my-3 text-slate-800"><span className="text-green-700 text-base font-semibold">✔ অথবা:</span> মুছে ফেলুন বাটনে ক্লিক করার মধ্যে দিয়ে ইউজার কে সম্পুর্ণ ভাবে রিমুভ করে ফেলতে পারবেন </p>
                    </div>
                }
               
            </div>
            <div className="grid grid-cols-1 gap-7 place-items-center">
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
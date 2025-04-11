import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCustomersAllOrders } from "../../../Api/fastFoodRelatedApi/foodApi";
import OrderCard from "./OrderCard";

const AllOrders = () => {
    const [moreText,setMoreText] = useState(false);
    const handleMoreText = () => {
        setMoreText(!moreText)
    }
    const {data:customerOrderData,isLoading,refetch} = useQuery({
        queryKey:"customerOrderData",
        queryFn:async () => await getCustomersAllOrders() 
    })
    
    return <div>
    <div className="my-10">
       <div className="text-center w-[95%] md:w-[600px] mx-auto mb-5">

           <p className="text-lg mb-2 text-primary font-medium">ইউজার কে এখান থেকে ম্যানেজ করুন </p>
           <button onClick={handleMoreText} className="bg-primary py-[2px] text-sm text-neutral shadow-lg px-2 hover:bg-[#ff1c68] transition-all capitalize rounded mb-5">{moreText ? "বন্ধ করুন":"আরো জানুন"}</button> 
           {
               moreText && <div>
                <p className="text-sm my-3 text-slate-800"><span className="text-green-700 text-base font-semibold">✔ বিশ্লেষণ:</span> মুছে ফেলুন বাটনে ক্লিক করার মধ্যে দিয়ে ইউজার কে সম্পুর্ণ ভাবে রিমুভ করে ফেলতে পারবেন </p>
               </div>
           }
          
       </div>
       <div className="md:p-5 p-3">
            <h2 className="text-xl font-bold mb-4 text-center">All Customer Orders</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">Customer Name</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">Adress</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">Phone</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">Food Name</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">Quantity</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">Money</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">Charge</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">Total Money</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerOrderData?.map((order) => (
                            <OrderCard key={order._id} order={order} loading={isLoading} reFetch={refetch}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

   </div>
</div>
}
export default AllOrders;
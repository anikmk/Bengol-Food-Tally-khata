import { useState } from "react";
import Loader from "../../../../../Componnents/Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import BirthdayCakeOrderCard from "./BirthdayCakeOrderCard";
import { getBirthdayAllOrders } from "../../../../../Api/BirthdayRelatedApi/birthday";

const BirthdayCakeOrders = () => {
      const [moreText,setMoreText] = useState(false);
        const {data:birthdayCakeOrderData,isLoading,refetch} = useQuery({
            queryKey:["birthdayCakeOrderData"],
            queryFn:async()=> await getBirthdayAllOrders()
        })
          console.log(birthdayCakeOrderData);
        
          const handleMoreText = () => {
            setMoreText(!moreText)
        }
    
          
          if(isLoading) return <Loader />
    return <>
    <div className="my-10">
       <div className=" mb-5">

           <p className="text-lg mb-2 text-primary font-medium">এখানে বার্থডে এর সকল অর্ডার এর লিস্ট</p>
           <button onClick={handleMoreText} className="bg-primary py-[2px] text-sm text-neutral shadow-lg px-2 hover:bg-[#ff1c68] transition-all capitalize rounded mb-5">{moreText ? "বন্ধ করুন":"আরো জানুন"}</button> 
           {
               moreText && <div>
                <p className="text-sm my-3 text-slate-800"><span className="text-green-700 text-base font-semibold">✔ বিশ্লেষণ:</span> ডিলেট বাটনে ক্লিক করার মধ্যে দিয়ে অর্ডার টি সম্পুর্ণ ভাবে ডিলেট করে ফেলতে পারবেন </p>
               </div>
           }
          
       </div>
       <div className="md:p-5 p-3">
            <h2 className="text-xl font-bold mb-4 text-center">সকল অর্ডার ম্যানেজ করুন</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">কেকের ছবি</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">স্টোক</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">কাস্টমারের নাম</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">মোবাইল</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">ঠিকানা</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">ডিজাইন</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">জন্মদিনের তারিখ</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">জন্মদিনের হেডিং</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">মানি চার্জ</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">মোট টাকা</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">একশন</th>
                            <th className="text-sm md:text-base md:py-2 py-[4px] md:px-4 px-[6px] border">বিস্তারিত/লোকেশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {birthdayCakeOrderData?.map((order) => (
                            <BirthdayCakeOrderCard key={order._id} order={order} loading={isLoading} reFetch={refetch}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
                        <div className="divider"></div>
   </div>
    </>
}
export default BirthdayCakeOrders;
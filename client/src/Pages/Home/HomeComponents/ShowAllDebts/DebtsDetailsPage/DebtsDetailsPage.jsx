import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { deleteSingleDebtsWithMoneyTransactions, findSingleDebtsById, showMoreTransjectionDetails, updateSingleDebtsBelance } from "../../../../../Api/debtsRelatedApi/debtsApi";
import Loader from "../../../../../Componnents/Shared/Loader/Loader";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import Share from "../ShareTransaction/Share";
import {toast} from "react-hot-toast"
import Load from "../../../../../Componnents/Shared/Loader/load/Load";

const DebtsDetailsPage = () => {
    
    const [loader,setLoader] = useState(false)
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');

    const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

    const {data:singleDebts,isLoading,refetch:singleDebtsRefatch} = useQuery({
        queryKey:[id,'singleDebts'],
        queryFn: async () => await findSingleDebtsById(id),

    });
    const { data: historyData, isLoading: historyLoading,refetch:historyRefatch } = useQuery({
        queryKey: ['historyData', id],
        queryFn: async () => await showMoreTransjectionDetails(id),
       
    });
    const totalMoreMoney = historyData?.reduce((acc, transaction) => acc + transaction.moreMoney, 0);
    const totalBackMoney = historyData?.reduce((acc, transaction) => acc + transaction.backMoney, 0);
   const totalMoney = totalMoreMoney + totalBackMoney;

    const [checkBalance,setCheckBalance] = useState(false);
    const handleCheckBalance = async() => {
        historyRefatch()
        singleDebtsRefatch()
        setCheckBalance(!checkBalance)
    }

    const handleMoreDebts = async (e) => {
        e.preventDefault();
        const form = e.target;
        const moreMoney = form.moremoney.value;
        const backMoney = form.backmoney.value;
    
        const calculateData = {
            id,
            name: singleDebts?.name,
            moreMoney,
            backMoney,
            updateBalanceId: id,
            formattedDate,
        };
        setLoader(true);
        try {
            const { updatedDebt, result } = await updateSingleDebtsBelance(calculateData);
            if(updatedDebt?.modifiedCount && result?.insertedId) {
                singleDebtsRefatch();
                historyRefatch();
                setLoader(false);
                form.reset();
                toast.success('"ধন্যবাদ" পাওনাদারের টাকা আপডেড করা হয়েছে।',{duration:5000});
                
            }
        } catch (err) {
            toast.error("দুঃখিত কোথায় ভূল হয়েছে কিচ্ছুক্ষণ পর আবার চেষ্টা করুন")
        }
        finally {
            setLoader(false); 
          }
    };

    // delete debts with all transaction handler:
    const handleDeleteDebts = async (id) => {
        const isConfirmed = window.confirm(
            `আপনি কি নিশ্চিত যে ${singleDebts?.name} নামের পাওনাদারকে মুছে ফেলতে চান?`
        );
        if (!isConfirmed) {
            toast("পাওনাদার মুছে ফেলার কাজ বাতিল করা হয়েছে।", { icon: "⚠️" });
            return;
        }

        try{
            const result = await deleteSingleDebtsWithMoneyTransactions(id);
        if(result.deletedCount > 0){
            singleDebtsRefatch();
            historyRefatch();
            toast.success("সফল ভাবে পাওনাদারকে মুছে ফেলা হয়েছে।")
        }
        }
        catch(err){
            toast.error("ত্রুটির কারনে পাওনাদারকে মুছে ফেলা যায় নি । আবার চেষ্টা করুন")
        }

    }
    
    return <>
    <div className="w-[96%] mx-auto p-6 my-12 shadow-lg bg-neutral">
        {
            checkBalance  ? <><div onClick={handleCheckBalance} className="text-center cursor-pointer bg-primary mb-5 p-2 rounded text-neutral font-medium"><div className=" animate-pulse">{singleDebts?.balance} টাকা</div></div></>:<div onClick={handleCheckBalance} className="text-center bg-primary mb-5 p-2 rounded text-neutral font-medium cursor-pointer">ব্যালেন্স চেক করুন</div>
        }
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-0 md:gap-4">
            {
                isLoading ? <Loader />: <>
                {
                    singleDebts ? <><div>
                    <h2 className="text-lg mb-2">পাওনাদারের নামঃ <span className="text-primary uppercase font-semibold ">{singleDebts?.name}</span></h2>
                    <p className="text-lg">সর্বমোট পাওনা টাকাঃ <span className="text-primary uppercase font-semibold">{singleDebts?.balance} টাকা</span></p>
                   
                    <div  className="bg-primary py-[5px] text-base text-neutral shadow-lg px-4 mt-4 inline-block rounded-full hover:bg-[#ff1c68] transition-all">
                    <Link  to={'/showAlldebts'}>ব্যাক করুন</Link>
                    </div>
                    <div onClick={()=>handleDeleteDebts(id)}  className="bg-primary py-[5px] text-base text-neutral shadow-lg px-4 mt-4 inline-block rounded-full hover:bg-[#ff1c68] transition-all ml-3 md:ml-5 capitalize cursor-pointer">
                    {singleDebts?.name} কে মুছে ফেলুন
                    </div>
                <div className="divider md:hidden"></div>
                </div></>:<><div className=" text-primary">
            <h1 className="text-green-700 font-medium text-center text-lg">ধন্যবাদ ডিলেট সম্পুর্ণ হয়েছে</h1>
            <div className="divider"></div>
            <h2 className="text-base mb-2">আপনি পাওনাদারকে মুছে ফেলেছেন। <span className="text-green-700">মনে রাখবেন</span> পাওনাদারের সকল প্রকার মানি ট্রানজেকশন সহ সকল হিস্টোরি মুছে ফেলা হয়েছে । আপনি চাইলে নতুন করে পাওনাদারকে যুক্ত করতে পারবেন।</h2> <h3 className="text-base">অনুগ্রহ করে পাওনাদার যুক্ত করুন ।</h3> <p className="text-green-700 mt-3">যুক্ত করার ঠিকানা  <Link className="bg-primary py-[5px] text-base text-neutral shadow-lg px-4 mt-2 inline-block rounded-full hover:bg-[#ff1c68] transition-all md:ml-5 capitalize ml-4" to={'/addDebts'}>চাপ দিন</Link></p></div></>
                }
                </>
            }
          
            <div>
                <form onSubmit={handleMoreDebts}>
                <div className="mb-2">
                    <label className="text-base">আরো টাকা বাকি নিলেন</label>
                    <input name="moremoney" className="mt-2 border-slate-300 border text-sm focus:outline-none bg-transparent p-[10px] rounded-lg w-full font-medium" type="number" placeholder="আরো বাকি নেওয়া টাকার পরিমান যোগ করুন---"/>
                </div>
                <div>
                    <label className="text-base">কিছু টাকা ফেরত দিলেন</label>
                    <input name="backmoney" className="mt-2 border-slate-300 border text-sm focus:outline-none bg-transparent p-[10px] rounded-lg w-full font-medium" type="number" placeholder="ফেরত দেওয়া টাকার পরিমান লিখুন---"/>
                </div>
                <div className="mt-5">
                    <button disabled={loader} className=" w-full font-medium bg-primary p-[10px] rounded-lg text-neutral text-sm shadow-lg hover:bg-[#ff1c68] transition-all">
                        {loader ? <Load />:"ক্যালকুলেট করুন"}
                    </button>
                </div>
                </form>
            </div>

        </div>
    </div>

    {/* more details for paonadar */}
    <div className="w-[98%] mx-auto border p-2 my-12">
        <div className="text-center">
            <h5 className="text-lg text-primary mb-4">পাওনাদার সম্পর্কে বিস্তারিত জানুন</h5>
            <p className="text-xs"><span className="font-semibold text-red-600">জেনে রাখুনঃ  </span>পাওনাদার কখন কত টাকা ট্রানজেকশন করেছে তার সম্পুর্ণ তথ্য এখান থেকে দেখুন ।</p>
        </div>
    <div className="overflow-x-auto ">
    <table className="min-w-[95%] shadow-lg  border mx-auto border-gray-100  my-6">
        <thead>
            <tr className="bg-primary text-white ">
                <th className="py-3 px-6 text-left border-b">সংখ্যা</th>
                <th className="py-3 px-6 text-left border-b">নাম</th>
                <th className="py-3 px-6 text-left border-b">তারিখ</th>
                <th className="py-3 px-6 text-left border-b">টাকা</th>
                <th className="py-3 px-6 text-left border-b">একশন</th>
                
            </tr>
        </thead>
        <tbody>
            
          {
            historyLoading ? <Loader />:<>  {historyData.length > 0 ? (
                historyData.map((transaction, index) => (
                  <TransactionHistory key={transaction?._id} history={transaction} index={index} loading={historyLoading}/>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    কোনো ট্রানজেকশন পাওয়া যায়নি।
                  </td>
                </tr>
              )}</>
          }
        <tr>
            <td colSpan="5" className="text-center py-2">
                <div className="flex items-center justify-center text-xs md:text-base">
                <span className="bg-green-200 bg-opacity-80 px-[3px] py-2">মোট ফেরত দেওয়া টাকার পরিমানঃ{totalBackMoney}</span>

                <span className="bg-pink-200 bg-opacity-80 px-[3px] py-2">আরো বাকি নেওয়া টাকার পরিমানঃ {totalMoreMoney}</span>

                <span className="bg-blue-200 bg-opacity-80 px-[3px] py-2">সর্বমোট ট্রানজেকশন টাকার পরিমানঃ {totalMoney}</span>
                <span className="bg-yellow-200 bg-opacity-80 px-[3px] py-2">আপনার বর্তমান বাকি রয়েছেঃ <span className="font-semibold">{singleDebts?.balance}</span></span>
                </div>
            </td> 
        </tr>
        </tbody>
    </table>
    </div>
              <Share/>
    </div>
    </>
}
export default DebtsDetailsPage;
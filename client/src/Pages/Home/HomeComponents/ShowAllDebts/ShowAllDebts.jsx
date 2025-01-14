
import { useState } from "react";
import Card from "./ShowAllDebtsCard/Card";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { findAllDebtsByQuery } from "../../../../Api/debtsRelatedApi/debtsApi";
import Loader from "../../../../Componnents/Shared/Loader/Loader";

const ShowAllDebts = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const [status, setStatus] = useState('');
    const [searchText, setSearchText] = useState('');
    const [sorting, setSorting] = useState('');
    console.log(status);
    const { data: filterData = [],isLoading,refetch } = useQuery({
        queryKey: ['filterData',searchText,sorting,status,currentPage],
        queryFn: async () => await findAllDebtsByQuery(searchText,sorting,status,currentPage),
      });
      const [totalPage,setTotalPage] = useState(2);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        setSearchText(form.searchtext.value)
        setStatus(form.status.value)
        setSorting(form.sorting.value)
        refetch();
        form.reset();
    }

    //   pagination handler
    const handlePageChange = (newPage) => {
        if(newPage > 0 && newPage <= totalPage)
            setCurrentPage(newPage);
        window.scrollTo({top:0,behavior:'smooth'});
        
      }
     
  return (
    <div>
        <div className="w-[95%] md:w-[75%] mx-auto border border-primary shadow-lg p-2 my-8">
            <form onSubmit={handleSubmit}>
            <div className="py-8">
            <div className="grid grid-cols-2 items-center gap-2">
                <div>
                    <label className="text-base"> নাম দিয়ে খুঁজুন</label>
                    <input name="searchtext" className="border-slate-300 border text-sm focus:outline-none bg-transparent p-[7px] rounded-lg w-full font-medium mt-[4px]" type="text" placeholder="পাওনা দারের নাম দিন"/>
                </div>
                <div>
                    <label className="text-base">পাওনাদার ফিল্টার করুন</label>
                    <select name="status" id="" className=' border-slate-300 border text-sm focus:outline-none bg-transparent p-[7px] rounded-lg w-full font-medium mt-[4px]'>
                    <option className='' value="">অপশন বেছে নিন</option>
                    <option className='' value="clear">পাওনা টাকা দিয়ে দিয়েছেন</option>
                    <option className='' value="partial">অর্ধেক পাওনা টাকা দিয়েছেন</option>
                    <option className='' value="unpaid">এখন ও কোনো পাওনা টাকা দেন নি</option>
                    </select>
                </div>
                <div>
                    <label className="text-base">পাওনাদার তুলনা করুন</label>
                    <select name="sorting" id="" className='border-slate-300 border text-sm focus:outline-none bg-transparent p-[7px] rounded-lg w-full font-medium mt-[4px]'>
                    <option className='' value="">অপশন বেছে নিন</option>
                    <option className='' value="highToLow">বেশি থেকে কম টাকার পাওনাদার</option>
                    <option className='' value="lowToHigh">কম থেকে বেশি টাকার পাওনাদার</option>
                    </select>

                </div>
                <div className="mt-5">
                    <button className=" w-full font-medium bg-primary p-[7px] rounded-lg text-neutral text-base mt-[4px]">পাওনাদার খুঁজুন</button>
                </div>

            </div>
            </div>
            </form>
        </div>
        <div className="">
            {
                isLoading ? <Loader /> : <div className="grid grid-cols-1 gap-7 place-items-center">
                {
                    filterData.map((item)=><div className="" key={item._id}>
                        <Card signleDebts={item} loading={isLoading}/>
                    </div>)
                }

            </div>
            }

                 {/* pagination */}
                 <div className='flex items-center justify-center my-12'>
                <div className="join">
                <button onClick={()=>handlePageChange(currentPage - 1)} className="join-item btn bg-primary text-neutral"><FaAngleDoubleLeft /></button>
                <button className="join-item btn">{currentPage} of {totalPage}</button>
                <button onClick={()=>handlePageChange(currentPage + 1)} className="join-item btn bg-primary text-neutral"><FaAngleDoubleRight /></button>
                </div>
                </div>
        </div>
     
    </div>
  );
};
export default ShowAllDebts;

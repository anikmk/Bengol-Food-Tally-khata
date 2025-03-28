import toast from "react-hot-toast";
import Load from "../../../Componnents/Shared/Loader/load/Load";
import { useState } from "react";
import { getCustomPerPichProductPrice, updatePerPichPrices } from "../../../Api/customOrderRelatedApi/customApi";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Componnents/Shared/Loader/Loader";

const EditCustomPriceTwo = () => {
  const [loading,setLoading] = useState(false);

  const {data:perPichCurrentPrice,isLoading,refetch} = useQuery({
          queryKey:["perPichCurrentPrice"],
          queryFn:async()=> await getCustomPerPichProductPrice()
      })
        console.log(perPichCurrentPrice);


  const handleUpdatePrice = async (e) => {
    e.preventDefault();
    const form = e.target;
  
    const updatedFields = {};
  
    if (form.misty.value) updatedFields.perPichMisty = form.misty.value;
    if (form.nimky.value) updatedFields.perPichNimky = form.nimky.value;
    if (form.jilabi.value) updatedFields.perPichJilabi = form.jilabi.value;
    if (form.doi.value) updatedFields.perPichDoi = form.doi.value;
    if (form.chomoca.value) updatedFields.perPichChomoca = form.chomoca.value;
    if (form.singkara.value) updatedFields.perPichSingkara = form.singkara.value;
    if (form.water.value) updatedFields.perPichWater = form.water.value;
  
    if (Object.keys(updatedFields).length === 0) {
      toast.error("দয়া করে অন্তত একটি ফিল্ড পূরণ করুন");
      return;
    }
  
    setLoading(true);
    try {
      const data = await updatePerPichPrices(updatedFields);
      toast.success(data.message);
      refetch();
      form.reset();
    } catch (err) {
      toast.error('দুঃখিত, বর্তমান দর আপডেট করা যায় নি। দয়া করে আবার চেষ্টা করুন');
    } finally {
      setLoading(false);
    }
  };
  if(isLoading) return <Loader />
    return <>
    <div className="bg-white p-5 md:p-8 rounded shadow-xl relative w-[95%]  mx-auto my-12">
          <div className='absolute top-0 left-0 bg-primary w-8 h-[4px]'></div>
          <div className='absolute top-0 left-0 bg-primary w-2 h-[24px]'></div>
          <div className='right-0 bottom-0 bg-primary absolute w-8 h-[4px]'></div>
          <div className='right-0 bottom-0 bg-primary absolute w-2 h-[24px]'></div>
          
        <form onSubmit={handleUpdatePrice}>
            <div className="mb-5">
                <div className='space-y-3'>
                <div className="">
                <h3 className="text-center uppercase text-xl mb-3 text-primary font-medium">* এখান থেকে পাওনাদারকে যোক্ত করুন *</h3>
                <p className="text-center md:text-sm text-xs"><span className="text-green-700">মনে রাখুনঃ</span> <span className="text-slate-700">চাহিদা অনুযাই নির্দিষ্ট তথ্য দিয়ে ফরম টি পূরণ করুন ।।</span></p>
                </div>
                <div className="divider"></div>
                <div className='md:flex items-center  gap-5'>
                <div className='w-full mb-2'>
                  <h3 className="mb-2 text-[15px] text-slate-700">মিষ্টি - <span className="animate-pulse">{perPichCurrentPrice?.perPichMisty}</span></h3>
                <input name="misty" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='মিষ্টির বর্তমান পীচ দর---'/>
                </div>
    
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">নিমকি - <span className="animate-pulse">{perPichCurrentPrice?.perPichNimky}</span></h3>
                <input name="nimky" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='নিমকির বর্তমান পীচ দর---'/>
                </div>
                <div className='w-full mb-2'>
                  <h3 className="mb-2 text-[15px] text-slate-700">জিলাপী - <span className="animate-pulse">{perPichCurrentPrice?.perPichJilabi}</span></h3>
                <input name="jilabi" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='জিলাপীর বর্তমান পীচ দর---'/>
                </div>
                </div>
                <div className='md:flex items-center  gap-5'>
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">ধই - <span className="animate-pulse">{perPichCurrentPrice?.perPichDoi}</span></h3>
                <input name="doi" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='ধইর বর্তমান পীচ দর---'/>
                </div>
                <div className='w-full mb-2'>
                  <h3 className="mb-2 text-[15px] text-slate-700">চমচা - <span className="animate-pulse">{perPichCurrentPrice?.perPichChomoca}</span></h3>
                <input name="chomoca" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পার পীচ চমচার দর---'/>
                </div>
                </div>
                <div className='md:flex items-center  gap-5'>               
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">সিংকারা - <span className="animate-pulse">{perPichCurrentPrice?.perPichSingkara}</span></h3>
                <input name="singkara" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পার পীচ সিংকারার দর'/>
                </div>
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">পানি - <span className="animate-pulse">{perPichCurrentPrice?.perPichWater}</span></h3>
                <input name="water" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পার পীচ ৫০০ গ্রাম পানির দর'/>
                </div>
                </div>
                <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
                <button>
                {loading ? <Load />:"প্রত্যেক পিচের মূল্য সেইভ করুন"}
                </button>
                </div>
              </div>
            </div>         
        </form>
      </div>
    </>
}
export default EditCustomPriceTwo;
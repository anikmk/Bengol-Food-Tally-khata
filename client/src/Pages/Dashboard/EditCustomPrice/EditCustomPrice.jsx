import toast from "react-hot-toast";

import { useState } from "react";
import { createCurrentPerKgProductPrice } from "../../../Api/customOrderRelatedApi/customApi";
import Load from "../../../Componnents/Shared/Loader/load/Load";

const EditCustomPrice = () => {
      const [loading,setLoading] = useState(false);
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const status = "perkg";
        const perKgMisty = form.misty.value;
        const perKgnimky = form.nimky.value;
        const perKgJilabi = form.jilabi.value;
        const perKgDoi = form.doi.value;
        const perPichChomoca = form.chomoca.value;
        const perPichSingkara = form.singkara.value;
        const perPichSpeed = form.speed.value;
        const perPichCucacula = form.cucacula.value;
        const perPichSevenUp = form.sevenup.value;
        const perPichWater = form.water.value;
        const customPrice = {status,perKgMisty,perKgnimky,perKgJilabi,perKgDoi,perPichChomoca,perPichSingkara,perPichSpeed,perPichCucacula,perPichSevenUp,perPichWater}
        
        setLoading(true)
        try{
          const result = await createCurrentPerKgProductPrice(customPrice);
          console.log(result);
          if(result){
            form.reset();
            toast.success('ধন্যবাদ,বর্তমান দর আপডেড করা হয়েছে')
          }
        }
        catch(err){
          toast.error('দুঃখিত বর্তমান দর আপডেড করা যায় নি। দয়া করে আবার চেষ্টা করুন')
        }
        finally{
          setLoading(false)
        }
      }
    return <>
    <div className="bg-white p-5 md:p-8 rounded shadow-xl relative w-[95%]  mx-auto my-12">
          <div className='absolute top-0 left-0 bg-primary w-8 h-[4px]'></div>
          <div className='absolute top-0 left-0 bg-primary w-2 h-[24px]'></div>
          <div className='right-0 bottom-0 bg-primary absolute w-8 h-[4px]'></div>
          <div className='right-0 bottom-0 bg-primary absolute w-2 h-[24px]'></div>
          
        <form onSubmit={handleSubmit}>
            <div className="mb-5">
                <div className='space-y-3'>
                <div className="">
                <h3 className="text-center uppercase text-xl mb-3 text-primary font-medium">* এখান থেকে পাওনাদারকে যোক্ত করুন *</h3>
                <p className="text-center md:text-sm text-xs"><span className="text-green-700">মনে রাখুনঃ</span> <span className="text-slate-700">চাহিদা অনুযাই নির্দিষ্ট তথ্য দিয়ে ফরম টি পূরণ করুন ।।</span></p>
                </div>
                <div className="divider"></div>
                <div className='md:flex items-center  gap-5'>
                <div className='w-full mb-2'>
                  <h3 className="mb-2 text-[15px] text-slate-700">মিষ্টি</h3>
                <input name="misty" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='মিষ্টির বর্তমান কেজির দর---'/>
                </div>
    
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">নিমকি</h3>
                <input name="nimky" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='নিমকির বর্তমান কেজির দর---'/>
                </div>
                <div className='w-full mb-2'>
                  <h3 className="mb-2 text-[15px] text-slate-700">জিলাপী</h3>
                <input name="jilabi" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='জিলাপীর বর্তমান কেজির দর---'/>
                </div>
                </div>
                <div className='md:flex items-center  gap-5'>
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">ধই</h3>
                <input name="doi" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='ধইর বর্তমান কেজির দর---'/>
                </div>
                <div className='w-full mb-2'>
                  <h3 className="mb-2 text-[15px] text-slate-700">চমচা</h3>
                <input name="chomoca" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পার পীচ চমচার দর---'/>
                </div>
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">সিংকারা</h3>
                <input name="singkara" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পার পীচ সিংকারার দর'/>
                </div>
                </div>
                <div className='md:flex items-center  gap-5'>               
                <div className='w-full mb-2'>
                  <h3 className="mb-2 text-[15px] text-slate-700">স্প্রিড</h3>
                <input name="speed" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পার পীচ স্প্রিডের দর'/>
                </div>
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">কুকাকুলা</h3>
                <input name="cucacula" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পার পীচ কুকাকুলার দর'/>
                </div>
                <div className='w-full mb-2'>
                  <h3 className="mb-2 text-[15px] text-slate-700">সেভেন আপ</h3>
                <input name="sevenup" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পার পীচ সেভেন আপের দর'/>
                </div>
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">পানি</h3>
                <input name="water" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পার পীচ ৫০০ গ্রাম পানির দর'/>
                </div>
                </div>
                <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
                <button>
                {loading ? <Load />:"প্রত্যেক কেজির মূল্য সেইভ করুন"}
                </button>
                </div>
              </div>
            </div>         
        </form>
      </div>
    </>
}
 export default EditCustomPrice;
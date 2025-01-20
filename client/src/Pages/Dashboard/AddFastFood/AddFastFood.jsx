import { useState } from "react";
import Load from "../../../Componnents/Shared/Loader/load/Load";
// import {toast} from "react-hot-toast"
const AddFastFood = () => {
    const [loading,setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const balance = form.ballance.value;
        const debtsData = {name,address,phone,balance}
        console.log(debtsData);
        // setLoading(true)
        // try{
        //   const result = await createAllDebts(debtsData);
        //   if(result){
        //     form.reset();
        //     toast.success('ধন্যবাদ,পাওনাদারকে যুক্ত করা হয়েছে')
        //   }
        // }
        // catch(err){
        //   toast.error('দুঃখিত পাওনাদারকে যুক্ত করা যায় নি। দয়া করে আবার চেষ্টা করুন')
        // }
        // finally{
        //   setLoading(false)
        // }
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
            <h3 className="text-center uppercase text-xl mb-3 text-primary font-medium">* এখান থেকে ফাস্ট ফোড যোক্ত করুন *</h3>
            <p className="text-center md:text-sm text-xs"><span className="text-green-700">মনে রাখুনঃ</span> <span className="text-slate-700">চাহিবা মাত্র তথ্য দিয়ে ফরম পূরণ করবেন ।।</span></p>
            </div>
            <div className="divider"></div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700"> দয়া করে খাবারের নাম যোগ করুন</h3>
            <input name="name" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='পাওনাদারের সম্পুর্ণ নাম লিখুন---' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700"> দয়া করে পাওনাদারের ঠিকানা যোগ করুন</h3>
            <input name="foodImg" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="file" required/>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700">পাওনাদারের মোবাইল নম্বর দিন</h3>
            <input name="phone" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='+৮৮..' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">খাবের দাম/টাকার পরিমান দিন</h3>
            <input name="ballance" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পাওনা টাকার পরিমান সংখায় লিখুন---' required/>
            </div>
            </div>
            <div>
              <h3 className="mb-2 text-[15px] text-slate-700">খাবার সম্পর্কে অতিরিক্ত কিছু লিখুন</h3>
            <textarea name="Description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px]" type="text" placeholder='খাবারের সম্পর্কে অতিরিক্ত কিছু কথা লিখুন---'/>
            </div>
            <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
            <button>{loading ? <Load />:"খাবার যুক্ত করুন"}</button>
            </div>
          </div>
        </div>         
    </form>
  </div>
    </>
}

export default AddFastFood;
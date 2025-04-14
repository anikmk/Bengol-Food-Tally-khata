import { useState } from "react";
import { uploadImage } from "../../../Api/utils/utils";
import { addBirthdayCakeDesign } from "../../../Api/BirthdayRelatedApi/birthday";
import {toast} from "react-hot-toast"
import Load from "../../../Componnents/Shared/Loader/load/Load";
const AddBirthdayCakeCatelog = () => {

    const [loading,setLoading] = useState(false);
    
        const handleSubmit = async(e) => {
            e.preventDefault();
            const form = e.target;
            const flavor = form.flavor.value;
            const size = form.size.value;

            const cakeImage = form.image.files[0];
            const name = form.name.value;
            const price = form.price.value;
            const availability = form.availability.value;
            const description = form.description.value;
            const imgbb = await uploadImage(cakeImage);
            const image = imgbb?.data?.display_url;
            const designData = {image,name,price,availability,description}

            const payload = {
                flavor,
                size,
                design: designData
            }
            console.log(payload);
           
            setLoading(true)
            try{
              const result = await addBirthdayCakeDesign(payload);
              if(result?.modifiedCount > 0){
                form.reset();
                toast.success('ধন্যবাদ,নতুন কেকের ডিজাইন যুক্ত করা হয়েছে')
              }
            }
            catch(err){
              toast.error('দুঃখিত কেকের ডিজাইন যুক্ত করা যায় নি। দয়া করে আবার চেষ্টা করুন')
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
            <h3 className="text-center uppercase text-xl mb-3 text-primary font-medium">* এখান থেকে ফাস্ট ফোড যোক্ত করুন *</h3>
            <p className="text-center md:text-sm text-xs"><span className="text-green-700">মনে রাখুনঃ</span> <span className="text-slate-700">চাহিবা মাত্র তথ্য দিয়ে ফরম পূরণ করবেন ।।</span></p>
            </div>
            <div className="divider"></div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700">ফ্লেভারের নাম যোগ করুন</h3>
              <select
                name="flavor"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="Vanilla">Vanilla</option>
                <option value="Chocolate">Chocolate</option>
            </select>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">সাইজ যোক্ত করুন</h3>
              <select
                name="size"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="হাফ পাউন্ড">হাফ পাউন্ড</option>
                <option value="১ পাউন্ড">১ পাউন্ড</option>
                <option value="২ পাউন্ড">২ পাউন্ড</option>
                <option value="৩ পাউন্ড">৩ পাউন্ড</option>
                <option value="৪ পাউন্ড">৪ পাউন্ড</option>
                <option value="৫ পাউন্ড">৫ পাউন্ড</option>
            </select>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className="w-full mb-4">
            <h3 className="mb-2 text-[15px] text-slate-700">ছবি যুক্ত করুন</h3>
            <input name="image" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="file" required/>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">কেকের আকার </h3>
              <select
                name="name"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="Round">Round</option>
                <option value="Square">Square</option>
                <option value="Heart-shaped">Heart-shaped</option>
            </select>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className="w-full mb-4">
            <h3 className="mb-2 text-[15px] text-slate-700">স্টোক</h3>
            <select
                name="availability"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="Available">Available</option>
                <option value="Out of Stock">Out of Stock</option>
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">টাকা </h3>
            <input name="price" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='টাকার পরিমাণ---' required/>
            </div>
            </div>
            <div>
              <h3 className="mb-2 text-[15px] text-slate-700">অতিরিক্ত কিছু লিখুন</h3>
            <textarea name="description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px]" type="text" placeholder='কেক সম্পর্কে অতিরিক্ত কিছু কথা লিখুন---'/>
            </div>
            <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
            <button>{loading ? <Load />:"ক্যাটালগ যুক্ত করুন"}</button>
            </div>
          </div>
        </div>         
    </form>
  </div>
    </>
}
export default AddBirthdayCakeCatelog;
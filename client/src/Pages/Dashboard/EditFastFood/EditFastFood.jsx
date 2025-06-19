import { useState } from "react";
import { uploadImage } from "../../../Api/utils/utils";
import Load from "../../../Componnents/Shared/Loader/load/Load";
import { UpdateFastFood } from "../../../Api/fastFoodRelatedApi/foodApi";
import toast from "react-hot-toast";
const EditFastFood = () => {
    const [loading,setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const available = form.available.value;
        const foodImg = form.foodImg.files[0];
        const foodPrice = form.foodPrice.value;
        const foodDescription = form.foodDescription.value;


        let updateData = {};
  if (available) updateData.available = available;
  if (foodPrice) updateData.foodPrice = foodPrice;
  if (foodDescription) updateData.foodDescription = foodDescription;

  // যদি ইমেজ থাকে তাহলে আপলোড করে url পাঠাবে
  if (foodImg) {
    const uploadRes = await uploadImage(foodImg);
    const imgUrl = uploadRes?.data?.display_url;
    if (imgUrl) updateData.foodImg = imgUrl;
  }
  updateData.foodName = foodName; 
  console.log(updateData);
       
        setLoading(true)
        try{
          const result = await UpdateFastFood(updateData);
          if(result){
            form.reset();
            toast.success('ধন্যবাদ,ফাস্ট ফোড আপডেড করা হয়েছে')
          }
        }
        catch(err){
          toast.error('দুঃখিত ফাস্ট ফোড আপডেড করা যায় নি। দয়া করে আবার চেষ্টা করুন')
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
            <h3 className="text-center uppercase text-xl mb-3 text-primary font-medium">* এখান থেকে ফাস্ট ফোড আপডেড করুন *</h3>
            <p className="text-center md:text-sm text-xs"><span className="text-green-700">মনে রাখুনঃ</span> <span className="text-slate-700">চাহিবা মাত্র তথ্য দিয়ে ফরম পূরণ করবেন ।।</span></p>
            </div>
            <div className="divider"></div>
            
            <div className='md:flex items-center  gap-5'>
            <div className="w-full mb-4">
            <h3 className="mb-2 text-[15px] text-slate-700">ফুডের নাম</h3>
            <select
                name="foodName"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                required>
                <option value="" disabled selected>সার্চ করুন</option>
                <option value="Singara">সিংকারা</option>
                <option value="Chomoca">চমচা</option>
                <option value="Vegetable Roll">সবজি রুল</option>
                <option value="Pizza">পিজ্জা</option>
                <option value="Chicken Pizza">চিকেন পিজ্জা</option>
                <option value="Long burgar">লম্বা বার্গার</option>
                <option value="Burger">বার্গার</option>
                <option value="Ice Cream">আইসক্রিম</option>
                <option value="Chicken Roll">চিকেন রুল</option>
                <option value="Petis">পেটিস</option>
                <option value="Lobongo">লবঙ্গ</option>
                <option value="Jhal Toast">ঝাঁল টোষ্ট</option>
                <option value="White sweet">সাদা মিষ্টি</option>
                <option value="White pich cake">সাদা পীচ কেক</option>
                <option value="Yellow pich cake">হলুদ পীচ কেক
                </option>
                <option value="Fob chomoca">ফব চমচা</option>
                <option value="Chicken bon">চিকেন বন</option>
                <option value="jhali khabab">জালি কাবাব</option>
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">খাবারের দাম</h3>
            <input name="foodPrice" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='টাকার পরিমান সংখায় লিখুন---'/>
            </div>
            </div>
           <div className="md:flex items-center gap-5">
            <div className="w-full">
            <h3 className="mb-2 text-[15px] text-slate-700">স্টোক</h3>
            <select
                name="available"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                required>
                <option value="" disabled selected>একশন</option>
                <option value={true}>খাবার আছে</option>
                <option value={false}>খাবার নাই</option>
            </select>
            </div>
              <div className="w-full">
              <h3 className="mb-2 text-[15px] text-slate-700">খাবারের ছবি</h3>
                <input className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" name="foodImg" type="file" />
              </div>
           </div>
            <div className="w-full">
              <h3 className="mb-2 text-[15px] text-slate-700">খাবারের বর্ণনা</h3>
            <textarea name="foodDescription" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px]" type="text" placeholder='খাবারের সম্পর্কে অতিরিক্ত কিছু কথা লিখুন---'/>
            </div>
            <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
            <button>{loading ? <Load />:"আপডেড করুন"}</button>
            </div>
          </div>
        </div>         
    </form>
  </div>
    </>
}

export default EditFastFood;
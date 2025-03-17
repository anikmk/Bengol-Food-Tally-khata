import { FaMinus, FaPlus } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { MdDownloadDone } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import Container from "../../../../../../Componnents/Shared/Container/Container";
import { useState } from "react";
import toast from "react-hot-toast";
import Load from "../../../../../../Componnents/Shared/Loader/load/Load";
import { misty } from "./FormData/formData";
import { peopleOptions } from "./FormData/formData";
import { nimky } from "./FormData/formData";
import { jilabi } from "./FormData/formData";
import { doi } from "./FormData/formData";
import { chomoca } from "./FormData/formData";
import { singkara } from "./FormData/formData";
import { drinks } from "./FormData/formData";
const CustomOrderForm = () => {
    const [quantity,setQuantity] = useState(1);
    const [load,setLoad] = useState(false);
    const [packageRequired, setPackageRequired] = useState(true);
    const [totalPackagePrice,setTotalPackagePrice] = useState(0);
    const price = totalPackagePrice;

     // Handle Package Change
  const handlePackageChange = (e) => {
    const value = e.target.value === 'true';
    setPackageRequired(value);
  };

    const handleIncreseFood = () => {
        setQuantity(quantity + 1)
      }
      const hanldeDecreseFood = () => {
        if(quantity === 1 ){
          return toast.error("quantity not down the zero")
        }
        setQuantity(quantity - 1)
      }
      let totalFoodPrice = price * quantity;

      let awater500 = 15;
      let awater1000 = 20;
      let awater2000 = 40;
      let aspeed = 30;
      let acocacula = 25;
      let asevenUp = 25;
      let achomoca = 20;
      let asingkara = 20;
      let ajilabi = 5;
      let animky = 3;
      let amisty = 8;

      const handleOrderSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const howMuchPackage = form.howMuchPackage.value;
        const typeOfPackage = form.typeOfPackage.value;
        const religion = form.religion.value;
        const water = form.water.value;
        const drinks = form.drinks.value;
        const chomoca = form.chomoca.checked;
        const singkara = form.singkara.checked;
        const jilabi = form.jilabi.checked;
        const nimky = form.nimky.checked;
        const misty = form.misty.checked;
        const pocketCondition = form.pocketCondition.value;
        const totalPackagePrice = price * quantity;
        const customerFullName = form.fullName.value;
        const customerAddress = form.address.value;
        const customerPhone = form.phone.value;
        const customerEmail = form.email.value;
        const customerDescription = form.description.value;
        const customerOrderData = {howMuchPackage,typeOfPackage,religion,water,drinks,chomoca,singkara,pocketCondition,jilabi,nimky,misty,quantity,totalPackagePrice,customerFullName,customerAddress,customerPhone,customerEmail,customerDescription,}
        console.log(customerOrderData);


       
       
      }
      const handleCalculateTotalPackagePrice = (e) => {
        e.preventDefault();
        // এখানে form থেকে "howMuchPackage" এর মান পাওয়া যাবে
        const form = e.target.form; // ফর্মটি গেট করি
        const howMuchPackage = form.howMuchPackage.value;
        const customerFullName = form.fullName.value;
        const totalWater500Price = howMuchPackage * awater500;
        const totalWater1000Price = howMuchPackage * awater1000;
        const totalWater2000Price = howMuchPackage * awater2000;
        const totalSpeedPrice = howMuchPackage * aspeed;
        const totalCocaculaPrice = howMuchPackage * acocacula;
        const totalSevenUpPrice = howMuchPackage * asevenUp;
        const totalChomocaPrice = howMuchPackage * achomoca;
        const totalSingkaraPrice = howMuchPackage * asingkara;
        const totalJilabiPrice = howMuchPackage * ajilabi;
        const totalNimkyPrice = howMuchPackage * animky;
        const totalMistyPrice = howMuchPackage * amisty;
      
        const totalPackagePriceIs =
          totalWater500Price +
          totalWater1000Price +
          totalWater2000Price +
          totalSpeedPrice +
          totalCocaculaPrice +
          totalSevenUpPrice +
          totalChomocaPrice +
          totalSingkaraPrice +
          totalJilabiPrice +
          totalNimkyPrice +
          totalMistyPrice;
      
        setTotalPackagePrice(totalPackagePriceIs);
        console.log(totalPackagePriceIs); // এর সাথে `totalPackagePrice` গেট হবে।
        toast.success(`মিঃ ${customerFullName} আপনার সর্বমোট প্যাকেজ এর হিসাব = ${totalPackagePriceIs} টাকা`,{duration:7000});
      };
    
    return <>
         <div>
   <Container>
   <div className="my-14">
    
     <div className="flex flex-col items-center justify-center ">
       <div className="shadow-lg p-4 w-full md:w-[70%]">
         <div className=" space-y-4">
           <div className="flex items-center justify-around md:gap-3">
               <div className="flex text-base items-center gap-9 py-3 px-4 font-semibold shadow-lg">
                   <div onClick={hanldeDecreseFood} className="cursor-pointer hover:text-primary"><FaMinus  /></div>
                   <div className="text-xl">{quantity}</div>
                   <div onClick={handleIncreseFood} className="cursor-pointer hover:text-primary"><FaPlus /></div>
               </div>
               <div className="px-[4px] py-3 text-xl hover:cursor-pointer hover:text-primary font-semibold shadow-lg">
                  মোট: {totalFoodPrice} টাকা
               </div>
           </div>
           {/* belling adress */}
           <div className="">
           <form onSubmit={handleOrderSubmit}>
            {
                packageRequired ?
                 <>
                <div className="my-8">
                <div className='space-y-3'>
                <div className="">
                <h3 className="text-center uppercase text-xl mb-3 text-primary font-medium">✔ চাহিদা অনুযাই আপনার তথ্য দিন </h3>
                <p className="text-center md:text-sm text-xs"><span className="text-green-700">মনে রাখুনঃ</span> <span className="text-slate-700">শুধুমাত্র রাজনগর, খারপাড়া, বাজুয়া, পারশিপাড়া,  কণিগ্রাম, মজিদপুর এই গ্রাম গুলোতে হোম সার্ভিস চলিত। </span></p>
                </div>
                <div className="divider"></div>
                <div className='md:flex items-center  gap-5'>
                <div className="w-full">
                <h3 className="mb-2 text-[15px] text-slate-700">সর্ত নির্বাচন করুন</h3>
                <select onChange={handlePackageChange}
                    name="pocketCondition"
                    className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                    required>
                    <option value="" disabled selected>নির্বাচন করুন</option>
                    <option value="true">আমার প্যাকেজ সহ লাগবে</option>
                    <option value="false">আমার প্যাকেজ লাগবে না।❌</option>
                </select>
                 </div>
    
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">ধর্ম নির্বাচন করুন </h3>
                  <select
                    name="religion"
                    className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                    required>
                    <option value="" disabled selected>নির্বাচন করুন</option>
                    <option value="islam">ইসলাম</option>
                    <option value="hindus">সনাতন</option>
                </select>
                </div>
                </div>
                <div className='md:flex items-center  gap-5'>
                <div className="w-full">
                <h3 className="mb-2 text-[15px] text-slate-700">অনুষ্টানের ধরন নির্বাচন করুন</h3>
                <select
                    name="typeOfPackage"
                    className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                    required>
                    <option value="" disabled selected>নির্বাচন করুন</option>
                    <option value="wedding">বিবাহ</option>
                    <option value="birthday">জন্মদিন</option>
                    <option value="importendDay">বিশেষদিন</option>
                    <option value="othersDay">অন্যান্য</option>
                </select>
                 </div>
    
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">প্যাকেজ সংখ্যা </h3>
                  <select
                    name="howMuchPackage"
                    className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                    required>
                    <option value="" disabled selected>নির্বাচন করুন</option>
                    {
                        peopleOptions?.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
                    }
                </select>
                </div>
                </div>
                {/* check box start */}
          
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 py-5">
                <fieldset className="fieldset p-2 border border-base-300 rounded-box">
                <legend className="fieldset-legend text-sm">খাবার</legend>
                    <div className="flex items-center gap-2">
                    <input name="misty" type="checkbox" className="toggle toggle-sm" />
                    <label className=" text-sm">মিষ্টি</label>
                    </div>
                </fieldset>
    
                <fieldset className="fieldset p-2 border border-base-300 rounded-box">
                <legend className="fieldset-legend text-sm">খাবার</legend>
                    <div className="flex items-center gap-2">
                    <input name="nimky" type="checkbox" className="toggle toggle-sm" />
                    <label className=" text-sm">নিমকি</label>
                    </div>
                </fieldset>
    
                <fieldset className="fieldset p-2 border border-base-300 rounded-box">
                <legend className="fieldset-legend text-sm">খাবার</legend>
                    <div className="flex items-center gap-2">
                    <input name="jilabi" type="checkbox" className="toggle toggle-sm" />
                    <label className=" text-sm">জিলাপী</label>
                    </div>
                </fieldset>
    
                <fieldset className="fieldset p-2 border border-base-300 rounded-box">
                <legend className="fieldset-legend text-sm">খাবার</legend>
                    <div className="flex items-center gap-2">
                    <input name="singkara" type="checkbox" className="toggle toggle-sm" />
                    <label className=" text-sm">সিংকারা</label>
                    </div>
                </fieldset>
    
                <fieldset className="fieldset p-2 border border-base-300 rounded-box">
                <legend className="fieldset-legend text-sm">খাবার</legend>
                    <div className="flex items-center gap-2">
                    <input name="chomoca" type="checkbox" className="toggle toggle-sm" />
                    <label className=" text-sm">চমচা</label>
                    </div>
                </fieldset>
                </div>
    
                {/* check box end */}
    
                {/* water and drink start */}
    
                <div className='md:flex items-center  gap-5'>
                <div className="w-full">
                <h3 className="mb-2 text-[15px] text-slate-700">ড্রিঙ্ক নির্বাচন করুন</h3>
                <select
                    name="drinks"
                    className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                    required>
                    <option value="" disabled selected>নির্বাচন করুন</option>
                    <option value="speed">স্পিড-৩০ টাকা</option>
                    <option value="tiger">টাইগার- ৩০ টাকা</option>
                    <option value="cocacula">কুককুলা- ২৫ টাকা</option>
                    <option value="7up">৭আপ- ২৫ টাকা</option>
                </select>
                 </div>
    
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">পানিও নির্বাচন করুন</h3>
                  <select
                    name="water"
                    className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                    required>
                    <option value="" disabled selected>নির্বাচন করুন</option>
                    <option value="half letter">৫০০ গ্রাম- ১৫ টাকা</option>
                    <option value="1 letter">১০০০ গ্রাম- ৩০ টাকা</option>
                    <option value="2 letter">২০০০ গ্রাম- ৫৫ টাকা</option>
                </select>
                </div>
                </div>
    
                {/* water and drink end */}
                <div className='md:flex items-center  gap-5'>
                <div className='w-full mb-2'>
                  <h3 className="mb-2 text-[15px] text-slate-700">আপনার সম্পূর্ণ নাম দিন</h3>
                <input name="fullName" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="text" placeholder=' সম্পুর্ণ নাম লিখুন---' required/>
                </div>
    
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">ঠিকানা দিন</h3>
                <input name="address" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="text" placeholder='যেমন গ্রাম এর নাম দিন---' required/>
                </div>
                </div>
                <div className='md:flex items-center  gap-5'>
                <div className='w-full mb-2'>
                  <h3 className="mb-2 text-[15px] text-slate-700">সচল মোবাইল নম্বর দিন</h3>
                <input name="phone" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="number" placeholder='+৮৮..' required/>
                </div>
    
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">আপনার ই-মেইন দিন</h3>
                <input name="email" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="email" required/>
                </div>
                </div>
                <div>
                  <h3 className="mb-2 text-[15px] text-slate-700">বিস্তারিত আপনার বাসা/ঘর/রাস্তা লিখে দিন</h3>
                  <p className="text-xs">সঠিক তথ্য দিয়ে সহযোগিতা করুন। যাতে আপনার তথ্য অনুযাই আমরা আপনার নিকট সহজে চলে আস্তে পারি।</p>
                <textarea name="description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] text-sm mt-2" type="text" placeholder='আপনার খাবার যেখান থেকে রিসিভ করবেন সেই জায়গার বিস্তারিত তথ্য দিন---'/>
                </div>
                <div className="flex items-center gap-4">
                <div onClick={handleCalculateTotalPackagePrice} className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
                <button>হিসাব করুন</button>
                </div>
                <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
                <button>{load === true ? <Load />:"অর্ডার করুন"}</button>
                </div>                
                </div>
                </div>
                </div> 
            </>

            :

            <> <div className="my-8">
            <div className='space-y-3'>
            <div className="">
            <h3 className="text-center uppercase text-xl mb-3 text-primary font-medium">✔ চাহিদা অনুযাই আপনার তথ্য দিন </h3>
            <p className="text-center md:text-sm text-xs"><span className="text-green-700">মনে রাখুনঃ</span> <span className="text-slate-700">শুধুমাত্র রাজনগর, খারপাড়া, বাজুয়া, পারশিপাড়া,  কণিগ্রাম, মজিদপুর এই গ্রাম গুলোতে হোম সার্ভিস চলিত। </span></p>
            </div>
            <div className="divider"></div>
            <div className='md:flex items-center  gap-5'>
            <div className="w-full">
            <h3 className="mb-2 text-[15px] text-slate-700">সর্ত নির্বাচন করুন</h3>
            <select onChange={handlePackageChange}
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="true">আমার প্যাকেজ সহ লাগবে</option>
                <option value="false">আমার প্যাকেজ লাগবে না।❌</option>
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">ধর্ম নির্বাচন করুন </h3>
              <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="true">ইসলাম</option>
                <option value="false">সনাতন</option>
            </select>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className="w-full">
            <h3 className="mb-2 text-[15px] text-slate-700">অনুষ্টানের ধরন নির্বাচন করুন</h3>
            <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="true">বিবাহ</option>
                <option value="false">জন্মদিন</option>
                <option value="false">বিশেষদিন</option>
                <option value="false">অন্যান্য</option>
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">মিষ্টি </h3>
              <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                    misty.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
                }
            </select>
            </div>
            </div>


                {/* নিমকি জিলাপী */}
            <div className='md:flex items-center  gap-5'>
            <div className="w-full">
            <h3 className="mb-2 text-[15px] text-slate-700">নিমকি নির্বাচন করুন</h3>
            <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                    nimky?.map(option => <option value={option?.value} key={option?.id}>{option?.text}</option>)
                }
                
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">জিলাপী </h3>
              <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                    jilabi?.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
                }
            </select>
            </div>
            </div>
            

            {/* ধই চমচা */}
            <div className='md:flex items-center  gap-5'>
            <div className="w-full">
            <h3 className="mb-2 text-[15px] text-slate-700">ধই নির্বাচন করুন</h3>
            <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
               {
                doi?.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
               }
                
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">চমচা নির্বাচন করুন</h3>
              <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                    chomoca?.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
                }
            </select>
            </div>
            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">সিংকারা নির্বাচন করুন</h3>
              <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                    singkara?.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
                }
            </select>
            </div>
            </div>
            {/* water and drink start */}

            <div className='md:flex items-center  gap-5'>
            <div className="w-full">
            <h3 className="mb-2 text-[15px] text-slate-700">ড্রিঙ্ক নির্বাচন করুন</h3>
            <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                    drinks?.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
                }
            </select> 
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">পানিও নির্বাচন করুন</h3>
              <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="true">৫০০ গ্রাম- ১৫ টাকা</option>
                <option value="false">১০০০ গ্রাম- ৩০ টাকা</option>
                <option value="true">২০০০ গ্রাম- ৫৫ টাকা</option>
            </select>
            </div>
            </div>

            {/* water and drink end */}
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700">আপনার সম্পূর্ণ নাম দিন</h3>
            <input name="fullName" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="text" placeholder=' সম্পুর্ণ নাম লিখুন---' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">ঠিকানা দিন</h3>
            <input name="address" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="text" placeholder='যেমন গ্রাম এর নাম দিন---' required/>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700">সচল মোবাইল নম্বর দিন</h3>
            <input name="phone" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="number" placeholder='+৮৮..' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">আপনার ই-মেইন দিন</h3>
            <input name="email" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="email" required/>
            </div>
            </div>
            <div>
              <h3 className="mb-2 text-[15px] text-slate-700">বিস্তারিত আপনার বাসা/ঘর/রাস্তা লিখে দিন</h3>
              <p className="text-xs">সঠিক তথ্য দিয়ে সহযোগিতা করুন। যাতে আপনার তথ্য অনুযাই আমরা আপনার নিকট সহজে চলে আস্তে পারি।</p>
            <textarea name="description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] text-sm mt-2" type="text" placeholder='আপনার খাবার যেখান থেকে রিসিভ করবেন সেই জায়গার বিস্তারিত তথ্য দিন---'/>
            </div>
            <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
            <button>{load === true ? <Load />:"অর্ডার করুন"}</button>
            </div>
            </div>
            </div>   </>
            }
           
    </form>
           </div>
           {/* <div onClick={handleConfirmOrder} className="w-full bg-primary text-center p-2 text-neutral"><button>অর্ডার করুন</button></div> */}
           {/* <div className="flex items-center gap-3 font-medium cursor-pointer hover:text-primary">
           <IoHeartOutline />
            সেইব করে রাখুন
           </div> */}
           <div className="space-y-3">
           <div className="flex items-center gap-3">
            <MdDownloadDone />
            <span>মিনিমাম দুই দিন পূর্বে অর্ডার কনফার্ম করে বুঝে নিবেন।</span>
          </div>
           <div className="flex items-center gap-3">
            <MdDownloadDone />
            <span>সেরা মানের খাবারের নিশ্চয়তা</span>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineDeliveryDining />
            <span>আপনার পছন্দমতো খাবার দ্রুত ডেলিভারি</span>
          </div>
          <div className="flex items-center gap-3">
            <CiDiscount1 />
            <span>বিশেষ উৎসবের জন্য বিশেষ ডিসকাউন্ট</span>
          </div>
          {/* <div className="flex items-center gap-3">
            <SiFoodpanda />
            <span>মিনিমাম ১০০ টাকার খাবার অর্ডার করুন</span>
          </div> */}
          <div className="flex items-center gap-3">
            <IoReload />
            <span>অর্ডার করা খাবার রিটার্ন নেওয়া হবে না</span>
          </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div>
       
       {/* review */}
   </div>
 </Container>
</div>
    </>
}
export default CustomOrderForm;
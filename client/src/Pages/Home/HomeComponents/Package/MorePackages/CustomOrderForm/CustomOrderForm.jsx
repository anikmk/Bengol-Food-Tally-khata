import { FaArrowAltCircleRight } from "react-icons/fa";
import Container from "../../../../../../Componnents/Shared/Container/Container";
import { useState } from "react";
import toast from "react-hot-toast";
import Load from "../../../../../../Componnents/Shared/Loader/load/Load";
import { misty, waters } from "./FormData/formData";
import { peopleOptions } from "./FormData/formData";
import { nimky } from "./FormData/formData";
import { jilabi } from "./FormData/formData";
import { doi } from "./FormData/formData";
import { chomoca } from "./FormData/formData";
import { singkara } from "./FormData/formData";
import CustomerOrderFacilites from "./CustomerOrderFacilities/CustomerOrderFacilites";
import FormHeading from "./FormHeading/FormHeading";
import { useQuery } from "@tanstack/react-query";
import { createCustomWithOutPackageOrder, createCustomWithPackageOrder, getCustomPerKgProductPrice, getCustomPerPichProductPrice } from "../../../../../../Api/customOrderRelatedApi/customApi";
import Loader from "../../../../../../Componnents/Shared/Loader/Loader";
import { Helmet } from "react-helmet";
const CustomOrderForm = () => {
    const [isCalculation,setIsCalculation] = useState(false)
    const [load,setLoad] = useState(false);
    const [packageRequired, setPackageRequired] = useState(true);
    const [totalPackagePrice,setTotalPackagePrice] = useState(0);
    const [showFacilities,setShowFacilites] = useState(false);

    // multiple state start
    const [p_howMuchPackage, setHowMuchPackage] = useState(0);
    const [p_customerFullName, setCustomerFullName] = useState();
    const [p_customerPhone, setCustomerPhone] = useState();
    const [p_pocketCondition, setPocketCondition] = useState();
    const [p_typeOfPackage, setTypeOfPackage] = useState();
    const [p_religion, setReligion] = useState();
    const [p_chomoca, setChomoca] = useState(false);
    const [p_singkara, setSingkara] = useState(false);
    const [p_jilabi, setJilabi] = useState(false);
    const [p_nimky, setNimky] = useState(false);
    const [p_misty, setMisty] = useState(false);
    const [p_doi, setDoi] = useState();
    const [p_water, setWater] = useState();
    const [p_Date,setDate] = useState()
    const {data:customPerKgProductPrice,isLoading} = useQuery({
      queryKey:["customPerKgProductPrice"],
      queryFn: async () => await getCustomPerKgProductPrice()
    })
    // todo: i will update custom dynamic price to let veriables
    
    // multiple state end

     // Handle Package Change
  const handlePackageChange = (e) => {
    const value = e.target.value === 'true';
    setPackageRequired(value);
  };

      // for with package handler submit function
      
      const handleIsPackageOrder = async(e) => {
        e.preventDefault();
        if(isCalculation){
        const form = e.target;
        const status = "With Package";
        const howMuchPackage = form.howMuchPackage.value;
        const typeOfPackage = form.typeOfPackage.value;
        const religion = form.religion.value;
        const water = form.water.value;
        const doi = form.doi.value;
        const chomoca = form.chomoca.checked;
        const singkara = form.singkara.checked;
        const jilabi = form.jilabi.checked;
        const nimky = form.nimky.checked;
        const misty = form.misty.checked;
        const pocketCondition = form.pocketCondition.value;
        const totalWithPackagePrice = totalPackagePrice;
        const customerFullName = form.fullName.value;
        const customerAddress = form.address.value;
        const customerPhone = form.phone.value;
        const customerEmail = form.email.value;
        const customerDescription = form.description.value;
        const eventDate = new Date(form.date.value);
    
        // ✅ Check if the selected date is less than or equal to 2 days from today
        const today = new Date();
        const diffTime = eventDate.getTime() - today.getTime();
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
    
        if (diffDays <= 2) {
          toast.error("দয়া করে কমপক্ষে ২ দিন পূর্বে অর্ডার করুন। 😊 সুবিধার্তে অনিক ফুড🥧");
          return;
        }
        const customerOrderData = {status,howMuchPackage,typeOfPackage,religion,water,doi,chomoca,singkara,pocketCondition,jilabi,nimky,misty,totalWithPackagePrice,customerFullName,customerAddress,customerPhone,customerEmail,customerDescription,eventDate}
        // console.log("with package",customerOrderData); 
        setLoad(true)
        const result = await createCustomWithPackageOrder(customerOrderData);
        if(result?.insertedId){
          setLoad(false)
          toast.success('আপনার অর্ডার সম্পুর্ণ হয়েছে। দয়া করে অপেক্ষা করুন কিচ্ছুক্ষণের মধ্যে অনিক বেঙ্গল ফুডের প্রতিনিদি আপনার সাথে যোগাযোগ করবে।',{duration:7000})
          setIsCalculation(false)
          form.reset();
        }
        else{toast.error('দুঃখিত আবার চেষ্টা করুন')}
        
        }  
        else{toast.error("দয়া করে আগে হিসাব করুন। 😊")}
      }
      // for without package handle function submit function
      const handleWithOutPackageOrder = async(e) => {
        e.preventDefault();
        if(isCalculation) {
          const form = e.target;
          const status = "WithOut Package";
          const typeOfPackage = form.typeOfPackage.value;
          const religion = form.religion.value;
          const water = form.water.value;
          const chomoca = form.chomoca.value;
          const singkara = form.singkara.value;
          const jilabi = form.jilabi.value;
          const nimky = form.nimky.value;
          const misty = form.misty.value;
          const pocketCondition = form.pocketCondition.value;
          const totalCustomPackagePrice = totalPackagePrice;
          const customerFullName = form.fullName.value;
          const customerAddress = form.address.value;
          const customerPhone = form.phone.value;
          const customerEmail = form.email.value;
          const customerDescription = form.description.value;
          const eventDate = new Date(form.date.value);
    
          // ✅ Check if the selected date is less than or equal to 2 days from today
          const today = new Date();
          const diffTime = eventDate.getTime() - today.getTime();
          const diffDays = diffTime / (1000 * 60 * 60 * 24);
      
          if (diffDays <= 2) {
            toast.error("দয়া করে কমপক্ষে ২ দিন পূর্বে অর্ডার করুন। 😊 সুবিধার্তে অনিক ফুড🥧");
            return;
          }
          const customerOrderData = {status,typeOfPackage,religion,water,chomoca,singkara,pocketCondition,jilabi,nimky,misty,totalCustomPackagePrice,totalPackagePrice,customerFullName,customerAddress,customerPhone,customerEmail,customerDescription,eventDate}
          setLoad(true)
        const result = await createCustomWithOutPackageOrder(customerOrderData);
        if(result?.insertedId){
          setLoad(false)
          toast.success('আপনার অর্ডার সম্পুর্ণ হয়েছে। দয়া করে অপেক্ষা করুন কিচ্ছুক্ষণের মধ্যে অনিক বেঙ্গল ফুডের প্রতিনিদি আপনার সাথে যোগাযোগ করবে।',{duration:7000})
          form.reset();
          setIsCalculation(false)
        }
        else{toast.error('দুঃখিত আবার চেষ্টা করুন')}
        }
        else{toast.error("দয়া করে আগে হিসাব করুন। 😊")}
       
       
      }
       // get single items price
       const {data:singleItemPrice,isLoading:singlePriceLoad} = useQuery({
        queryKey:"singleItemPrice",
        queryFn:async () => await getCustomPerPichProductPrice()
       })

      // handle calculate total price with package
      const handleCalculateTotalPackagePrice = (e) => {
        e.preventDefault();
        setIsCalculation(true)
        // যেগুলো চেক করা হবে
        const isChomocaSelected = e.target.form.chomoca.checked;
        const isSingkaraSelected = e.target.form.singkara.checked;
        const isJilabiSelected = e.target.form.jilabi.checked;
        const isNimkySelected = e.target.form.nimky.checked;
        const isMistySelected = e.target.form.misty.checked;
    
        // যেগুলোর ভ্যালু দরকার হবে
        const doiValue = e.target.form.doi.value;
        const waterValue = e.target.form.water.value;
        const dateValue = e.target.form.date.value;
        setDate(dateValue)
        // অন্যান্য ফিল্ড থেকে ভ্যালু নিচ্ছি
        const howMuchPackage = e.target.form.howMuchPackage.value;
        const customerFullName = e.target.form.fullName.value;
    
        setHowMuchPackage(howMuchPackage);
        setCustomerFullName(customerFullName);
        setCustomerPhone(e.target.form.phone.value);
        setPocketCondition(e.target.form.pocketCondition.value);
        setTypeOfPackage(e.target.form.typeOfPackage.value);
        setReligion(e.target.form.religion.value);
    
        // যেটা চেক করা হবে সেটা সেট করবো
        setChomoca(isChomocaSelected);
        setSingkara(isSingkaraSelected);
        setJilabi(isJilabiSelected);
        setNimky(isNimkySelected);
        setMisty(isMistySelected);
        setDoi(doiValue);
        setWater(waterValue);
        // এবার শুধুমাত্র চেক করা বা ইনপুট দেওয়া আইটেম গুলো যোগ করবো
        let totalPackagePriceIs = 0;
    
        if (waterValue) {
            totalPackagePriceIs += howMuchPackage * singleItemPrice?.perPichWater;
        }
        if (isChomocaSelected) {
            totalPackagePriceIs += howMuchPackage * singleItemPrice?.perPichChomoca;
        }
        if (doiValue) {
            totalPackagePriceIs += howMuchPackage * singleItemPrice?.perPichDoi;
        }
        if (isSingkaraSelected) {
            totalPackagePriceIs += howMuchPackage * singleItemPrice?.perPichSingkara;
        }
        if (isJilabiSelected) {
            totalPackagePriceIs += howMuchPackage * singleItemPrice?.perPichJilabi;
        }
        if (isNimkySelected) {
            totalPackagePriceIs += howMuchPackage * singleItemPrice?.perPichNimky;
        }
        if (isMistySelected) {
            totalPackagePriceIs += howMuchPackage * singleItemPrice?.perPichMisty;
        }
    
        // টোটাল প্রাইস সেট করবো
        setTotalPackagePrice(totalPackagePriceIs);
        setShowFacilites(true);
    
        toast.success(
            `মিঃ ${customerFullName} আপনার সর্বমোট প্যাকেজ এর হিসাব = ${totalPackagePriceIs} টাকা`,
            { duration: 7000 }
        );
    };
      
      // handle calculate total price without package
      const handleCalculateWithOutPackage = (e) => {
        e.preventDefault();
        setIsCalculation(true)
        // আইটেমগুলোর দাম নির্ধারণ করছি
        let perPichWater = customPerKgProductPrice?.perPichWater || 0;
        let perPichChomoca = customPerKgProductPrice?.perPichChomoca || 0;
        let perPichSingkara = customPerKgProductPrice?.perPichSingkara || 0;
        let perKgJilabi = customPerKgProductPrice?.perKgJilabi || 0;
        let perKgNimky = customPerKgProductPrice?.perKgnimky || 0;
        let perKgMisty = customPerKgProductPrice?.perKgMisty || 0;
        let perKgDoi = customPerKgProductPrice?.perKgDoi || 0;
    
        // ফর্মের ডেটা নিচ্ছি
        const form = e.target.form;
        
        const customerFullName = form.fullName.value || '';
        const misty = parseInt(form.misty.value) || 0;
        const nimky = parseInt(form.nimky.value) || 0;
        const jilabi = parseInt(form.jilabi.value) || 0;
        const chomoca = parseInt(form.chomoca.value) || 0;
        const singkara = parseInt(form.singkara.value) || 0;
        const water = parseInt(form.water.value) || 0;
        const doi = parseInt(form.doi.value) || 0;
        const dateValue = form.date.value;
        
        // ক্যালকুলেশন করছি
        const totalMistyPrice = misty * perKgMisty;
        const totalNimkyPrice = nimky * perKgNimky;
        const totalJilabiPrice = jilabi * perKgJilabi;
        const totalChomocaPrice = chomoca * perPichChomoca;
        const totalSingkaraPrice = singkara * perPichSingkara;
        const totalWaterPrice = water * perPichWater;
        const totalDoiPrice = doi * perKgDoi
    
        // মোট প্রাইস যোগ করছি (যে ফিল্ডগুলো সিলেক্ট করা হবে শুধু সেগুলো যোগ হবে)
        const totalItemsPrices =
            totalMistyPrice +
            totalNimkyPrice +
            totalJilabiPrice +
            totalChomocaPrice +
            totalSingkaraPrice +
            totalDoiPrice+
            totalWaterPrice;
    
        // স্টেট আপডেট করছি
        setTotalPackagePrice(totalItemsPrices);
        setChomoca(chomoca);
        setSingkara(singkara);
        setJilabi(jilabi);
        setNimky(nimky);
        setMisty(misty);
        setWater(water);
        setDoi(doi)
        setDate(dateValue)
        setShowFacilites(true);
        // টোস্ট মেসেজ দেখাচ্ছি
        toast.success(
            `মিঃ ${customerFullName} আপনার সর্বমোট প্যাকেজ এর হিসাব = ${totalItemsPrices} টাকা`,
            { duration: 7000 }
        );
    };

      const handleTrustBengalFood = (e) => {
        if (e.target.checked) {
          toast.success(" অনিক বেঙ্গল ফুড আপনার তথ্য সংরক্ষণ করে রাখবে!", { duration: 4000 });
        }
      }
      if(isLoading || singlePriceLoad) return <Loader />
    return <>
    <Helmet>
        
        <meta name="description" content="Anik Confectionery offers custom Bengali food packages for various events. Order your personalized package now!" />
        <meta name="keywords" content="Bengali food, custom packages, Anik Confectionery, catering services" />
        <meta name="author" content="Anik Confectionery" />
        
        <title>কাস্টম প্যাকেজ অর্ডার - Anik Confectionery</title>

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="কাস্টম প্যাকেজ অর্ডার - Anik Confectionery" />
        <meta property="og:description" content="Order your custom Bengali food package for your special events from Anik Confectionery. A variety of delicious options await!" />
        <meta property="og:image" content="/path/to/social-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/custom-package-order" />
        <meta property="og:type" content="website" />
      </Helmet>
         <div>
   <Container>
   <div className="my-14">
     <div className="flex flex-col items-center justify-center ">
       <div className="shadow-lg p-4 w-full md:w-[70%]">
         <div className=" space-y-4">
           
           {/* belling adress */}
           <div className="">
           
            {
                packageRequired ?
                 <>
                 <form onSubmit={handleIsPackageOrder}>
                <div className="my-8">
                <div className='space-y-3'>
                <FormHeading />
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
                <h3 className="mb-2 text-[15px] text-slate-700">ধই নির্বাচন করুন</h3>
                <select
                    name="doi"
                    className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                    >
                    <option value="" disabled selected>নির্বাচন করুন</option>
                    <option value="doi">কাপ দই</option>
                    
                </select>
                 </div>
    
                <div className='w-full'>
                  <h3 className="mb-2 text-[15px] text-slate-700">পানিও নির্বাচন করুন</h3>
                  <select
                    name="water"
                    className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                    >
                    <option value="" disabled selected>নির্বাচন করুন</option>
                    <option value={true}>৫০০ গ্রাম</option>
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
               <div className="md:flex items-center  gap-5">
               <div className="w-full">
                  <h3 className="mb-2 text-[15px] text-slate-700">বিস্তারিত আপনার বাসা/ঘর/রাস্তা লিখে দিন</h3>
                  <p className="text-xs">সঠিক তথ্য দিয়ে সহযোগিতা করুন। যাতে আপনার তথ্য অনুযাই আমরা আপনার নিকট সহজে চলে আস্তে পারি।</p>
                <textarea name="description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] text-sm mt-2" type="text" placeholder='আপনার খাবার যেখান থেকে রিসিভ করবেন সেই জায়গার বিস্তারিত তথ্য দিন---'/>
                </div>
                <div className="w-full">
                <h3 className="mb-2 text-[15px] text-slate-700"> অনুষ্টানের তারিখ সিলেক্ট করুন</h3>
                  <input name="date" type="date" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] text-sm mt-2" required/>
                </div>
               </div>
                <div className="flex items-center gap-4">
                <div onClick={handleCalculateTotalPackagePrice} className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
                <button>হিসাব করুন</button>
                </div>
                <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
                <button>{load === true ? <Load />:"অর্ডার করুন"}</button>
                </div>                
                </div>
                
                {/* after calculate then show this content for batter user ex: */}
                {
                  showFacilities && <div className="space-y-3">
                    
                  <div className="flex items-center gap-2"><FaArrowAltCircleRight />
                   <p>আপনার নাম <span className="underline">{p_customerFullName}</span></p>  
                  </div>
                  <div className="flex items-center gap-2"><FaArrowAltCircleRight />
                   <p>আপনার মোবাইলঃ <span className="underline">{p_customerPhone}</span></p>  
                  </div>
                  <div className="flex items-center gap-2"><FaArrowAltCircleRight />
                  {
                    p_pocketCondition == "true" ? <> <p>আপনার খাবার প্যাকেজ করা থাকবে</p></>:<> <p>আপনার খাবার প্যাকেজ করা থাকবে না</p></>
                  }
                    
                  </div>
                  <div className="flex items-center gap-2"><FaArrowAltCircleRight />
                   <p>আপনি <span className="underline">{p_religion === "islam" ? "ইসলাম":"সনাতন"}</span> ধর্মের মানুষ</p>  
                  </div>
                  <div className="flex items-center gap-2">
                  <FaArrowAltCircleRight />
                  <p>
                    আপনি{" "}
                    <span className="underline">{p_typeOfPackage === "wedding" && "বিবাহ "}
                    {p_typeOfPackage === "birthday" && "জন্মদিন "}
                    {p_typeOfPackage === "importendDay" && "বিশেষদিন "}
                    {p_typeOfPackage === "othersDay" && "অন্যান্য "}</span>
                    অনুষ্টানের জন্য খাবার ক্রয় করতে চাচ্ছেন।
                  </p>
                </div>
                  <div className="flex items-center gap-2"><FaArrowAltCircleRight />
                   <p>আপনি <span className="text-primary font-semibold text-lg underline">{p_howMuchPackage}</span> জন মেহমানের জন্য প্যাকেজ সেলেক্ট করেছেন।</p>  
                  </div>
                  <div className="flex items-center gap-2">
                  <FaArrowAltCircleRight />
                  <p>
                    প্রত্যেক পকেটের মধ্যে 
                    <span className="underline">{p_misty && " মিষ্টি "}
                    {p_nimky && ` ${p_misty ? "ও " : ""}নিমকি `}
                    {p_jilabi && ` ${p_misty || p_nimky ? "ও " : ""}জিলাপী `}
                    {p_chomoca && ` ${p_misty || p_nimky || p_jilabi ? "ও " : ""}চমচা `}
                    {p_singkara && ` ${p_misty || p_nimky || p_jilabi || p_chomoca ? "ও " : ""}সিংকারা `}  </span>
                    রাখার জন্য বলছেন।
                  </p>
                </div>
                <div className="flex items-center gap-2">
                <FaArrowAltCircleRight />
                <p>
                  ধই হিসাবে আপনি {p_doi === "doi" && "কাপ ধই"} সিলেক্ট করেছেন।
                </p>
              </div>
              <div className="flex items-center gap-2">
              <FaArrowAltCircleRight />
              <p>
                খাবার পানি হিসাবে আপনি{" "}
                <span className="underline">
                  {p_water === "true" && "আধা লিটার "}
                
               </span> 
                সিলেক্ট করেছেন।
              </p>
            </div>
              <div className="flex items-center gap-2">
              <FaArrowAltCircleRight />
              <p>
                আপনার অনুষ্টানের তারিখ <span className="underline font-semibold"> {  p_Date } </span> 
                সিলেক্ট করেছেন।
              </p>
            </div>
              <div className="flex items-center gap-2">
              <FaArrowAltCircleRight />
              <p>
               আমরা  <span className="underline font-semibold"> {  p_Date } </span> 
                তারিখ খাবার প্রস্তুত রাখবো।
              </p>
            </div>
  
                  <div className="mt-8">
                      <div className="flex items-center gap-3">
                      <input onClick={(e)=>handleTrustBengalFood(e)}  type="checkbox"  className="checkbox-sm checkbox-secondary" />
                      <label>আপনার দেওয়া তথ্য অনুযাই আমরা এই ডাটা সেইভ করে রাখব। যদি ভূল না হয় তাহলে ঠিক চিহ্নতে চাপ দিন। ধন্যবাদ</label>
                      </div>
                  </div>
                  <div className="divider"></div>
                  <div className="text-primary text-lg font-semibold">আপনার সর্বমোট হিসাব = {totalPackagePrice} টাকা মাত্র।</div>
                  <div className="divider"></div>
                  </div>
                }
                </div>
                </div> 
                </form>
                </>

                :

                <> 
                <form onSubmit={handleWithOutPackageOrder}>
                <div className="my-8">
            <div className='space-y-3'>
            <FormHeading />
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
                <option value="ইসলাম">ইসলাম</option>
                <option value="সনাতন">সনাতন</option>
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
                <option value="বিবাহ">বিবাহ</option>
                <option value="জন্মদিন">জন্মদিন</option>
                <option value="বিশেষদিন">বিশেষদিন</option>
                <option value="অন্যান্য">অন্যান্য</option>
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">মিষ্টি </h3>
              <select
                name="misty"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                >
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
                name="nimky"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                >
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                    nimky?.map(option => <option value={option?.value} key={option?.id}>{option?.text}</option>)
                }
                
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">জিলাপী </h3>
              <select
                name="jilabi"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                >
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
                name="doi"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                >
                <option value="" disabled selected>নির্বাচন করুন</option>
               {
                doi?.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
               }
                
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">চমচা নির্বাচন করুন</h3>
              <select
                name="chomoca"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                >
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                    chomoca?.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
                }
            </select>
            </div>
          
            </div>
            {/* water and singkara start */}

            <div className='md:flex items-center  gap-5'>
            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">সিংকারা নির্বাচন করুন</h3>
              <select
                name="singkara"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                >
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                    singkara?.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
                }
            </select>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">পানিও নির্বাচন করুন</h3>
              <select
                name="water"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                >
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                  waters.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
                }
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
            <div className="md:flex items-center  gap-5">
               <div className="w-full">
                  <h3 className="mb-2 text-[15px] text-slate-700">বিস্তারিত আপনার বাসা/ঘর/রাস্তা লিখে দিন</h3>
                  <p className="text-xs">সঠিক তথ্য দিয়ে সহযোগিতা করুন। যাতে আপনার তথ্য অনুযাই আমরা আপনার নিকট সহজে চলে আস্তে পারি।</p>
                <textarea name="description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] text-sm mt-2" type="text" placeholder='আপনার খাবার যেখান থেকে রিসিভ করবেন সেই জায়গার বিস্তারিত তথ্য দিন---'/>
                </div>
                <div className="w-full">
                <h3 className="mb-2 text-[15px] text-slate-700"> অনুষ্টানের তারিখ সিলেক্ট করুন</h3>
                  <input name="date" type="date" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] text-sm mt-2" required/>
                </div>
               </div>
            <div className="flex items-center gap-4">
            <div onClick={handleCalculateWithOutPackage} className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
            <button>হিসাব করুন</button>
            </div>
            <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
            <button>অর্ডার করুন</button>
            </div>
            </div>
            </div>
                </div> 
                </form>  
                <div>
                  <ul>
                   {
                    showFacilities && <>
                    <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_misty} কেজি মিষ্টি</p></div>
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_nimky} কেজি নিমকি</p></div>
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_jilabi} কেজি জিলাপী</p></div>
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_doi} কেজি ধই</p></div>
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_singkara} টি সিংকারা</p></div>
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_chomoca} টি চমচা</p></div>
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_water} লিটার পানি</p></div>
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_Date} তারিখ আপনার খাবার তৈরি করা থাকবে</p></div>
                  <div className="divider"></div>
                  <div className="text-primary text-lg font-semibold">আপনার সর্বমোট হিসাব = {totalPackagePrice} টাকা মাত্র।</div>
                   </>
                   }
                  </ul>
                </div>
                </> 
            }
           
    
           </div>
          <CustomerOrderFacilites />
         </div>
       </div>
     </div>
   </div>
   <div>
   </div>
 </Container>
</div>
    </>
}
export default CustomOrderForm;
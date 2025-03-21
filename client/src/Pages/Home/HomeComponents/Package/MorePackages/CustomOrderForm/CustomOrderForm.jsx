import { FaMinus, FaPlus } from "react-icons/fa";
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
import { drinks } from "./FormData/formData";
import CustomerOrderFacilites from "./CustomerOrderFacilities/CustomerOrderFacilites";
import FormHeading from "./FormHeading/FormHeading";
const CustomOrderForm = () => {
    const [quantity,setQuantity] = useState(1);
    const [load,setLoad] = useState(false);
    const [packageRequired, setPackageRequired] = useState(true);
    const [totalPackagePrice,setTotalPackagePrice] = useState(0);
    const [showFacilities,setShowFacilites] = useState(false);
  console.log(showFacilities);
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
    const [p_drinks, setDrinks] = useState();
    const [p_water, setWater] = useState();

    // multiple state end
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

      // for single items price
      let awater500 = 15; let awater1000 = 20;  let awater2000 = 40;
      let aspeed = 30; let acocacula = 25; let asevenUp = 25; 
      let achomoca = 20; let asingkara = 20; let ajilabi = 5;
      let animky = 3; let amisty = 8;

      // for with package handler submit function
      const handleIsPackageOrder = async(e) => {
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
        console.log("with package",customerOrderData);   
      }
      // for without package handle function
      const handleWithOutPackageOrder = async(e) => {
        e.preventDefault();
        const form = e.target;
        const typeOfPackage = form.typeOfPackage.value;
        const religion = form.religion.value;
        const water = form.water.value;
        const drinks = form.drinks.value;
        const chomoca = form.chomoca.value;
        const singkara = form.singkara.value;
        const jilabi = form.jilabi.value;
        const nimky = form.nimky.value;
        const misty = form.misty.value;
        const pocketCondition = form.pocketCondition.value;
        const totalPackagePrice = price * quantity;
        const customerFullName = form.fullName.value;
        const customerAddress = form.address.value;
        const customerPhone = form.phone.value;
        const customerEmail = form.email.value;
        const customerDescription = form.description.value;
        const customerOrderData = {typeOfPackage,religion,water,drinks,chomoca,singkara,pocketCondition,jilabi,nimky,misty,quantity,totalPackagePrice,customerFullName,customerAddress,customerPhone,customerEmail,customerDescription,}
        console.log("with out package",customerOrderData);
       
      }
      
      // handle calculate total price with package
      const handleCalculateTotalPackagePrice = (e) => {
        e.preventDefault();
        const form = e.target.form; 
        const howMuchPackage = form.howMuchPackage.value;
        const customerFullName = form.fullName.value;
        setHowMuchPackage(howMuchPackage);
        setCustomerFullName(customerFullName);
        setCustomerPhone(form.phone.value);
        setPocketCondition(form.pocketCondition.value);
        setTypeOfPackage(form.typeOfPackage.value);
        setReligion(form.religion.value);
        setChomoca(form.chomoca.checked);
        setSingkara(form.singkara.checked);
        setJilabi(form.jilabi.checked);
        setNimky(form.nimky.checked);
        setMisty(form.misty.checked);
        setDrinks(form.drinks.value);
        setWater(form.water.value);
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
      
        const totalPackagePriceIs = totalWater500Price+totalWater1000Price +
          totalWater2000Price +totalSpeedPrice +totalCocaculaPrice +
          totalSevenUpPrice +totalChomocaPrice +totalSingkaraPrice +
          totalJilabiPrice +totalNimkyPrice +totalMistyPrice;
      
        setTotalPackagePrice(totalPackagePriceIs);
        setShowFacilites(true)
        console.log(totalPackagePriceIs); // এর সাথে `totalPackagePrice` গেট হবে।
        toast.success(`মিঃ ${customerFullName} আপনার সর্বমোট প্যাকেজ এর হিসাব = ${totalPackagePriceIs} টাকা`,{duration:7000});

      };
      
      // handle calculate total price without package
      const handleCalculateWithOutPackage = (e) => {
        e.preventDefault()
         // for one kg items price
      let perPichwater = 15;let perPichDrink = 25;let perPichchomoca = 20;
      let perPichsingkara = 20;let perKgjilabi = 5;let perKgnimky = 3;
      let perKgmisty = 300;
        const form = e.target.form; 
        const customerFullName = form.fullName.value;
        const misty = form.misty.value;
        const nimky = form.nimky.value;
        const jilabi = form.jilabi.value;
        const chomoca = form.chomoca.value;
        const singkara = form.singkara.value;
        const water = form.water.value;
        const drinks = form.drinks.value;
        const totalMistyPrice = misty * perKgmisty;
        const totalNimkyPrice = nimky * perKgnimky;
        const totalJilabiPrice = jilabi * perKgjilabi;
        const totalChomocaPrice = chomoca * perPichchomoca;
        const totalSingkaraPrice = singkara * perPichsingkara;
        const totalWaterPrice = water * perPichwater;
        const totalDrinksPrice = drinks * perPichDrink;
        const totalItemsPrices = totalMistyPrice + totalNimkyPrice+totalJilabiPrice+totalChomocaPrice+totalSingkaraPrice+totalWaterPrice+totalDrinksPrice
          console.log(totalItemsPrices);
          setTotalPackagePrice(totalItemsPrices)
          setChomoca(chomoca);  setSingkara(singkara); setJilabi(jilabi);
          setNimky(nimky); setMisty(misty); setDrinks(drinks);
          setWater(water);
          setShowFacilites(true)
          toast.success(`মিঃ ${customerFullName} আপনার সর্বমোট প্যাকেজ এর হিসাব = ${totalItemsPrices} টাকা`,{duration:7000});
      }


      const handleTrustBengalFood = (e) => {
        if (e.target.checked) {
          toast.success(" অনিক বেঙ্গল ফুড আপনার তথ্য সংরক্ষণ করে রাখবে!", { duration: 4000 });
        }
      }
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
                <h3 className="mb-2 text-[15px] text-slate-700">ড্রিঙ্ক নির্বাচন করুন</h3>
                <select
                    name="drinks"
                    className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                    >
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
                    >
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
                  ড্রিঙ্ক হিসাবে আপনি{" "}
                  <span className="underline">{p_drinks === "speed" && "স্প্রিড"}
                  {p_drinks === "tiger" && "টাইগার"}
                  {p_drinks === "cocacula" && "কুকাকুলা"}
                  {p_drinks === "7up" && "সেভেন আপ"}</span> সিলেক্ট করেছেন।
                </p>
              </div>
              <div className="flex items-center gap-2">
              <FaArrowAltCircleRight />
              <p>
                খাবার পানি হিসাবে আপনি{" "}
                <span className="underline">{p_water === "half letter" && "আধা লিটার "}
                {p_water === "1 letter" && "এক লিটার "}
                {p_water === "2 letter" && "দুই লিটার "}</span> 
                সিলেক্ট করেছেন।
              </p>
            </div>
  
                  <div className="mt-8">
                      <div className="flex items-center gap-3">
                      <input onClick={(e)=>handleTrustBengalFood(e)}  type="checkbox"  className="checkbox-sm checkbox-secondary" />
                      <label>আপনার দেওয়া তথ্য অনুযাই আমরা এই ডাটা সেইভ করে রাখব। যদি ভূল না হয় তাহলে ঠিক চিহ্নতে চাপ দিন। ধন্যবাদ</label>
                      </div>
                  </div>
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
            </div>
            {/* water and drink start */}

            <div className='md:flex items-center  gap-5'>
            <div className="w-full">
            <h3 className="mb-2 text-[15px] text-slate-700">ড্রিঙ্ক নির্বাচন করুন</h3>
            <select
                name="drinks"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                >
                <option value="" disabled selected>নির্বাচন করুন</option>
                {
                    drinks?.map(option => <option key={option?.id} value={option?.value}>{option?.text}</option>)
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
            <div>
              <h3 className="mb-2 text-[15px] text-slate-700">বিস্তারিত আপনার বাসা/ঘর/রাস্তা লিখে দিন</h3>
              <p className="text-xs">সঠিক তথ্য দিয়ে সহযোগিতা করুন। যাতে আপনার তথ্য অনুযাই আমরা আপনার নিকট সহজে চলে আস্তে পারি।</p>
            <textarea name="description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] text-sm mt-2" type="text" placeholder='আপনার খাবার যেখান থেকে রিসিভ করবেন সেই জায়গার বিস্তারিত তথ্য দিন---'/>
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
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_singkara} টি সিংকারা</p></div>
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_chomoca} টি চমচা</p></div>
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_drinks} লিটার ড্রিঙ্কস</p></div>
                   <div className={`flex items-center gap-3`}><FaArrowAltCircleRight /><p>{p_water} লিটার পানি</p></div>
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
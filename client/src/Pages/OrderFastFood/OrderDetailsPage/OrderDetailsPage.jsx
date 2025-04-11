import emailjs from '@emailjs/browser';
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoHeartOutline, IoReload } from "react-icons/io5";
import { MdDownloadDone } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { SiFoodpanda } from "react-icons/si";
import Container from "../../../Componnents/Shared/Container/Container";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery, } from "@tanstack/react-query";
import { getSingleFoodById, submitFastFoodOrder } from "../../../Api/fastFoodRelatedApi/foodApi";
import Loader from "../../../Componnents/Shared/Loader/Loader";
import toast from "react-hot-toast"
import useAuth from "../../../hooks/useAuth";
import Load from "../../../Componnents/Shared/Loader/load/Load";
const OrderDetailsPage = () => {
  const {user,loading} = useAuth();
  const [rajnagarCharge,setRajnagarCharge] = useState(0)
  const [karnigramCharge,setKarnigramCharge] = useState(0)
  const [kharparaCharge,setKharparaCharge] = useState(0)
  const [mojidpurCharge,setMojidpurCharge] = useState(0)
  const totalCharge = rajnagarCharge || karnigramCharge || kharparaCharge || mojidpurCharge;
  const [customerAddress, setCustomerAddress] = useState("");
  const [load,setLoad] = useState(false);
  const [quantity,setQuantity] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");


  const {data:detailsFood,isLoading} = useQuery({
    queryKey:[id,"detailsFood"],
    queryFn:async()=> await getSingleFoodById(id)
  })

  if (loading || isLoading) return <Loader />;
  if (!detailsFood) return <div>Data not found!</div>;

  let price = detailsFood?.foodPrice;
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

const handleConfirmOrder = () => {
  if(totalFoodPrice <= 100){
   return toast.error("দুঃখিত ! মিনিমাম ১০০ টাকার খাবার অর্ডার করুন")
  }
}
const handleAddressChange = (e) => {
  const selectedAddress = e.target.value;
  setCustomerAddress(selectedAddress);
  setRajnagarCharge(0);
  setKarnigramCharge(0);
  setKharparaCharge(0);
  setMojidpurCharge(0);
  switch (selectedAddress) {
    case "rajnagar":
      setRajnagarCharge(10);
      toast.success("ডেলিভারি চার্জঃ ১০ টাকা");
      break;
    case "kharpara":
    case "bajua":
      setKharparaCharge(20);
      toast.success("ডেলিভারি চার্জঃ ২০ টাকা");
      break;
    case "parshipara":
    case "karnigram":
      setKarnigramCharge(30);
      toast.success("ডেলিভারি চার্জঃ ৩০ টাকা");
      break;
    case "mojidpur":
      setMojidpurCharge(40);
      toast.success("ডেলিভারি চার্জঃ ৪০ টাকা");
      break;
    default:
      break;
  }
};

const handleOrderSubmit = async(e) => {
  e.preventDefault();
  const form = e.target;
  const foodName = detailsFood?.foodName;
  const foodPrice = detailsFood?.foodPrice;
  const totalFoodPrice = price * quantity;
  const totalFoodPriceWithCharge = totalFoodPrice + totalCharge
  const moneyCharge = totalCharge;
  const customerFullName = form.fullName.value;
  const customerAddress = form.address.value;
  const customerPhone = form.phone.value;
  const customerEmail = form.email.value;
  const customerDescription = form.description.value;
  const customerOrderData = {foodName,quantity,foodPrice,totalFoodPrice,customerFullName,customerAddress,customerPhone,customerEmail,customerDescription,totalFoodPriceWithCharge,moneyCharge}

  setLoad(true)
  try{
    const result = await submitFastFoodOrder(customerOrderData);
    if(result.insertedId){
      toast.success("অভিনন্দন ! আপনার ইমেইল চেক করুণ",{duration:8000});
      form.reset();
      // here handle email js:
        // ✅ EmailJS দিয়ে কাস্টোমারকে কনফার্মেশন ইমেইল পাঠানো হচ্ছে
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: customerEmail,
          to_name: customerFullName,
          food_name: foodName,
          quantity: quantity,
          total_price: totalFoodPrice,
          total_charge: moneyCharge,
          total_money: totalFoodPriceWithCharge,
          address: customerAddress,
          shop_name: "অনিক কনফেকশন (বেজ্ঞল ফুড)",
          from_name: "প্রোঃ অর্জুন",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success('আপনার কনফার্মেশন ইমেইল পাঠানো হয়েছে!', {
          position: "bottom-center"
        })
      })
      .catch((error) => {
        console.error("ইমেইল পাঠাতে সমস্যা হয়েছে:", error);
        toast.success('ইমেইল পাঠাতে ব্যর্থ। তবে অর্ডার সফল হয়েছে!', {
          position: "bottom-center"
        })
      });
    }
  }
  catch(err){
    console.log("দুঃখিত আপনার অর্ডার সম্পুর্ণ হয় নি। কিচ্ছুক্ষন পর আবার চেষ্টা করুন");
  }
  finally{
    setLoad(false)
  }
}
    
   return  <div>
   <Container>
   <div className="my-14">
    
     <div className="flex flex-col items-center justify-center ">
       <div className="border p-4 shadow-xl w-full md:w-[40%] relative">
        <div className="absolute -top-10 left-[42%] rounded-full overflow-hidden bg-primary w-24 h-24 flex flex-col items-center justify-center"><img className="w-24 h-24 rounded-full" src={detailsFood?.foodImg} alt="" /></div>
         <div className=" space-y-4">
           <h2 className="font-medium text-xl text-black">{detailsFood?.foodName}</h2>
           <div className="flex items-center gap-5">
             <div>rating</div>
             <span>2.4 (3)</span>
           <div>SKU:25415</div>
           </div>
           <p className="text-black font-medium text-2xl ">{detailsFood?.foodPrice} টাকা</p>
           <p className="text-sm">{detailsFood?.foodDescription}</p>
           <div className="flex items-center justify-between md:gap-3">
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
        <div className="my-8">
            <div className='space-y-3'>
            <div className="">
            <h3 className="text-center uppercase text-xl mb-3 text-primary font-medium">✔ চাহিদা অনুযাই আপনার তথ্য দিন </h3>
            <p className="text-center md:text-sm text-xs"><span className="text-green-700">মনে রাখুনঃ</span> <span className="text-slate-700">শুধুমাত্র রাজনগর, খারপাড়া, বাজুয়া, পারশিপাড়া,  কণিগ্রাম, মজিদপুর এই গ্রাম গুলোতে হোম সার্ভিস চলিত। </span></p>
            </div>
            <div className="divider"></div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700">আপনার সম্পূর্ণ নাম দিন</h3>
            <input name="fullName" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="text" placeholder=' সম্পুর্ণ নাম লিখুন---' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">ঠিকানা দিন</h3>
            <select
                value={customerAddress}
                onChange={handleAddressChange}
                name="address"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="rajnagar">রাজনগর</option>
                <option value="kharpara">খারপাড়া</option>
                <option value="parshipara">পারশিপাড়া</option>
                <option value="bajua">বাজুয়া</option>
                <option value="karnigram">কণিগ্রাম</option>
                <option value="mojidpur">মজিদপুর</option>
            </select>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700">সচল মোবাইল নম্বর দিন</h3>
            <input name="phone" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="number" placeholder='+৮৮..' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">আপনার ই-মেইন দিন</h3>
            <input name="email" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full text-sm" type="email" defaultValue={user?.email}  required/>
            </div>
            </div>
            <div>
              <h3 className="mb-2 text-[15px] text-slate-700">বিস্তারিত আপনার বাসা/ঘর/রাস্তা লিখে দিন</h3>
              <p className="text-xs">সঠিক তথ্য দিয়ে সহযোগিতা করুন। যাতে আপনার তথ্য অনুযাই আমরা আপনার নিকট সহজে চলে আস্তে পারি।</p>
            <textarea name="description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] text-sm mt-2" type="text" placeholder='আপনার খাবার যেখান থেকে রিসিভ করবেন সেই জায়গার বিস্তারিত তথ্য দিন---'/>
            </div>
            <div onClick={handleConfirmOrder} className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
            <button>{load === true ? <Load />:"অর্ডার করুন"}</button>
            </div>
          </div>
        </div>         
    </form>
           </div>
           <div className="flex items-center gap-3 font-medium cursor-pointer hover:text-primary">
           <IoHeartOutline />
            সেইব করে রাখুন
           </div>
           <div className="space-y-3">
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
          <div className="flex items-center gap-3">
            <SiFoodpanda />
            <span>মিনিমাম ১০০ টাকার খাবার অর্ডার করুন</span>
          </div>
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
}
export default OrderDetailsPage;
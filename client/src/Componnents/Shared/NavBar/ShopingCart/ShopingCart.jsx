import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { getShopingCartProduct } from "../../../../Api/fastFoodRelatedApi/foodApi";
import ShopingCard from "./ShopingCard";
import { useState } from "react";
import { Helmet } from "react-helmet";

const ShoppingCart = () => {
  const [village,setVillage] = useState(0)
    const {user} = useAuth()
    const {data:cartProduct,isLoading} = useQuery({
        queryKey:"cartProduct",
        queryFn:async () => await getShopingCartProduct(user?.email) 
    })
    const total = cartProduct?.reduce((total, product) => {
      return total + (product?.totalFoodPrice || 0); 
  }, 0);
   
  const handleVillageChange = (event) => {
    const village = event.target.value;
  
    if (village === "রাজনগর") {
      setVillage(10);
    } else if (village === "খারপাড়া" || village === "বাজুয়া") {
      setVillage(20);
    } else if (village === "পার্শিপাড়া" || village === "কর্ণিগ্রাম") {
      setVillage(30);
    } else {
      setVillage(40);
    }
  };
    const totalPrice = total; // মোট দাম
    const deliveryCharge = village; // ডেলিভারি চার্জ
    const finalTotal = totalPrice + deliveryCharge; // মোট দাম + ডেলিভারি চার্জ
  
    return (
      <>
      <div className="bg-gray-100 min-h-screen py-12">
      <Helmet>
        <title>শপিং কার্ট | Anik Confectionery</title>
        <meta
          name="description"
          content="আপনার শপিং কার্ট পেজে রয়েছে আপনার অর্ডার করা খাবারের তালিকা, মোট দাম এবং ডেলিভারি চার্জ।"
        />
        <meta name="keywords" content="শপিং কার্ট, খাবার অর্ডার, ডেলিভারি, অর্ডার চেকআউট" />
      </Helmet>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* হেডার */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            🛒 আপনার শপিং কার্ট
          </h2>
          <p className="text-center mb-5">{cartProduct?.length <= 0 && " দুঃখিত 😥। আপনি কোনো খাবার অর্ডার করেন নি!"}</p>
          <div className="space-y-6">
            {/* অর্ডার আইটেম ১ */}
            {
                cartProduct?.map((product) => <ShopingCard key={product?._id} product={product} loading={isLoading}/>)
            }
  
            {/* মোট দাম */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">মোট:</h3>
              <p className="text-lg sm:text-xl font-bold text-green-600">
                ৳{totalPrice}
              </p>
            </div>
  
            {/* ✅ ডেলিভারি চার্জ */}
            <div className="relative bg-blue-100 p-4 rounded-xl shadow-md mt-4">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-500 rounded-t-xl"></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                🚚 ডেলিভারি চার্জ
              </h3>
              <p className="text-gray-700">
                আপনার মোট অর্ডারের সাথে একটি ছোট ডেলিভারি চার্জ যুক্ত হবে।
              </p>
              <div className="flex justify-between mt-2">
              <select onChange={handleVillageChange} defaultValue="গ্রাম নির্বাচন করুন" className="select select-sm">
                <option disabled={true}>গ্রাম নির্বাচন করুন</option>
                <option value={"রাজনগর"}>রাজনগর</option>
                <option value={"মহাসহস্র"}>মহাসহস্র</option>
                <option value={"খারপাড়া"}>খারপাড়া</option>
                <option value={"বাজুয়া"}>বাজুয়া</option>
                <option value={"পার্শিপাড়া"}>পার্শিপাড়া</option>
                <option value={"কর্ণিগ্রাম"}>কর্ণিগ্রাম</option>
                <option value={"মজিদপুর"}>মজিদপুর</option>
              </select>
                <span className="text-gray-600">চার্জ:</span>
                <span className="text-blue-600 font-semibold">
                  ৳{deliveryCharge}
                </span>
              </div>
            </div>
  
            {/* ✅ সর্বমোট */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                সর্বমোট:
              </h3>
              <p className="text-lg sm:text-xl font-bold text-primary">
                ৳ {finalTotal} মাত্র
              </p>
            </div>
          </div>
        </div>
      </div>


      
      </>
    );
  };
  
  export default ShoppingCart;
  
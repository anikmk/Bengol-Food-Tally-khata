import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { getShopingCartProduct } from "../../../../Api/fastFoodRelatedApi/foodApi";
import ShopingCard from "./ShopingCard";
import { useState } from "react";

const ShoppingCart = () => {
  const [village,setVillage] = useState(0)
    const {user} = useAuth()
    console.log(user?.email);
    const {data:cartProduct,isLoading} = useQuery({
        queryKey:"cartProduct",
        queryFn:async () => await getShopingCartProduct(user?.email) 
    })
    const total = cartProduct?.reduce((total, product) => {
      return total + (product?.totalFoodPrice || 0); 
  }, 0);
    console.log(total);
    console.log(cartProduct);
    const handleVillageChange = (event) => {
      const village = event.target.value;
      if(village === "রাজনগর"){
        setVillage(10)
      }
      else{setVillage(20)}
      console.log(village);
    };
    const totalPrice = total; // মোট দাম
    const deliveryCharge = village; // ডেলিভারি চার্জ
    const finalTotal = totalPrice + deliveryCharge; // মোট দাম + ডেলিভারি চার্জ
  
    return (
      <>
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* হেডার */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            🛒 আপনার শপিং কার্ট ফাস্ট ফুড অর্ডার এর জন্য
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
                <option value={"পারশিপাড়া"}>পারশিপাড়া</option>
                <option value={"কণিগ্রাম"}>কণিগ্রাম</option>
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
  
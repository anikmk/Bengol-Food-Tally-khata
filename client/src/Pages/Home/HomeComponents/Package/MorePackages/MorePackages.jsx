import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getMorePackages } from "../../../../../Api/PackageRelatedApi/packageApi";
import MorePackagesCard from "./MorePackagesCard";

const MorePackages = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const nameOfPackage = searchParams.get("name");

  const { data: morePackages, isLoading } = useQuery({
    queryKey: ["allUsersData", id],
    queryFn: async () => await getMorePackages(id),
  });

  console.log(morePackages?.[0]?.packageOptions);

  if (isLoading) return <p>লোড হচ্ছে...</p>;
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-7">
          আমাদের প্যাকেজসমূহ
        </h1>
        <p className="text-base text-center text-gray-800 mb-10">
         ❌ মিনিমাম দুই দিন (০২) পূর্বে অর্ডার কনফার্ম করবেন। অন্যতায় অর্ডার গ্রহন করা হবে না।❌
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {morePackages?.[0]?.packageOptions?.map((option, index) =><MorePackagesCard key={index} item={option} loading={isLoading}/>)
          
          }

          {/* কাস্টম অর্ডার কার্ড */}
          <div className="bg-[#F3F4F6] border border-gray-300 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3595/3595451.png"
              alt="Custom Order"
              className="w-20 h-20"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">
             {nameOfPackage} এর জন্য
            </h3>
            <h3 className="text-lg font-semibold mt-4 text-gray-800">
              কাস্টম অর্ডার
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              আপনার ইচ্ছামতো খাবারের অর্ডার করুন।
            </p>
            <button
              onClick={() => alert("Custom Order Page এ যাবেন")}
              className="mt-4 w-full bg-[#3B82F6] text-white py-2 rounded-xl hover:bg-[#2563EB] transition"
            >
              কাস্টম অর্ডার করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorePackages;

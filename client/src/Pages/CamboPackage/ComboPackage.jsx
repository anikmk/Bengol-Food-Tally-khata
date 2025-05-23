
import { useQuery } from "@tanstack/react-query";
import ComboPackageCard from "./ComboPackageCard/ComboPackageCard";
import { getAllPackages } from "../../Api/PackageRelatedApi/packageApi";
import { Helmet } from "react-helmet";
const ComboPackage = () => {
  
  const {data:packages,isLoading,} = useQuery({
    queryKey:"packages",
    queryFn:async () => await getAllPackages() 
})
  return (
    <div className="bg-gray-100 py-10">
      <Helmet>
        <title>আমাদের প্যাকেজ | Our Combo Packages</title>
        <meta
          name="description"
          content="আমাদের বিশেষ কম্বো প্যাকেজগুলো থেকে আপনার পছন্দেরটি বেছে নিন। Choose the best combo package for your special occasions."
        />
        <meta
          name="keywords"
          content="প্যাকেজ, কম্বো প্যাকেজ, ইভেন্ট, খাওয়া-দাওয়া, Combo Package, Event Catering, Bengali Food Packages"
        />
      </Helmet>
      <h1 className="text-center text-3xl font-bold text-primary mb-6">
        আমাদের প্যাকেজ
      </h1>
      <p className="text-center text-gray-600 mb-8">
        আপনার বিশেষ দিনের জন্য সেরা প্যাকেজটি বেছে নিন।
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {packages?.map(allPackage => <ComboPackageCard key={allPackage?._id} items={allPackage} loading={isLoading}/>)}
      </div>
    </div>
  );
};

export default ComboPackage;

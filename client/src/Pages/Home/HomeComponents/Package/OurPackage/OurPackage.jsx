import { getAllPackages } from "../../../../../Api/PackageRelatedApi/packageApi";
import Container from "../../../../../Componnents/Shared/Container/Container";
import Heading from "../../../../../Componnents/Shared/Heading/Heading";
import PackageCard from "./PackageCard";
import { useQuery } from "@tanstack/react-query";

const OurPackage = () => {
    const {data:packages,isLoading,} = useQuery({
        queryKey:"allUsersData",
        queryFn:async () => await getAllPackages() 
    })
  
    return <>
    
    <Container>
    <div className="py-8">
    <Heading heading={"আমাদের প্যাকেজ"} subHeading={"আপনার বিশেষ দিনের জন্য সেরা প্যাকেজটি বেছে নিন।"}/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {
            packages?.map((item,idx) => <PackageCard key={idx} item={item} loading={isLoading}/>)
        }

        </div>
    </div>
    </Container>
    
    </>

}
export default OurPackage;
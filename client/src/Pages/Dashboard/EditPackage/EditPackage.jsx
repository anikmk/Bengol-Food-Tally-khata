import { useQuery } from "@tanstack/react-query";
import { getAllPackages } from "../../../Api/PackageRelatedApi/packageApi";

const EditPackage = () => {
    const {data:packages,isLoading,} = useQuery({
        queryKey:"packages",
        queryFn:async () => await getAllPackages() 
    })
    console.log(packages?.packageOptions);
    return <>
    edit package
    ekhane ektu form niye form er betor shob gula data ekta system kore
    get kore tar por update kora lagbe besi kiccu nay kali price ar items ar package name description
    </>
}
export default EditPackage;
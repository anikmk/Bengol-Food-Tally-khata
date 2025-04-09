import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getBirthdayCategoriesDetails } from "../../../Api/BirthdayRelatedApi/birthday";

const BirthdayCakeCard = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const {data:birthDayCardDetails,isLoading} = useQuery({
        queryKey:[id,"birthDayCardDetails"],
        queryFn:async()=>await getBirthdayCategoriesDetails(id)
    })
    
    return <>
    birthday cake card
    </>
}
export default BirthdayCakeCard;
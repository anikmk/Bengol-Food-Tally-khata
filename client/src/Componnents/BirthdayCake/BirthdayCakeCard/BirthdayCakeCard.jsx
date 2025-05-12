import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getBirthdayCategoriesDetails } from "../../../Api/BirthdayRelatedApi/birthday";
import Container from "../../Shared/Container/Container";
import BirthDayCardDetails from "./BirthdayCardDetails";
import Loader from "../../Shared/Loader/Loader";
import { Helmet } from "react-helmet";

const BirthdayCakeCard = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const {data:birthDayCardDetails,isLoading} = useQuery({
        queryKey:[id,"birthDayCardDetails"],
        queryFn:async()=>await getBirthdayCategoriesDetails(id)
    })
    if(isLoading) return <Loader />
    return <>
    <Helmet>
    <title>🎂 কেকের বিস্তারিত তথ্য | Birthday Cake</title>
    <meta name="description" content="বিভিন্ন ডিজাইনের জন্মদিনের কেক বেছে নিন এবং অর্ডার করুন Anik confectionary থেকে।" />
  </Helmet>
    <Container>

    <div className="py-20">
    <div>
    <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-10">
    🎂 কেকের বিস্তারিত তথ্য 🎂
      </h2>
      <p className="text-center mb-10">আপনার চাহিদা অনুযাই নিচের যেকোনো একটি কেকের ডিজাইন পছন্দ করে অর্ডার করুন ।</p>
    </div>
    <div className="grid md:grid-cols-4 grid-cols-1 gap-5 items-center">
                    {birthDayCardDetails?.designs.map((cake) => (
                        <BirthDayCardDetails key={cake?.name} cake={cake} size={birthDayCardDetails?.size} flavor={birthDayCardDetails?.flavor} loading={isLoading}/>
                    ))}
     </div>
    </div>
    </Container>
    </>
}
export default BirthdayCakeCard;
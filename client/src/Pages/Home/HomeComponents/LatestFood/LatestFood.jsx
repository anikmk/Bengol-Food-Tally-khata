
import Container from "../../../../Componnents/Shared/Container/Container";
import Heading from "../../../../Componnents/Shared/Heading/Heading";


import FoodCard from "./FoodCard";
const LatestFood = () => {
  return (
    <>
      <div className="my-10">
        <Container>
          <Heading
            heading={"আপনার ফাস্ট ফোড"}
            subHeading={"আপনি কি খাবেন? তাহলে অডার করুন।"}
          />

         <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
         {
            [1,2,3,4,5,6,7,8,9].map((food,inx)=> <FoodCard key={inx}/>)
         }
         </div>
        </Container>
      </div>
    </>
  );
};
export default LatestFood;

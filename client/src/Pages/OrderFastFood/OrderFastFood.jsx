import Container from "../../Componnents/Shared/Container/Container";
import Heading from "../../Componnents/Shared/Heading/Heading";
import FoodCard from "../Home/HomeComponents/LatestFood/FoodCard";
import { foodCategorys } from "./foodCategorys";

const OrderFastFood = () => {
    const handleCategorySearch = (category) => {
        console.log(category);
    }
    // search food
    const handleSearchFood = (searchFood) => {
        console.log(searchFood);
    }
    return <>
    <div  className="my-14">
    <Container>

<div>
    <div className="grid grid-cols-2 gap-3 place-items-center">
        <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">খাবার খুঁজুন</h3>
            <input onChange={(e) => handleSearchFood(e.target.value)}  name="name" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='ফাস্ট ফোড সার্চ করুন' required/>
        </div>
        
        <div className="w-40"><img className="text-black" src="./orderlogo.png" alt="" /></div>
    </div>
</div>
<div className="flex items-center justify-between">
    <Heading heading={'জনপ্রিয় কিছু খাবার'} subHeading={'তাড়াতাড়ি করে অর্ডার করুন'}/>
    <button className="bg-primary p-2 uppercase text-neutral rounded">সব দেখুন</button>

</div>


{/* carousel */}
<div className="carousel rounded-box w-[70%] mx-auto overflow-x-auto flex mb-10">
            {foodCategorys.map((item) => (
                <button
                    onClick={()=>handleCategorySearch(item?.item)}
                    key={item.id}
                    className="carousel-item flex-shrink-0 px-6 py-3 bg-primary text-white m-2 rounded-lg flex items-center justify-center text-lg uppercase"
                >
                    {item.item}
                </button>
            ))}
        </div>


        {/* food card: */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
         {
            [1,2,3,4,5,6,7,8,9].map((food,inx)=> <FoodCard key={inx}/>)
         }
         </div>
</Container>

    </div>
    </>
}
export default OrderFastFood;
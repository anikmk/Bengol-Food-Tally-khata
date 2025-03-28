import { useRef, useState } from "react";
import Container from "../../Componnents/Shared/Container/Container";
import Heading from "../../Componnents/Shared/Heading/Heading";
import FoodCard from "../Home/HomeComponents/LatestFood/FoodCard";
import { foodCategorys } from "./foodCategorys";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getFastFoodByEmail } from "../../Api/fastFoodRelatedApi/foodApi";
import Loader from "../../Componnents/Shared/Loader/Loader";
const OrderFastFood = () => {
    const carouselRef = useRef(null);
    const [category,setCategory] = useState("");
    const [searchFood,setSearchFood] = useState("");
    const {data:foods,isLoading,refetch} = useQuery({
        queryKey:[category,searchFood,"foods"],
        queryFn:async()=> await getFastFoodByEmail(searchFood,category)
    })
    const handleCategorySearch = (category) => {
        setSearchFood("");
        setCategory(category);
        refetch();
    };

    const handleSearchFood = (searchFood) => {
        setCategory("");
        setSearchFood(searchFood);
        refetch();
    };
    const scrollCarousel = (direction) => {
        const scrollAmount = carouselRef.current.offsetWidth; // Scroll by the container's width
        if (direction === "prev") {
            carouselRef.current.scrollLeft -= scrollAmount;
        } else {
            carouselRef.current.scrollLeft += scrollAmount;
        }
    };

   
    return (
        <div className="my-14">
            <Container>
                {/* Search Section */}
                <div>
                    <div className="md:grid grid-cols-2 gap-3 place-items-center">
                        <div className="w-full">
                            <h3 className="mb-2 text-[15px] text-slate-700">খাবার খুঁজুন</h3>
                            <input
                                onChange={(e) => handleSearchFood(e.target.value)}
                                name="name"
                                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                                type="text"
                                placeholder="ফাস্ট ফোড সার্চ করুন"
                                required
                            />
                        </div>

                        <div className="w-40 hidden md:block">
                            <img className="text-black" src="./orderlogo.png" alt="Order Logo" />
                        </div>
                    </div>
                </div>

                {/* Heading Section */}
                <div className="flex items-center justify-between my-6">
                    <Heading heading={"জনপ্রিয় কিছু খাবার"} subHeading={"তাড়াতাড়ি করে অর্ডার করুন"} />
                    <button className="bg-primary p-2 uppercase text-neutral rounded">সব দেখুন</button>
                </div>

                {/* Carousel Section */}
                <div className="relative mb-10">
                    {/* Prev Button */}
                    <button
                        onClick={() => scrollCarousel("prev")}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Carousel */}
                    <div
                        ref={carouselRef}
                        className="carousel rounded-box w-[70%] mx-auto overflow-x-auto flex scrollbar-hide"
                    >
                        {foodCategorys.map((item) => (
                            <button
                                onClick={() => handleCategorySearch(item?.item)}
                                key={item.id}
                                className="carousel-item flex-shrink-0 px-6 py-3 bg-primary text-white m-2 rounded-lg flex items-center justify-center text-lg uppercase"
                            >
                                {item.item}
                            </button>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => scrollCarousel("next")}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Food Cards Section */}
                {
                    isLoading ? <> <Loader /> </>:<>
                    
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
                    {foods && foods?.map((food) => (
                        <FoodCard key={food?._id} food={food} loading={isLoading}/>
                    ))}
                </div>
                    
                    </>
                }
            </Container>
        </div>
    );
};

export default OrderFastFood;

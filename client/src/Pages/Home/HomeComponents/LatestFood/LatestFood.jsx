import { useRef } from "react";
import Container from "../../../../Componnents/Shared/Container/Container";
import Heading from "../../../../Componnents/Shared/Heading/Heading";
import FoodCard from "./FoodCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {useQuery} from "@tanstack/react-query"
import { getAllFastFood } from "../../../../Api/fastFoodRelatedApi/foodApi";
const LatestFood = () => {
  const carouselRef = useRef(null);

  const {data:fastFoods = [],isLoading} = useQuery({
    queryKey:"fastFoods",
    queryFn:async()=> await getAllFastFood()
  })

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild.offsetWidth; 
      const scrollAmount = cardWidth * 2; 
      carouselRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  
  return (
    <div className="my-8">
      <Container>
        <Heading
          heading={"আপনার ফাস্ট ফোড"}
          subHeading={"আপনি কি খাবেন? তাহলে অর্ডার করুন।"}
        />

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
            className="carousel rounded-box mx-auto overflow-x-auto flex gap-4 scrollbar-hide"
          >
            {fastFoods?.map((food, inx) => (
              <div
                key={inx}
                className="flex-shrink-0 w-1/2 md:w-1/5 h-full"
              >
                <FoodCard food={food} loading={isLoading}/>
              </div>
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
      </Container>
    </div>
  );
};

export default LatestFood;

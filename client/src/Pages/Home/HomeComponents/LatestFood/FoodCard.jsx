import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import Loader from "../../../../Componnents/Shared/Loader/Loader";

const FoodCard = ({ food, loading }) => {
  if (loading) return <Loader />;

  return (
    <>
      <div className="shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white">
        <div className="group relative flex flex-col h-full overflow-hidden">
          <div className="flex-grow">
            <div className="relative">
              <img
                className="md:h-40 h-28 w-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                src={food?.foodImg}
                alt=""
              />

              <div className="hoverEffect absolute top-0 -right-14 group-hover:right-2 transition-all duration-300 z-10">
                <div className="hover:bg-neutral bg-primary hover:text-primary md:px-4 px-2 md:py-4 py-2 hover:cursor-pointer rounded-full shadow-md">
                  <CiHeart />
                </div>
              </div>

              <div className="p-3 rounded-b-xl space-y-2">
                <div className="capitalize font-semibold text-[16px]">
                  {food?.foodName}
                </div>
                <div className="text-sm text-gray-600">
                  {food?.foodDescription}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <p className="text-primary font-medium">⭐ Star</p>
                  <p
                    className={`${
                      food?.available ? "text-green-700" : "text-red-500"
                    } font-medium`}
                  >
                    {food?.available ? "In Stock" : "Stock Out"}
                  </p>
                </div>

                <div className="relative mt-4">
                  <h3 className="text-center border border-primary font-medium py-2 group-hover:opacity-0 transition-opacity duration-300">
                    {food?.foodPrice} টাকা
                  </h3>
                  <Link to={`/foodDetails/?id=${food?._id}`}>
                    <button className="mx-auto w-full px-4 py-2 absolute -bottom-20 group-hover:bottom-0 font-medium text-white bg-primary rounded transition-all duration-300 hoverEffect">
                      এখনই কিনুন
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;

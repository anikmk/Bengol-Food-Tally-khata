import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import Loader from "../../../../Componnents/Shared/Loader/Loader";

const FoodCard = ({food,loading}) => {
  if(loading) return <Loader />
  
    return <>
    <div className=" shadow-xl">
                <div className="group relative flex flex-col h-full overflow-hidden">
                  <div className="flex-grow">
                    <div className="relative">
                      <img
                        className="md:h-40 h-28 w-full bg-cover bg-center rounded-t"
                        src={food?.foodImg}
                        alt=""
                      />
    
                      <div className=" hoverEffect absolute top-0 -right-14 group-hover:right-0">
                        <div className="hover:bg-neutral bg-primary hover:text-primary md:px-4 px-2 md:py-4 py-2 hover:cursor-pointer ">
                          <CiHeart />
                        </div>
                      </div>
                      <div className="p-3 rounded">
                        <div className="capitalize font-medium mb-2">
                          {food?.foodName}
                        </div>
                        <div className="text-sm">
                          {food?.foodDescription}
                        </div>
                        <div className="flex items-center my-2 text-sm justify-between">
                          <p className="text-primary text-[16px]">Star</p>
                          <p className={`${food?.available === true ? "text-green-700":"text-primary"} text-[16px]`}>{food?.available === true ? "In Stock":"Stock Out"}</p>
                        </div>
                        <div className="relative">
                          <h3 className="text-center border border-primary font-medium py-2 group-hover:opacity-0 transition duration-300">
                            {food?.foodPrice} টাকা
                          </h3>
                          <Link to={`/foodDetails/?id=${food?._id}`}>
                            <button className=" mx-auto w-full px-4 py-2 absolute -bottom-20 group-hover:bottom-0 font-medium group-hover:text-neutral bg-primary rounded  text-white hoverEffect">
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
}
export default FoodCard;
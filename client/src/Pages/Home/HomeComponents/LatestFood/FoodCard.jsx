import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import Loader from "../../../../Componnents/Shared/Loader/Loader";

const FoodCard = ({food,loading}) => {

  if(loading) return <Loader />
  console.log(food);
    return <>
    <div className=" shadow-xl">
                <div className="group relative flex flex-col h-full overflow-hidden">
                  <div className="flex-grow">
                    <div className="relative">
                      <img
                        className="md:h-40 h-28 w-full bg-cover bg-center rounded-t"
                        src={""}
                        alt=""
                      />
    
                      <div className=" hoverEffect absolute bg-white text-white top-0 -right-14 group-hover:right-0 group-hover:text-black group-hover:bg-neutral">
                        <div className="hover:bg-primary hover:text-neutral md:px-4 px-2 md:py-4 py-2 hover:cursor-pointer ">
                          <CiHeart />
                        </div>
                      </div>
                      <div className="p-3 bg-neutral group-hover:bg-slate-100 rounded">
                        <div className="capitalize font-medium mb-2">
                          {"productName"}
                        </div>
                        <div className="text-sm md:block hidden">
                          {"description"}
                        </div>
                        <div className="flex items-center my-2 text-sm justify-between">
                          <p>star</p>
                          <p className="text-red-500">StuckOut</p>
                        </div>
                        <div className="relative">
                          <h3 className="text-center border border-slate-300 font-medium py-2 group-hover:opacity-0 transition duration-300">
                            Price $
                          </h3>
                          <Link>
                            <button className=" mx-auto w-full px-4 py-2 absolute -bottom-20 group-hover:bottom-0 font-medium group-hover:text-black hover:bg-primary rounded  text-white hoverEffect">
                              Buy Now
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
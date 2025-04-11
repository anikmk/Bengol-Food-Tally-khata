import { CiHeart } from "react-icons/ci";
import Loader from "../../Shared/Loader/Loader";
import { Link } from "react-router-dom";

const BirthDayCardDetails = ({ cake,size,flavor, loading }) => {
  if (loading) return <Loader />;

  return (
    <div className="p-4">
      <div className="shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-xl bg-white">
        <div className="group relative flex flex-col h-full overflow-hidden">
          <div className="flex-grow">
            <div className="relative">
              <img
                className="md:h-44 h-60 w-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                src={cake?.image}
                alt="Cake"
              />

              <div className="hoverEffect absolute top-2 -right-14 group-hover:right-2 transition-all duration-300 z-10">
                <div className="hover:bg-neutral bg-primary hover:text-primary md:px-4 px-2 md:py-4 py-2 hover:cursor-pointer rounded-full shadow-md">
                  <CiHeart size={24} />
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold capitalize text-pink-700">{cake?.name}</h3>
                <p className="text-sm text-gray-600">{cake?.description}</p>

                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-pink-700">⭐ {size}</span>
                  <span
                    className={`${
                      cake?.availability === "Available" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {cake?.availability}
                  </span>
                </div>

                <div className="relative mt-4">
                  <h4 className="text-center border border-primary font-medium py-2 rounded transition-opacity duration-300 group-hover:opacity-0">
                    {cake?.price} টাকা
                  </h4>
                  <Link to={`/birthdayOrderForm?name=${encodeURIComponent(cake?.name)}&price=${encodeURIComponent(cake?.price)}&availability=${encodeURIComponent(cake?.availability)}&image=${encodeURIComponent(cake?.image)}&flavor=${encodeURIComponent(flavor)}&size=${encodeURIComponent(size)}`}>
                    <button className="mx-auto w-full px-4 py-2 absolute -bottom-20 group-hover:bottom-0 font-medium text-white bg-pink-600 hover:bg-pink-700 transition-all duration-300 rounded">
                      এখনই কিনুন
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default BirthDayCardDetails;


import Loader from "../../Componnents/Shared/Loader/Loader";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const Section = ({ title, items, onSelect, loading }) => {
  if(loading) return <Loader />
  return (
    <section>
      <h2 className="text-xl font-semibold text-primary mb-4 border-b pb-1">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-[6px]">
        {items?.map((item, index) => (
          <div key={index} className=" rounded-md p-0 md:p-3 text-center shadow-md hover:shadow-lg transition">
            <div className="h-28 bg-gray-100 flex items-center justify-center rounded relative">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover rounded" />
              <div className="absolute bottom-0 bg-white/80 w-full p-[2px] md:p-1">
                <h3 className="font-semibold md:text-base text-[12px] text-primary">{item.name}</h3>
                <div className="flex items-center justify-center gap-[3px]">
                  <div className=" flex items-center gap-[1px]">
                    <p className="font-semibold text-sm md:text-base">{item.price}</p> <div className="text-xs"><FaBangladeshiTakaSign /></div>
                    </div>
                  <div className="">|</div>
                  <p className=" font-medium text-xs md:text-base">{item.avilability === "true" | true ? "স্টোক আছে":"স্টোকে নাই"}</p>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary checkbox-sm"
                  onChange={(e) => onSelect(item, e.target.checked)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;

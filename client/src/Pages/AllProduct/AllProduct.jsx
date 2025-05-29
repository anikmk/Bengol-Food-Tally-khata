import { useState, useEffect, useRef } from "react";
import { FaFilter, FaMinus, FaPlus } from "react-icons/fa";
import Section from "./Section";

const AllProduct = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const filterRef = useRef(null);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };

    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  // 🟢 Add/remove items to shopping bag
  const handleSelect = (item, checked) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) => prev.filter((i) => i.name !== item.name));
    }
  };

   selectedItems.map((items) => {
    console.log(items.price);
  })
  return (
    <div className="max-w-[98%] mx-auto px-2 md:px-4 py-6 relative">
      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 px-3 py-2 border rounded text-primary border-primary"
        >
          <FaFilter />
          ফিল্টার
        </button>
      </div>

      {/* Filter Drawer (Mobile) */}
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-start items-center">
          <div
            ref={filterRef}
            className="bg-white w-11/12 max-w-sm p-4 rounded shadow-lg space-y-3"
          >
            <h2 className="text-lg font-semibold mb-2 text-primary">ফিল্টার করুন</h2>
            <div className="space-y-2">
              <label className="block"><input type="checkbox" /> টোস্ট</label>
              <label className="block"><input type="checkbox" /> কেক</label>
              <label className="block"><input type="checkbox" /> বিস্কিট</label>
            </div>
            <div className="text-right">
              <button className="bg-primary p-2 rounded text-white mt-2 md:text-base text-sm">সার্চ করুন</button>
            </div>
          </div>
        </div>
      )}

      {/* Layout */}
      <div className="grid grid-cols-[1fr_100px] md:grid-cols-[180px_1fr_220px] gap-2 md:gap-4">
        {/* Filter (desktop) */}
        <aside className="hidden md:block border rounded p-4">
          <h2 className="text-lg font-semibold mb-3 text-primary">ফিল্টার</h2>
          <div className="space-y-2">
            <label className="block"><input type="checkbox" /> টোস্ট</label>
            <label className="block"><input type="checkbox" /> কেক</label>
            <label className="block"><input type="checkbox" /> বিস্কিট</label>
          </div>
        </aside>

        {/* Products */}
        <main className="space-y-5 md:space-y-10">
          <Section
            title="টোস্ট বক্স"
            items={[
              { name: "মিল্ক টোস্ট", image: "milk.jpg",price: 100 },
              { name: "ঘি টোস্ট", image: "ghee.jpg",price: 100 },
            ]}
            onSelect={handleSelect}
          />
          <Section
            title="কেক বক্স"
            items={[
              { name: "ভ্যানিলা কেক", image: "vanilla.jpg",price: 200 },
              { name: "চকলেট কেক", image: "choco.jpg",price: 200 },
            ]}
            onSelect={handleSelect}
          />
        </main>

        {/* Shopping Bag */}
        <aside className="border rounded md:p-4 p-2 md:block">
          <h2 className="text-base md:text-lg font-semibold text-primary mb-2">🛒 শপিং ব্যাগ</h2>
          {selectedItems.length === 0 ? (
            <p className="text-xs text-gray-600">কোনো প্রোডাক্ট এখনো নেই</p>
          ) : (
            <ul className="space-y-2">
              {selectedItems.map((item, idx) => (
                <div key={idx}  className="flex items-center gap-2 md:gap-3">
                  <li className=" text-sm border md:h-24 md:w-32 h-16 w-16 overflow-hidden">
                  <img src={item.image} alt={item.name} className="" />
                  {item.name}
                </li>
                <div className="space-y-[1px] grid grid-cols-1 place-items-center">
                <div className="bg-primary text-white rounded-full text-center md:text-xs md:w-5 md:h-5 text-xs w-4 h-4 flex items-center justify-center"> <FaPlus /> </div>
                <div className="font-semibold text-md">0</div>
                <div className="bg-primary text-white rounded-full flex items-center justify-center md:text-xs md:w-5 md:h-5 text-xs w-4 h-4"> <FaMinus /> </div>
                </div>
                </div>
              ))}
            </ul>
          )}
          <hr className="my-2" />
          <button className="bg-primary p-2 rounded text-white w-full mt-2 md:text-base text-xs">হিসাব করুন</button>
          <button className="bg-primary p-2 rounded text-white w-full mt-2 md:text-base text-xs">অর্ডার করুন</button>
        </aside>
      </div>
    </div>
  );
};

export default AllProduct;

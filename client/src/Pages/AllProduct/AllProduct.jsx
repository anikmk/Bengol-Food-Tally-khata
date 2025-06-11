import { useState, useEffect, useRef } from "react";
import { FaFilter, FaMinus, FaPlus } from "react-icons/fa";
import Section from "./Section";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../Api/AllProductsRelatedApi/allProductsApi";
import Loader from "../../Componnents/Shared/Loader/Loader";
import { filterOptions } from "./FilterData/FilterData";
import toast from "react-hot-toast";

const AllProduct = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [selectedFilter,setSelectedFilter] = useState(null);
  const filterRef = useRef(null);
  
  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    if(selectedFilter === filterValue){
      setSelectedFilter(null)
    }
    else{

      setSelectedFilter(filterValue)
    }
  }

  const {data:allProducts = [],isLoading} = useQuery({
    queryKey:['allProduct',selectedFilter],
    queryFn:async() => await getAllProducts(selectedFilter)
  }) 
  console.log(allProducts);


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

  // Add/remove items to shopping bag
  const handleSelect = (item, checked) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, { ...item, quantity: 1 }]);
    } else {
      setSelectedItems((prev) => prev.filter((i) => i.name !== item.name));
    }
  };

  // Increase quantity
  const handleIncreaseQuantity = (itemName) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.name === itemName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const handleDecreaseQuantity = (itemName) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.name === itemName && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleCalculateTotalPrice = () => {
    const calculateTotalPrice = selectedItems.reduce((sum,item) => sum + item.price * item.quantity,0);
    toast.success(`আপনার মোট হিসাব : ${calculateTotalPrice} টাকা`)
  }
   const handleOrder  = () => {
      navigate('/checkOutForm',{state:selectedItems})
   }
     
   if(isLoading) return <Loader />
  return (
    <div className="md:max-w-[98%] max-w-[99%] mx-auto px-2 md:px-4 py-6 relative">
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
            {
                filterOptions?.map(filter => <label key={filter.value} className="block">
                <input className="mr-2" type="checkbox" value={filter.value} onChange={handleFilterChange} checked={selectedFilter === filter.value}
                />
                {filter.label}
              </label>)
              }
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
              {
                filterOptions?.map(filter => <label key={filter.value} className="block">
                <input className="mr-2" type="checkbox" value={filter.value} onChange={handleFilterChange} checked={selectedFilter === filter.value}
                />
                {filter.label}
              </label>)
              }
            </div>
        </aside>

        {/* Products */}
        <main className="space-y-5 md:space-y-10">
          {
            allProducts?.map(items => <Section key={items?._id} title={items?.category} items={items?.items} onSelect={handleSelect} loading={isLoading}/>)
          }
        </main>

        {/* Shopping Bag */}
        <aside className="border rounded md:p-4 p-1 md:block">
          <h2 className="text-sm md:text-lg font-semibold text-primary mb-2">🛒শপিং ব্যাগ</h2>
          {selectedItems.length === 0 ? (
            <p className="text-xs text-gray-600">কোনো প্রোডাক্ট এখনো নেই</p>
          ) : (
            <ul className="space-y-2">
              {selectedItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1 md:gap-3">
                  <div className="text-sm border md:h-24 md:w-32 h-16 w-16 overflow-hidden flex flex-col items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <p>{item.name}</p>
                  </div>
                  <div className="space-y-[1px] grid grid-cols-1 place-items-center">
                    <div
                      onClick={() => handleIncreaseQuantity(item.name)}
                      className="bg-primary text-white rounded-full flex items-center justify-center md:text-xs md:w-5 md:h-5 text-xs w-[18px] h-[18px] cursor-pointer"
                    >
                      <FaPlus />
                    </div>
                    <div className="font-semibold text-md">{item.quantity}</div>
                    <div
                      onClick={() => handleDecreaseQuantity(item.name)}
                      className="bg-primary text-white rounded-full flex items-center justify-center md:text-xs md:w-5 md:h-5 text-xs w-[18px] h-[18px] cursor-pointer"
                    >
                      <FaMinus />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <hr className="my-2" />
          <button onClick={handleCalculateTotalPrice} className="bg-primary p-[6px] md:p-2 rounded text-white w-full mt-2 md:text-base text-xs">হিসাব করুন</button>
          <button onClick={handleOrder} disabled={selectedItems.length === 0} className="bg-primary p-[6px] md:p-2 rounded text-white w-full mt-2 md:text-base text-xs"><Link>চেক আউট</Link></button>
        </aside>
      </div>
    </div>
  );
};

export default AllProduct;

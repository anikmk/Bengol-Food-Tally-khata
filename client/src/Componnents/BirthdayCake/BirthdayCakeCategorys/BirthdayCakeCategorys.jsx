import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllBirthdayCategories } from "../../../Api/BirthdayRelatedApi/birthday";
import Container from "../../Shared/Container/Container";
import Loader from "../../Shared/Loader/Loader";
import { useState } from "react";
import Load from "../../Shared/Loader/load/Load";
import { Helmet } from "react-helmet";

  
const BirthdaycategoryCategorys = () => {
  const [searchParams,setSearchParams] = useState({});

  const {data:birthdayCategories = [],isLoading,refetch} = useQuery({
    queryKey:["birthdayCategories",searchParams],
    queryFn:async()=>await getAllBirthdayCategories(searchParams)
  })

  const handleSearchCake = async(e) => {
    e.preventDefault();
    const form = e.target;
    const flavor = form.cakeFlavor.value;
    const size = form.cakeSize.value;
    const searchData = {};
    if (flavor) searchData.flavor = flavor;
    if (size) searchData.size = size;
    setSearchParams(searchData);
    refetch();

  }
  if(isLoading) return <Loader />
  return (
    <div className="min-h-screen px-5 py-10 bg-gradient-to-br from-pink-100 via-yellow-50 to-pink-50">
      <Helmet>
        <title>জন্মদিন কেক ক্যাটাগরি | Birthday Cake Categories</title>
        <meta
          name="description"
          content="চকলেট ও ভ্যানিলা ফ্লেভারে বিভিন্ন সাইজের জন্মদিনের কেক ক্যাটাগরি দেখুন। Choose from a wide range of birthday cake designs."
        />
        <meta
          name="keywords"
          content="জন্মদিন কেক, কেক ক্যাটাগরি, চকলেট কেক, ভ্যানিলা কেক, Birthday Cake, Cake Categories, Bengali Birthday Cakes"
        />
      </Helmet>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-10">
        🎂 জন্মদিন কেক ক্যাটাগরি 🎂
      </h2>
      <Container>
      <form onSubmit={handleSearchCake}>
        <div className="mb-14 my-8">
          <div>
          <div className='md:flex items-center  gap-5'>
            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700"> কেকের ফ্লেভার নির্বাচন করুন</h3>
              <select
                name="cakeFlavor"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="Chocolate">চকলেট ফ্লেভার</option>
                <option value="Vanilla">ভ্যানিলা ফ্লেভার</option>
            </select>
            </div>
            <div className='w-full'>
              <h3 className="my-2 text-[15px] text-slate-700">কেকের সাইজ নির্বাচন করুন</h3>
              <select
                name="cakeSize"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="হাফ পাউন্ড">হাফ পাউন্ড</option>
                <option value="১ পাউন্ড">১ পাউন্ড</option>
                <option value="২ পাউন্ড">২ পাউন্ড</option>
                <option value="৩ পাউন্ড">৩ পাউন্ড</option>
                <option value="৪ পাউন্ড">৪ পাউন্ড</option>
                <option value="৫ পাউন্ড">৫ পাউন্ড</option>
            </select>
            </div>
            <div className="w-full p-2 text-neutral text-center bg-pink-500 hover:bg-pink-600 rounded font-medium mt-8 cursor-pointer">
            
            <button> {isLoading ? <><Load /></>: "খুঁজে নিন" }</button>
            </div>
            </div>
          </div>
        </div>
      </form>
      </Container>

      <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {birthdayCategories?.map((category) => (
          <div
            key={category?._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-pink-300 transition duration-300 overflow-hidden"
          >
            <img
              src={category?.image}
              alt={`${category?.flavor} ${category?.size}`}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-pink-800">
                {category?.flavor} কেক
              </h3>
              <p className="text-sm text-gray-500 mt-1">{category?.size}</p>
              <button className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-sm font-medium">
                <Link to={`/birthdaycategoryCard/?id=${category?._id}`}>ডিজাইন দেখুন</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </div>
  );
};

export default BirthdaycategoryCategorys;

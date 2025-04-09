import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllBirthdayCategories } from "../../../Api/BirthdayRelatedApi/birthday";

const cakeCategories = [
  {
    flavor: "Vanilla",
    size: "হাফ পাউন্ড",
    image: "https://example.com/images/vanilla_half_main.jpg",
  },
  {
    flavor: "Vanilla",
    size: "১ পাউন্ড",
    image: "https://example.com/images/vanilla_1lb_main.jpg",
  },
  {
    flavor: "Chocolate",
    size: "হাফ পাউন্ড",
    image: "https://example.com/images/chocolate_half_main.jpg",
  },
  {
    flavor: "Chocolate",
    size: "১ পাউন্ড",
    image: "https://example.com/images/chocolate_1lb_main.jpg",
  },
  // আরও সাইজ ও ফ্লেভার চাইলে এখানে যোগ করো
];

  
const BirthdayCakeCategorys = () => {
  const {data:birthdayCategories,isLoading} = useQuery({
    queryKey:"birthdayCategories",
    queryFn:async()=>await getAllBirthdayCategories()
  })
  return (
    <div className="min-h-screen px-5 py-10 bg-gradient-to-br from-pink-100 via-yellow-50 to-pink-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-10">
        🎂 জন্মদিন কেক ক্যাটাগরি
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cakeCategories.map((cake, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-pink-300 transition duration-300 overflow-hidden"
          >
            <img
              src={cake.image}
              alt={`${cake.flavor} ${cake.size}`}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-pink-800">
                {cake.flavor} কেক
              </h3>
              <p className="text-sm text-gray-500 mt-1">{cake.size}</p>
              <button className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-sm font-medium">
                <Link to={'/birthdayCakeCard'}>ডিজাইন দেখুন</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayCakeCategorys;

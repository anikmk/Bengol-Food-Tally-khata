import { useEffect, useRef, useState } from "react";
import { deleteAllDailyMoney, getDailySellMoney, postCalculatorMoney } from "../../../Api/CalculatorRelatedApi/calculatorApi";
import toast from "react-hot-toast";
import Load from "../../../Componnents/Shared/Loader/load/Load";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Componnents/Shared/Loader/Loader";

const Calculator = () => {
  const [loading, setLoading] = useState(false);
  const [resetLoader, setResetLoader] = useState(false);
  const [inputMoney, setInputMoney] = useState("");
  const inputRef = useRef(null);

  // ইনপুট ফোকাস যেনো থাকে
  useEffect(() => {
    inputRef.current?.focus();
  }, [inputMoney]);

  // ইনপুট হ্যান্ডেল
  const handleSaveMoney = (e) => {
    setInputMoney(e.target.value);
  };

  // ডাটাবেজ থেকে ডাটা আনতে
  const { data: moneys = [], isLoading, refetch } = useQuery({
    queryKey: ["moneys"],
    queryFn: async () => await getDailySellMoney(),
  });

  // মোট হিসাব
  const totalMoney = moneys?.reduce((sum, item) => sum + Number(item?.inputMoney), 0);

  // সেভ বাটন
  const handleClick = async () => {
    if (!inputMoney) return;

    const itemMoney = { inputMoney: Number(inputMoney) };
    setLoading(true);

    try {
      const result = await postCalculatorMoney(itemMoney);
      if (result?.insertedId) {
        toast.success("টাকা সেইভ হয়েছে!");
        refetch();
        setInputMoney("");
      }
    } catch (err) {
      toast.error("নেটওয়ার্ক সমস্যা!");
    } finally {
      setLoading(false);
    }
  };

  // এন্টার প্রেস করলে সেইভ
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  // সব ডেটা রিসেট (এখন শুধু console করছে, চাইলে API call করে দাও)
  const handleReset = async() => {
    setResetLoader(true)
    try{
        const result = await deleteAllDailyMoney();
        if(result?.success === true){
            toast.success(result?.message)
            refetch();
        }
    }
    catch(err){
        toast.error("আবার চেষ্টা করুন")
    }
    finally{
        setResetLoader(false)
    }

  };
   const date = new Date();

// বাংলা তারিখ
const banglaDate = date.toLocaleDateString("bn-BD", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// বাংলা সপ্তাহের নাম
const banglaDay = date.toLocaleDateString("bn-BD", {
  weekday: "long",
});

console.log("বাংলা তারিখ:", banglaDate);
console.log("বাংলা সপ্তাহের নাম:", banglaDay);

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white rounded shadow p-6 w-full max-w-lg space-y-4">
        <h1 className="text-2xl font-bold text-center text-primary">ডেইলি বিক্রির হিসাব</h1>
        <div className="flex items-center justify-center gap-4 text-sm font-semibold">
        <p>{banglaDay}  </p>
        <p>-------</p>
        <p>{banglaDate}  </p>
        </div>

        <div className="flex items-center gap-3">
          <input
            ref={inputRef}
            type="number"
            value={inputMoney}
            onChange={handleSaveMoney}
            onKeyPress={handleKeyPress}
            placeholder="টাকার পরিমাণ লিখুন"
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleClick}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
          >
            {loading ? <Load /> : "সেইভ"}
          </button>
        </div>

        <div>
          <h2 className="font-semibold text-primary">আজকের হিসাব:</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {moneys?.map((money) => (
              <li key={money?._id}>৳ {money?.inputMoney}</li>
            ))}
          </ul>
        </div>

        <div className="font-semibold text-lg text-primary">
          মোট টাকা: ৳ {totalMoney}
        </div>

        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full"
        >
           {resetLoader ? <Load /> : "রিসেট (পরের দিনের জন্য)"}
        </button>
      </div>
    </div>
  );
};

export default Calculator;

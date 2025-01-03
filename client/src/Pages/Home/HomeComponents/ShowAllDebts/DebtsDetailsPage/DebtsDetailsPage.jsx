import { useState } from "react";
import { useLocation } from "react-router-dom";


const DebtsDetailsPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id')
    console.log(id);
    const [checkBalance,setCheckBalance] = useState(false);

    const handleCheckBalance = () => {
        setCheckBalance(!checkBalance)
    }

    const handleMoreDebts = (e) => {
        e.preventDefault();
        const form = e.target;
        const moreMoney = form.moremoney.value;
        const backMoney = form.backmoney.value;
        const calculateData = {moreMoney,backMoney}
        console.log(calculateData);
        
    }
    return <>
    <div className="w-[98%] mx-auto border p-2 my-12">
        {
            checkBalance  ? <><div onClick={handleCheckBalance} className="text-center bg-primary mb-5 p-2 rounded text-neutral font-medium">200tk</div></>:<div onClick={handleCheckBalance} className="text-center bg-primary mb-5 p-2 rounded text-neutral font-medium">ব্যালেন্স চেক করুন</div>
        }
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
            <div>
                <h2>পাওনাদারের নামঃ সায়মন</h2>
                <p>টুটাল পাওনা টাকাঃ ২০০ টাকা</p>
            <div className="divider md:hidden"></div>
            </div>
            <div>
                <form onSubmit={handleMoreDebts}>
                <div className="mb-2">
                    <label className="text-xs">আরো টাকা বাকি নিলেন</label>
                    <input name="moremoney" className="mt-2 border-slate-300 border text-sm focus:outline-none bg-transparent p-[4px] rounded-lg w-full font-medium" type="number" placeholder="আরো বাকি নেওয়া টাকার পরিমান যোগ করুন---"/>
                </div>
                <div>
                    <label className="text-xs">কিছু টাকা ফেরত দিলেন</label>
                    <input name="backmoney" className="mt-2 border-slate-300 border text-sm focus:outline-none bg-transparent p-[4px] rounded-lg w-full font-medium" type="number" placeholder="ফেরত দেওয়া টাকার পরিমান লিখুন---"/>
                </div>
                <div className="mt-5">
                    <button className=" w-full font-medium bg-primary p-[6px] rounded-lg text-neutral text-sm">ক্যালকুলেট করুন</button>
                </div>
                </form>
            </div>

        </div>
    </div>

    {/* more details for paonadar */}
    <div className="w-[98%] mx-auto border p-2 my-12">
        <div className="text-center">
            <h5 className="text-lg text-primary mb-4">পাওনাদার সম্পর্কে আরো জানুন</h5>
            <p className="text-xs"><span className="font-semibold text-red-600">মনে রাখুনঃ  </span>পাওনাদার কখন কত টাকা ট্রানজেকশন করেছে তার সম্পুর্ণ তথ্য এখান থেকে দেখুন ।</p>
        </div>
    <div className="overflow-x-auto ">
    <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
        <thead>
            <tr className="bg-primary text-white ">
                <th className="py-3 px-6 text-left border-b">সংখ্যা</th>
                <th className="py-3 px-6 text-left border-b">নাম</th>
                <th className="py-3 px-6 text-left border-b">তারিখ</th>
                <th className="py-3 px-6 text-left border-b">টাকা</th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b">১</td>
                <td className="py-4 px-6 border-b">সায়মন আহমেদ</td>
                <td className="py-4 px-6 border-b">০২/০১/২০২৫</td>
                <td className="py-4 px-6 border-b">২০০ টাকা</td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b">hk</td>
                <td className="py-4 px-6 border-b">ty</td>
                <td className="py-4 px-6 border-b">rty</td>
                <td className="py-4 px-6 border-b">tyr</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>total=200</td>
                </tr>

        </tbody>
    </table>
    </div>
    </div>
    </>
}
export default DebtsDetailsPage;
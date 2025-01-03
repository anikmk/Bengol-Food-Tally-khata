
import Card from "./ShowAllDebtsCard/Card";
import { Link } from 'react-router-dom'

const ShowAllDebts = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchText = form.searchtext.value;
        const status = form.status.value;
        const sorting = form.sorting.value;
        const searchingData = {searchText,status,sorting}
        console.log(searchingData);
    }
  return (
    <div>
        <div className="w-[98%] md:w-[75%] mx-auto border border-primary p-2 my-6">
            <form onSubmit={handleSubmit}>
            <div className="py-8">
            <div className="grid grid-cols-2 items-center gap-2">
                <div>
                    <label className="text-xs"> নাম দিয়ে খুঁজুন</label>
                    <input name="searchtext" className="border-slate-300 border text-sm focus:outline-none bg-transparent p-[4px] rounded-lg w-full font-medium" type="text" placeholder="পাওনা দারের নাম দিন"/>
                </div>
                <div>
                    <label className="text-xs">পাওনাদার ফিল্টার করুন</label>
                    <select name="status" id="" className=' border-slate-300 border text-sm focus:outline-none bg-transparent p-[4px] rounded-lg w-full font-medium'>
                    <option className='' value="">অপশন বেছে নিন</option>
                    <option className='' value="clear">পাওনা টাকা দিয়ে দিয়েছেন</option>
                    <option className='' value="partial">অর্ধেক পাওনা টাকা দিয়েছেন</option>
                    <option className='' value="unpaid">এখন ও কোনো পাওনা টাকা দেন নি</option>
                    </select>
                </div>
                <div>
                    <label className="text-xs">পাওনাদার তুলনা করুন</label>
                    <select name="sorting" id="" className='border-slate-300 border text-sm focus:outline-none bg-transparent p-[4px] rounded-lg w-full font-medium'>
                    <option className='' value="">অপশন বেছে নিন</option>
                    <option className='' value="highToLow">বেশি থেকে কম টাকার পাওনাদার</option>
                    <option className='' value="lowToHigh">কম থেকে বেশি টাকার পাওনাদার</option>
                    </select>

                </div>
                <div className="mt-5">
                    <button className=" w-full font-medium bg-primary p-[4px] rounded-lg text-neutral text-sm">পাওনাদার খুঁজুন</button>
                </div>

            </div>
            </div>
            </form>
        </div>
        <div className="">
            <div className="grid grid-cols-1 gap-5 place-items-center">
                {
                    [1,2,3].map((item,idx)=><div className="" key={idx}>
                        <Link to={`/debtsDetailsPage/${item}`}><Card /></Link>
                    </div>)
                }

            </div>

        </div>
     
    </div>
  );
};
export default ShowAllDebts;

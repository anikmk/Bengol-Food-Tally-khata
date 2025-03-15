

const AddPackages = () => {

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.packageName.value;  
       
             
        const fastFoodData = {foodName,}
        console.log(fastFoodData); 
       
       
      }
    
    return <>
        <div className="bg-white p-5 md:p-8 rounded shadow-xl relative w-[95%]  mx-auto my-12">
      <div className='absolute top-0 left-0 bg-primary w-8 h-[4px]'></div>
      <div className='absolute top-0 left-0 bg-primary w-2 h-[24px]'></div>
      <div className='right-0 bottom-0 bg-primary absolute w-8 h-[4px]'></div>
      <div className='right-0 bottom-0 bg-primary absolute w-2 h-[24px]'></div>
      
    <form onSubmit={handleSubmit}>
        <div className="mb-5">
            <div className='space-y-3'>
            <div className="">
            <h3 className="text-center uppercase text-xl mb-3 text-primary font-medium">* এখান থেকে ফাস্ট ফোড যোক্ত করুন *</h3>
            <p className="text-center md:text-sm text-xs"><span className="text-green-700">মনে রাখুনঃ</span> <span className="text-slate-700">চাহিবা মাত্র তথ্য দিয়ে ফরম পূরণ করবেন ।।</span></p>
            </div>
            <div className="divider"></div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700"> প্যাকেজের নাম</h3>
            <input name="packageName" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='পাওনাদারের সম্পুর্ণ নাম লিখুন---' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">প্যাকেজের ইমেজ</h3>
            <input name="packageImg" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="file"/>
            </div>
            </div>
            {/* <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700"> প্যাকেজের বিবরণ</h3>
            <input name="packageDes" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='পাওনাদারের সম্পুর্ণ নাম লিখুন---' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">প্যাকেজের জনসংখ্যা </h3>
            <input name="numberOfPeople" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" required/>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700"> সাব-প্যাকেজ নাম</h3>
            <input name="childrenPackageName" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='পাওনাদারের সম্পুর্ণ নাম লিখুন---' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">সাব-প্যাকেজ ইমেজ</h3>
            <input name="childrenPackageImg" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="file" required/>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700">ছোট বিবরণ</h3>
            <input name="childrenPackageDescriptionSmall" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='পাওনাদারের সম্পুর্ণ নাম লিখুন---' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">বড় বিবরণ</h3>
            <input name="childrenPackageDescriptionLarge" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" required/>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className="w-full mb-4">
            <h3 className="mb-2 text-[15px] text-slate-700">অপশন নির্বাচন করুন</h3>
            <select
                name="foodStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">খাবের দাম/টাকার পরিমান দিন </h3>
            <input name="childrenPackagePrice" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পাওনা টাকার পরিমান সংখায় লিখুন---' required/>
            </div>
            </div> */}
           
            <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
            <button>প্যাকেজ যুক্ত করুন</button>
            </div>
          </div>
        </div>         
    </form>
  </div>
    </>
}
export default AddPackages;
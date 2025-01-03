


const AddDebts = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const ballance = form.ballance.value;
    // todo: add current date,
    const debtsData = {name,address,phone,ballance}
    console.log(debtsData);
  }
    return (
      <div className="bg-white p-8 rounded shadow-xl relative md:w-3/5 mx-auto my-12">
      <div className='absolute top-0 left-0 bg-primary w-8 h-[4px]'></div>
      <div className='absolute top-0 left-0 bg-primary w-2 h-[24px]'></div>
      <div className='right-0 bottom-0 bg-primary absolute w-8 h-[4px]'></div>
      <div className='right-0 bottom-0 bg-primary absolute w-2 h-[24px]'></div>
      
    <form onSubmit={handleSubmit}>
        <div className="mb-5">
            <div className='space-y-3'>
            <div className="">
            <h3 className="text-center uppercase text-xl mb-3 text-primary font-medium">* এখান থেকে পাওনাদারকে যোক্ত করুন *</h3>
            <p className="text-center md:text-sm text-xs"><span className="text-red-600">মনে রাখুনঃ</span> চাহিদা অনুযাই নির্দিষ্ট তথ্য দিয়ে ফরম টি পূরণ করুন ।।</p>
            </div>
            <div className="divider"></div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 font-poppins text-[#000000f3]"> দয়া করে পাওনাদারের নাম যোগ করুন</h3>
            <input name="name" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='পাওনাদারের সম্পুর্ণ নাম লিখুন---' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 font-poppins text-[#000000f3]"> দয়া করে পাওনাদারের ঠিকানা যোগ করুন</h3>
            <input name="address" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='যেমন গ্রাম এর নাম দিন---' required/>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className='w-full mb-2'>
              <h3 className="mb-2 font-poppins text-[#000000f3]">পাওনাদারের মোবাইল নম্বর দিন</h3>
            <input name="phone" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='+৮৮..' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 font-poppins text-[#000000f3]">দয়া করে পাওনা টাকার পরিমান দিন</h3>
            <input name="ballance" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='পাওনা টাকার পরিমান সংখায় লিখুন---' required/>
            </div>
            </div>
            <div>
              <h3 className="mb-2 font-poppins text-[#000000f3]">পাওনাদারের সম্পর্কে অতিরিক্ত কিছু লিখুন</h3>
            <textarea name="Description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px]" type="text" placeholder='পাওনাদেরের সম্পর্কে অতিরিক্ত কিছু কথা লিখুন---'/>
            </div>
            <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
            <button>পাওনাদারকে জমা করুন</button>
            </div>
          </div>
        </div>         
    </form>
  </div>
    );
};

export default AddDebts;
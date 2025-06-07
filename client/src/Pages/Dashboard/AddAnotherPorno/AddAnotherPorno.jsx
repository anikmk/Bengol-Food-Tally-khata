import { useState } from "react";
import toast from "react-hot-toast";
import { uploadImage } from "../../../Api/utils/utils";
import { createPornoData } from "../../../Api/AllProductsRelatedApi/allProductsApi";
import Load from "../../../Componnents/Shared/Loader/load/Load";

const AddAnotherPorno = () => {
    const [loading,setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.boxCategory.value;
        const name = form.itemName.value;
        const itemImage = form.itemImage.files[0];
        const avilability= form.itemStatus.value;
        const weight= form.itemWeight.value;
        const price = form.itemPrice.value;
        const description = form.itemDescription.value;
        const fastFoodImg = await uploadImage(itemImage);
        const image = fastFoodImg?.data?.display_url;
        const pornoData = {
            category,
            items:[{
                name,image,avilability,weight,price,description,
            }]
        }
        console.log(pornoData);
       
        setLoading(true)
        try{
          const result = await createPornoData(pornoData);
          if(result){
            form.reset();
            toast.success('ধন্যবাদ,আইটেম ক্যাটাগরি যুক্ত করা হয়েছে')
          }
        }
        catch(err){
          toast.error('দুঃখিত আইটেম ক্যাটাগরি যুক্ত যুক্ত করা যায় নি। দয়া করে আবার চেষ্টা করুন')
        }
        finally{
          setLoading(false)
        }
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
              <h3 className="mb-2 text-[15px] text-slate-700">বক্স ক্যাটাগরি</h3>
            <input name="boxCategory" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='যেমনঃ টোস্ট বক্স/এরিয়া,সল্টেস বক্স/এরিয়া---' required/>
            </div>
            <div className='w-full mb-2'>
              <h3 className="mb-2 text-[15px] text-slate-700">আইটেমের নাম দিন</h3>
            <input name="itemName" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='আইটেমের সম্পুর্ণ নাম লিখুন---' required/>
            </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">আইটেমের ছবি যোক্ত করুন</h3>
            <input name="itemImage" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="file" required/>
            </div>
            </div>
            <div className='md:flex items-center  gap-5'>
            <div className="w-full mb-4">
            <h3 className="mb-2 text-[15px] text-slate-700">অপশন নির্বাচন করুন</h3>
            <select
                name="itemStatus"
                className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full"
                required>
                <option value="" disabled selected>নির্বাচন করুন</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
             </div>

            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">আইটেমের দাম </h3>
            <input name="itemPrice" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='আইটেমেটির বিক্রয় মূল্য দিন---' required/>
            </div>
            <div className='w-full'>
              <h3 className="mb-2 text-[15px] text-slate-700">পর্ণের ওজন দিন </h3>
            <input name="itemWeight" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='আইটেমের ওজন দিন---' required/>
            </div>

            </div>
            <div>
              <h3 className="mb-2 text-[15px] text-slate-700">আইটেম সম্পর্কে অতিরিক্ত কিছু লিখুন</h3>
            <textarea name="itemDescription" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px]" type="text" placeholder='আইটেম সম্পর্কে অতিরিক্ত কিছু কথা লিখুন---'/>
            </div>
            <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
            <button>{loading ? <Load />:"খাবার যুক্ত করুন"}</button>
            </div>
          </div>
        </div>         
    </form>
  </div>
    </>
}
export default AddAnotherPorno;
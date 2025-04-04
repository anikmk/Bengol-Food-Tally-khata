

import Loader from "../../../../../../Componnents/Shared/Loader/Loader";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckboxOutline } from "react-icons/io";
import { deleteWithPackageOrder } from "../../../../../../Api/customOrderRelatedApi/customApi";
import toast from "react-hot-toast"
const WithPackageCard = ({order,loading,reFetch}) => {
    const {_id,customerFullName,customerPhone,customerAddress,customerEmail,doi,howMuchPackage,jilabi,misty,nimky,pocketCondition,religion,singkara,water,totalWithPackagePrice,typeOfPackage,status,customerDescription} = order;

    const customerOrderDeleteHandler = async (id) => {
      const isConfirmed = window.confirm(
        `আপনি কি নিশ্চিত যে ${customerFullName} নামের কাস্টমারের অর্ডার সম্পূর্ণ হয়ে গেছে? বা থাকে মুছে ফেলতে চান?`
    );
    if (!isConfirmed) {
        toast("অর্ডার টি মুছে ফেলার কাজ বাতিল করা হয়েছে।", { icon: "⚠️" });
        return;
    }
      try{
        const deleteOrder = await deleteWithPackageOrder(id);
        if(deleteOrder?.deletedCount){
          reFetch();
          toast.success("সফল ভাবে অর্ডার টি মুছে ফেলা হয়েছে")
        }
      }
      catch(err){
        toast.error("দুঃখিত আবার চেষ্টা করুন")
      }
    }
  
    
if(loading) return <Loader />
    return <>
    
    <tr className="border-b text-center capitalize">
            <td className="py-2 px-4 border">{customerFullName}</td>
            <td title={customerPhone} className="py-2 px-4 border cursor-pointer">{customerAddress}</td>
            <td className="py-2 px-4 border">{customerPhone}</td>
            <td className="py-2 px-4 border">{customerEmail}</td>
            <td className="py-2 px-4 border">{howMuchPackage}</td>
            <td className="py-2 px-4 border">{typeOfPackage}</td>
            <td className="py-2 px-4 border text-xl">{misty ? <><div className="text-green-700 flex items-center justify-center"><IoMdCheckboxOutline /></div></>:<><div className="text-red-500 flex items-center justify-center">
                <RxCross2 /></div></>}</td>
            <td className="py-2 px-4 border text-xl">{nimky ? <><div className="text-green-700 flex items-center justify-center"><IoMdCheckboxOutline /></div></>:<><div className="text-red-500 flex items-center justify-center">
                <RxCross2 /></div></>}</td>
            <td className="py-2 px-4 border text-xl">{jilabi ? <><div className="text-green-700 flex items-center justify-center"><IoMdCheckboxOutline /></div></>:<><div className="text-red-500 flex items-center justify-center">
                <RxCross2 /></div></>}</td>
            <td className="py-2 px-4 border text-xl">{doi === "doi" ? <><div className="text-green-700 flex items-center justify-center"><IoMdCheckboxOutline /></div></>:<><div className="text-red-500 flex items-center justify-center">
                <RxCross2 /></div></>}</td>
            <td className="py-2 px-4 border text-xl">{singkara ? <><div className="text-green-700 flex items-center justify-center"><IoMdCheckboxOutline /></div></>:<><div className="text-red-500 flex items-center justify-center">
                <RxCross2 /></div></>}</td>
            <td className="py-2 px-4 border text-xl">{water ? <><div className="text-green-700 flex items-center justify-center"><IoMdCheckboxOutline /></div></>:<><div className="text-red-500 flex items-center justify-center">
                <RxCross2 /></div></>}</td>
            <td className="py-2 px-4 border text-xl">{status === "With Package" ? <><div className="text-green-700 flex items-center justify-center">প্যাকেজ সহ</div></>:<><div className="text-red-500 flex items-center justify-center">
                প্যাকেজ ছাড়া</div></>}</td>
            <td className="py-2 px-4 border text-xl">{totalWithPackagePrice}</td>
            
            <td className="py-2 px-4 border text-xl">
                <button onClick={()=>customerOrderDeleteHandler(_id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </td>
            <td className="border">{customerDescription}</td>
        </tr>

    </>
}
export default WithPackageCard;
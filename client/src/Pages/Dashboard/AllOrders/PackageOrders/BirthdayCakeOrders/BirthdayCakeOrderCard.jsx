

// import toast from "react-hot-toast"
import toast from "react-hot-toast";
import Loader from "../../../../../Componnents/Shared/Loader/Loader";
import { deleteBirthdayOrder } from "../../../../../Api/BirthdayRelatedApi/birthday";

const BirthdayCakeOrderCard = ({order,loading,reFetch}) => {
    const {_id,customerAddress,customerDescription,customerEmail,customerFullName,customerPhone,cakeShapeName,totalCakePrice,totalPriceWithCharge,moneyCharge,availability,cakeImage,birthdayDate,birthdayHeading} = order;

    const customerOrderDeleteHandler = async (id) => {
      const isConfirmed = window.confirm(
        `আপনি কি নিশ্চিত যে ${customerFullName} নামের কাস্টমারের অর্ডার সম্পূর্ণ হয়ে গেছে? বা থাকে মুছে ফেলতে চান?`
    );
    if (!isConfirmed) {
        toast("অর্ডার টি মুছে ফেলার কাজ বাতিল করা হয়েছে।", { icon: "⚠️" });
        return;
    }
      try{
        const deleteOrder = await deleteBirthdayOrder(id);
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
            <td className="py-2 px-4 border"><img className="w-20 h-20 rounded-full overflow-hidden" src={cakeImage} alt={cakeImage} /></td>
            <td className="py-2 px-4 border">{availability}</td>
            <td className="py-2 px-4 border">{customerFullName}</td>
            <td className="py-2 px-4 border">{customerPhone}</td>
            <td className="py-2 px-4 border">{customerAddress}</td>
            <td className="py-2 px-4 border">{cakeShapeName}</td>
            <td className="py-2 px-4 border cursor-pointer">{birthdayDate}</td>
            <td className="py-2 px-4 border">{birthdayHeading}</td>
            <td className="py-2 px-4 border">{moneyCharge}</td>
            <td className="py-2 px-4 border">{totalPriceWithCharge}</td>

            <td className="py-2 px-4 border text-xl">
                <button onClick={()=>customerOrderDeleteHandler(_id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </td>
            <td className="border">{customerDescription}</td>
        </tr>

    </>
}
export default BirthdayCakeOrderCard;
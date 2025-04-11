import { deleteCustomerOrder } from "../../../Api/fastFoodRelatedApi/foodApi";
import Loader from "../../../Componnents/Shared/Loader/Loader";
import toast from "react-hot-toast"
const OrderCard = ({order,loading,reFetch}) => {
    const {_id,customerFullName,customerPhone,foodName,totalFoodPrice,moneyCharge,totalFoodPriceWithCharge
,      foodPrice,quantity,customerAddress,customerEmail,customerDescription} = order;
console.log(order);
    const customerOrderDeleteHandler = async (id) => {
      const isConfirmed = window.confirm(
        `আপনি কি নিশ্চিত যে ${customerFullName} নামের কাস্টমার কে মুছে ফেলতে চান?`
    );
    if (!isConfirmed) {
        toast("কাস্টমার কে মুছে ফেলার কাজ বাতিল করা হয়েছে।", { icon: "⚠️" });
        return;
    }
      try{
        const deleteUserResult = await deleteCustomerOrder(id);
        if(deleteUserResult?.deletedCount){
          reFetch();
          toast.success("সফল ভাবে কাস্টমার কে মুছে ফেলা হয়েছে")
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
            <td title={customerDescription} className="py-2 px-4 border cursor-pointer">{customerAddress}</td>
            <td className="py-2 px-4 border">{customerPhone}</td>
            <td className="py-2 px-4 border">{foodName}</td>
            <td className="py-2 px-4 border">{quantity}</td>
            <td className="py-2 px-4 border">{totalFoodPrice} BDT</td>
            <td className="py-2 px-4 border">{moneyCharge} BDT</td>
            <td className="py-2 px-4 border">{totalFoodPriceWithCharge} BDT</td>
            <td className="py-2 px-4 border">
                <button onClick={()=>customerOrderDeleteHandler(_id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </td>
        </tr>

    </>
}
export default OrderCard;
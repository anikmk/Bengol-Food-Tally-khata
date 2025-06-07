/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { deleteSinglePornoOrder } from "../../../../Api/AllProductsRelatedApi/allProductsApi";
import Loader from "../../../../Componnents/Shared/Loader/Loader";


const PornoOrderCard = ({order,loading,reFetch}) => {
    const {_id,customerFullName,customerPhone,moneyCharge,customerAddress,customerDescription,selectedItems} = order;

  
    const totalFoodPriceWithCharge = selectedItems?.reduce((sum,item) => sum + item?.price * item?.quantity,0)
    
    const handleDelete = async(id) => {
        try{
            const result = await deleteSinglePornoOrder(id);
            if(result?.deletedCount){
                reFetch();
                toast.success("অর্ডার মুছে ফেলা হয়েছে")
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
            <td className="py-2 px-4 border">{selectedItems?.map(item=><li key={item?.name}>{item?.name}</li>)}</td>
            <td className="py-2 px-4 border">{selectedItems?.map(item=><li key={item?.name}>{item?.quantity}</li>)}</td>
            <td className="py-2 px-4 border">{selectedItems?.map(item=><li key={item?.name}>{item?.price}</li>)}</td>
            <td className="py-2 px-4 border">{moneyCharge} BDT</td>
            <td className="py-2 px-4 border">{totalFoodPriceWithCharge} BDT</td>
            <td className="py-2 px-4 border">
                <button onClick={()=>handleDelete(_id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </td>
        </tr>

    </>
}
export default PornoOrderCard;
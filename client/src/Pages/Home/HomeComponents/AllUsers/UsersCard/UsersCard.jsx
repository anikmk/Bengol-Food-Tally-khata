import { deleteUser, UpdateUserStatus } from "../../../../../Api/userRelatedApi/userApi";
import Loader from "../../../../../Componnents/Shared/Loader/Loader";
import toast from "react-hot-toast"
const UsersCard = ({user,loading,reFetch}) => {
  const {name,email,status,_id} = user;
  
  const makeAdminHandler = async (id) => {
    const role ='admin';
    try{
      const updateRole = await UpdateUserStatus(id,role);
      if(updateRole?.modifiedCount === 0){
        return toast.error(`${name} এডমিন আছেন,অন্য একজন কে চেষ্টা করুন`)
      }
    if(updateRole?.modifiedCount){
      toast.success("ইউজারকে ইতি মধ্যে এডমিন করা হয়েছে ")
      reFetch();
    }
    }
    catch(err){
      toast.error("কোনো কারনে ভুল হচ্ছে আবার চেষ্টা করুন")
    }
  }

  const userDeleteHandler = async (id) => {
    const isConfirmed = window.confirm(
      `আপনি কি নিশ্চিত যে ${name} নামের সদস্য কে মুছে ফেলতে চান?`
  );
  if (!isConfirmed) {
      toast("সদস্য কে মুছে ফেলার কাজ বাতিল করা হয়েছে।", { icon: "⚠️" });
      return;
  }
    try{
      const deleteUserResult = await deleteUser(id);
      if(deleteUserResult?.deletedCount){
        reFetch();
        toast.success("সফল ভাবে সদস্য কে মুছে ফেলা হয়েছে")
      }
    }
    catch(err){
      toast.error("দুঃখিত আবার চেষ্টা করুন")
    }
  }

  if(loading) return <Loader />
    return <div className="w-[95%] md:w-[600px] shadow-lg">
    <div className="flex border border-primary items-center justify-between p-[14px] ">
        <div className="font-poppins">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{email}</p>
            <p className={`capitalize ${status === "admin" ? "text-green-700":"text-primary"} text-base`}>{status}</p>
        </div>

        <div className="grid grid-cols-1">
            <button onClick={()=>makeAdminHandler(_id)} className="bg-primary text-sm text-neutral shadow-lg p-[6px] hover:bg-[#ff1c68] transition-all capitalize rounded">
              এডমিন করুন
            </button>
            <button onClick={()=>userDeleteHandler(_id)} className="bg-primary  text-sm text-neutral shadow-lg p-[6px] mt-4 hover:bg-[#ff1c68] transition-all capitalize rounded">
              মুছে ফেলুন
            </button>
        </div>
    </div>
</div>
}
export default UsersCard;
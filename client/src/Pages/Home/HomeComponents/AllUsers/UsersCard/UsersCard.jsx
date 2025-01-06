import Loader from "../../../../../Componnents/Shared/Loader/Loader";

const UsersCard = ({user,loading,reFetch}) => {
  const {name,email,status,_id} = user;
  const makeAdminHandler = async (id) => {
    console.log(id);
  }

  const userDeleteHandler = async (id) => {
    console.log(id);
  }
  if(loading) return <Loader />
    return <div className="w-[95%] md:w-[600px] shadow-lg">
    <div className="flex border border-primary items-center justify-between p-3 ">
        <div className="font-poppins">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{email}</p>
            <p className=" capitalize text-primary text-base">{status}</p>
        </div>

        <div className="grid grid-cols-1">
            <button onClick={()=>makeAdminHandler(_id)} className="bg-primary py-[2px] text-sm text-neutral shadow-lg px-2 hover:bg-[#ff1c68] transition-all capitalize rounded">
              এডমিন করুন
            </button>
            <button onClick={()=>userDeleteHandler(_id)} className="bg-primary py-[2px] text-sm text-neutral shadow-lg px-2 mt-4 hover:bg-[#ff1c68] transition-all capitalize rounded">
              মুছে ফেলুন
            </button>
        </div>
    </div>
</div>
}
export default UsersCard;
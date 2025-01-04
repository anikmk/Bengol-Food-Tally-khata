import { Link } from "react-router-dom";

const Card = ({signleDebts}) => {
    const {name,address,phone,balance,_id} = signleDebts;
    console.log(signleDebts);

    return <Link to={`/debtsDetailsPage?id=${_id}`}>
    <div className="w-[300px] md:w-[600px] shadow-lg relative">

<div className='absolute top-0 left-0 bg-primary w-8 h-[3px]'></div>
<div className='absolute top-0 left-0 bg-primary w-[6px] h-[24px]'></div>
<div className='right-0 bottom-0 bg-primary absolute w-8 h-[3px]'></div>
<div className='right-0 bottom-0 bg-primary absolute w-[6px] h-[24px]'></div>
<div className="flex justify-between py-2 px-3 gap-14">
    <div>
        <h3 className="text-base font-semibold uppercase font-poppins">{name}</h3>
        <p className="text-sm text-gray-600 capitalize font-poppins">{address}</p>
        <p className="text-sm text-gray-500 mt-1 font-poppins">
         {phone}
        </p>
    </div>

    <div>
        <p className="text-lg font-semibold text-gray-800">
          {balance} টাকা
        </p>
        <button className="mt-2 text-red-600 hover:underline">
          Remove
        </button>
    </div>
</div>
</div>
    
    </Link>
}
export default Card;
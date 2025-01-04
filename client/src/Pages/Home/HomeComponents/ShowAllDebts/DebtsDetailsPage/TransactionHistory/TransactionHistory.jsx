import Loader from "../../../../../../Componnents/Shared/Loader/Loader";

const TransactionHistory = ({history,index,loading}) => {
    const {name,formattedDate,backMoney,moreMoney} = history;
    if(loading) return <Loader />
    return <>
    <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b font-poppins text-sm md:text-base">{index}</td>
                <td className="py-4 px-6 border-b uppercase font-poppins text-sm md:text-base">{name}</td>
                <td className="py-4 px-6 border-b font-poppins text-sm md:text-base">{formattedDate}</td>
                <td className="py-4 px-6 border-b font-poppins text-sm md:text-base">{backMoney || moreMoney} টাকা</td>
                <td className="py-4 px-6 border-b">
                {moreMoney && <div className="text-primary">ঋণ নিলেন</div> || backMoney && <div className="text-green-500">ঋণ দিলেন</div>}
                </td>
            </tr>
    </>
}

export default TransactionHistory;
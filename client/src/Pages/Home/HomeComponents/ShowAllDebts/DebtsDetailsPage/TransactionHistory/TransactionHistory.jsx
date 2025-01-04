import Loader from "../../../../../../Componnents/Shared/Loader/Loader";

const TransactionHistory = ({history,index,loading}) => {
    console.log(history);
    const {name,formattedDate,backMoney,moreMoney} = history;
    if(loading) return <Loader />
    return <>
    <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b">{index}</td>
                <td className="py-4 px-6 border-b">{name}</td>
                <td className="py-4 px-6 border-b">{formattedDate}</td>
                <td className="py-4 px-6 border-b">{backMoney || moreMoney} টাকা</td>
                <td className="py-4 px-6 border-b">
                {moreMoney && "ঋণ নিলেন" || backMoney && "ঋণ দিলেন"}
                </td>
            </tr>
    </>
}

export default TransactionHistory;
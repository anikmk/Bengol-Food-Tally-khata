const Card = () => {
    return <div className="w-[300px] md:w-[600px] shadow-lg relative">

        <div className='absolute top-0 left-0 bg-primary w-8 h-[3px]'></div>
        <div className='absolute top-0 left-0 bg-primary w-[6px] h-[24px]'></div>
        <div className='right-0 bottom-0 bg-primary absolute w-8 h-[3px]'></div>
        <div className='right-0 bottom-0 bg-primary absolute w-[6px] h-[24px]'></div>
        <div className="flex justify-between p-4 gap-14">
            <div>
                <h3 className="text-lg font-bold">debts name</h3>
                <p className="text-sm text-gray-600">village</p>
                <p className="text-sm text-gray-500 mt-1">
                 phone
                </p>
            </div>

            <div>
                <p className="text-lg font-semibold text-gray-800">
                  total taka
                </p>
                <button className="mt-2 text-red-600 hover:underline">
                  Remove
                </button>
            </div>
        </div>
    </div>
}
export default Card;
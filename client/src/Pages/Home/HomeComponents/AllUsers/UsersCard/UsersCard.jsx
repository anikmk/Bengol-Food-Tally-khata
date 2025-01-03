const UsersCard = () => {
    return <div className="w-[300px] md:w-[600px]">
    <div className="flex border justify-between p-4 gap-14">
        <div>
            <h3 className="text-lg font-bold">user name</h3>
            <p className="text-sm text-gray-600">email</p>
            <p className="text-sm text-gray-600">status</p>
        </div>

        <div>
            <p className="text-lg font-semibold text-gray-800">
              Make Admin
            </p>
            <button className="mt-2 text-red-600 hover:underline">
              Remove
            </button>
        </div>
    </div>
</div>
}
export default UsersCard;
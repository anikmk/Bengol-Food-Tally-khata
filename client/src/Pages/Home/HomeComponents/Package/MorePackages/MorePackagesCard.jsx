import { Link } from "react-router-dom";
import Loader from "../../../../../Componnents/Shared/Loader/Loader";

const MorePackagesCard = ({ item, loading }) => {

    if (loading) return <Loader />;

    return (
        <div             
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-all duration-300"
        >
            <img
                src={item?.childrenPackage?.[0]?.childrenPackageImg || ""}
                alt={item?.childrenPackage?.[0]?.childrenPackageName || ""}
                className="w-full h-36 object-cover rounded-xl"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">
                {item?.numberOfPeople} জনের জন্য
            </h3>
            <p className="text-sm text-gray-600 mt-2">
                {item?.childrenPackage?.[0]?.childrenPackageDescriptionSmall || ""}
            </p>
            <p className="text-xs text-gray-600 mt-2">
                {item?.childrenPackage?.[0]?.childrenPackageDescriptionLarge || ""}
            </p>
            <p className="text-base font-bold text-gray-700 mt-2">
                মূল্য: {item?.childrenPackage?.[0]?.childrenPackagePrice || 0} টাকা
            </p>
            <Link to={`/packageOrderInfoForm/?packageName=${item?.childrenPackage?.[0]?.childrenPackageName}&numberOfPeople=${item?.numberOfPeople}&packagePrice=${item?.childrenPackage?.[0]?.childrenPackagePrice}&description=${item?.childrenPackage?.[0]?.childrenPackageDescriptionSmall}`}> 
            <button className="mt-4 w-full bg-primary text-white py-2 rounded-xl hover:bg-[rgb(243,31,102)] transition">
                এখুনি অর্ডার করুন
            </button>
            </Link>
        </div>
    );
};

export default MorePackagesCard;

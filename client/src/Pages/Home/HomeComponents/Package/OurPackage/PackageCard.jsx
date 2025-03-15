import { FaCartPlus } from "react-icons/fa";
import Loader from "../../../../../Componnents/Shared/Loader/Loader";
import { Link } from "react-router-dom";
const PackageCard = ({item,loading}) => {
  console.log(item);
        const {packageName,packageImg,packageDes,_id} = item;
        console.log(_id);
        if(loading) return <Loader />
    return <>
    <div
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={packageImg}
                  alt={"pkg.name"}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-primary mb-2">
                    {packageName}
                  </h2>
                  <p className="text-gray-600 mb-3">{packageDes}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-secondary">
                      {"pkg.price"}
                    </span>
                    <Link to={`/morePackagesForWedding/?id=${_id}`}>
                    <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-secondary transition">
                      <FaCartPlus /> বিস্তারিত
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
    </>
}
export default PackageCard;
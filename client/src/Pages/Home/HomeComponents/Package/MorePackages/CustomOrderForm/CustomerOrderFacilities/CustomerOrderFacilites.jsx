import { IoReload } from "react-icons/io5";
import { MdDownloadDone } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
const CustomerOrderFacilites = () => {
    return <>
     <div className="space-y-3">
           <div className="flex items-center gap-3">
            <MdDownloadDone />
            <span>মিনিমাম দুই দিন পূর্বে অর্ডার কনফার্ম করে বুঝে নিবেন।</span>
          </div>
           <div className="flex items-center gap-3">
            <MdDownloadDone />
            <span>সেরা মানের খাবারের নিশ্চয়তা</span>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineDeliveryDining />
            <span>আপনার পছন্দমতো খাবার দ্রুত ডেলিভারি</span>
          </div>
          <div className="flex items-center gap-3">
            <CiDiscount1 />
            <span>বিশেষ উৎসবের জন্য বিশেষ ডিসকাউন্ট</span>
          </div>
          <div className="flex items-center gap-3">
            <IoReload />
            <span>অর্ডার করা খাবার রিটার্ন নেওয়া হবে না</span>
          </div>
           </div>
    </>
}
export default CustomerOrderFacilites;
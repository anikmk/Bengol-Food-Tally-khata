const Share = () => {
    return <>
    <tr>
            <td colSpan="5" className="text-center p-5">
            <div className="flex items-center justify-center gap-4">
            <div className="bg-primary py-[5px] text-base text-neutral shadow-lg px-4 mt-2 inline-block rounded-full hover:bg-[#ff1c68] transition-all cursor-pointer">শেয়ার করুন</div>
            <div className="bg-primary py-[5px] text-base text-neutral shadow-lg px-4 mt-2 inline-block rounded-full hover:bg-[#ff1c68] transition-all cursor-pointer">ডাউনলোড করুন</div>
            </div>
            </td> {/* Total cell, full width */}
        </tr>
    </>
}
export default Share;
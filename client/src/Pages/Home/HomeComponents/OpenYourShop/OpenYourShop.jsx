

import { useState } from "react";
import img from "../../../../assets/img/fast2.jpeg";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Load from "../../../../Componnents/Shared/Loader/load/Load";
const OpenYourShop = () => {
    const [shopName,setShopName] = useState('')
    const [shopAdress,setShopAdress] = useState('')
    const [shopNumber,setShopNumber] = useState('')
    const [shopGmail,setShopGmail] = useState('')
    const [backgroundImg, setBackgroundImg] = useState(img); 
    const handleImg = (e) => {
      const file = e.target.files[0]; 
      if (file) {
        setBackgroundImg(URL.createObjectURL(file)); 
      }
    };
 

    // hanldeCreateShop
    const hanldeCreateShop = (e) => {
        e.preventDefault();
        const form = e.target;
        const shopBanner = form.shopBanner.files[0];
        const shopName = form.shopName.value;
        const shopAdress = form.shopAdress.value;
        const ownerGmail = form.ownerGmail.value;
        const ownerNumber = form.ownerNumber.value;
        const shopInfo = {shopBanner,shopName,shopAdress,ownerGmail,ownerNumber}
        console.log(shopInfo);
    }

    // set shop shopInfo
    const handleSetName = (e) => {
        setShopName(e.target.value)
    }
    const handleSetAdress = (e) => {
        setShopAdress(e.target.value)
    }
    const handleSetGmail = (e) => {
        setShopGmail(e.target.value)
    }
    const handleSetNumber = (e) => {
        setShopNumber(e.target.value)
    }
    return <div>
                <div 
                    className="hero"
                    style={{
                      backgroundImage: `url(${backgroundImg})`,
                      backgroundSize: "cover", 
                      backgroundPosition: "center",
                    }}
                  >
                   <div className="hero-overlay bg-slate-900 bg-opacity-80"></div>
                   <div className="hero-content text-center">
                     <div className="md:w-[500px]">
                     
                       <div>
                       <h1 className="mb-5 text-2xl md:text-4xl font-acme bg-gradient-to-r from-primary via-green-400 to-primary inline-block text-transparent bg-clip-text">{shopName}</h1>
                       <p className="text-sm text-neutral mb-5">{shopAdress} </p>
                       <div className="text-neutral flex items-center gap-4 justify-center">
                        <div className="flex items-center justify-center gap-2">
                        <div><FaPhoneVolume /> </div>
                        <div>{shopNumber}</div>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2">
                        <div><BiLogoGmail /> </div>
                        <div>{shopGmail}</div>
                        </div>
                       </div>
                       

                       {/* user create shop form field */}
                        <div className="text-neutral border border-primary mt-5 p-4">
                        <form onSubmit={hanldeCreateShop}> 

                        <div className='w-full mb-2'>
                        <h3 className="mb-2 text-[15px]"> ব্যানার এর জন্য দোকানের ছবি দিন</h3>
                        <input onChange={handleImg} name="shopBanner" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="file" placeholder='সদ্য তুলা দোকানের ছবি দিন' required/>
                        </div>
                        <div className='w-full mb-2'>
                        <h3 className="mb-2 text-[15px]">আপনার দোকানের নাম দিন</h3>
                        <input onChange={handleSetName} name="shopName" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='যেমনঃ ---ভেরাইটিজ ষ্টোর---' required/>
                        </div>
                        <div className='w-full mb-2'>
                        <h3 className="mb-2 text-[15px]">আপনার দোকানের ঠিকানা দিন</h3>
                        <input onChange={handleSetAdress} name="shopAdress" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='যেমনঃ মৌল্ভীবাজার রাজনাগার---' required/>
                        </div>
                        <div className='w-full mb-2'>
                        <h3 className="mb-2 text-[15px]">আপনার নম্বর দিন</h3>
                        <input onChange={handleSetNumber} name="ownerNumber" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="tel" placeholder='বর্তমান ব্যবহৃত মোবাইল নম্বর দিন---' required/>
                        </div>
                        <div className='w-full mb-2'>
                        <h3 className="mb-2 text-[15px]">আপনার জিমেইন দিন</h3>
                        <input onChange={handleSetGmail} name="ownerGmail" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="email" placeholder='এখানে আপনার সঠিক জিমেইন দিন---' required/>
                        </div>
                        <div className="w-full p-2 text-neutral text-center bg-primary rounded font-medium">
                        {/* <button>{loading ? <Load />:"পাওনাদারকে জমা করুন"}</button> */}
                        <button>আপনার দোকান খুলুন</button>
                        </div>
                        </form>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
    </div>
}
export default OpenYourShop;
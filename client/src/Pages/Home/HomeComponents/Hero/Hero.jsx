import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
import img from "../../../../assets/img/42159.jpg";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../../../Componnents/Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { getSingleUser } from "../../../../Api/userRelatedApi/userApi";
const Hero = () => {
  const {user,loading} = useAuth();
  const {data:dbUser,isLoading} = useQuery({
    queryKey:[user?.email,"dbUser"],
    queryFn:async()=>await getSingleUser(user?.email)
  })
  const [text] = useTypewriter({
    words: [ "অনিক কনফেকশন বেঙ্গল ফুড",
      "প্রোঃ অর্জুন মল্লিক",
      "স্থানঃ রাজনগর উপজেলার সামনে",
      "স্বাদের অঙ্গীকার, প্রতিটি কামড়ে",],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 90,
  })

  if(loading || isLoading) return <Loader />
    return <>
      <div
            className="hero h-96"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className="hero-overlay bg-slate-900 bg-opacity-80"></div>
            <div className="hero-content text-center">
              <div className="md:w-[550px]">
                {/* sociol sign up */}
                <div>
                <h1 className="mb-5 text-3xl md:text-4xl font-acme bg-gradient-to-r from-primary via-green-400 to-primary inline-block text-transparent bg-clip-text">{text}</h1>
                <Cursor cursorColor='white' />
                <p className="text-sm text-neutral mb-5">✨ মোবাইল ফোন দিয়ে নিমিষেই দোকানের সব হিসাব-নিকাশ সহজে করুন। </p>
                <div className="flex items-center justify-center gap-5 md:gap-8">
                  {
                    dbUser?.status === "admin" ? <><div onClick={''} className="md:text-xl text-base p-[6px] rounded cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l  from-primary to-green-800 text-neutral"><Link to={'/dashboard/addDebts'}>পাওনাদার যুক্ত করুন</Link></div>  <div className="md:text-xl text-base p-[6px] rounded cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l  from-green-800 to-primary text-neutral"><Link to={'/dashboard/showAlldebts'}>পাওনাদার দেখুন</Link></div></>:<>
                    {
                      user ? <><div className="md:text-xl text-base p-[6px] rounded cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l  from-green-800 to-primary text-neutral"><Link to={'/OrderFastFood'}>অর্ডার করুন</Link></div></>:<><div className="md:text-xl text-base p-[6px] rounded cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l  from-green-800 to-primary text-neutral"><Link to={'/signUp'}>রেজিস্ট্রেশন করুন</Link></div></>
                    }
                    </>
                  }
                </div>
               
                </div>
              </div>
            </div>
          </div>
    </>
}
export default Hero;
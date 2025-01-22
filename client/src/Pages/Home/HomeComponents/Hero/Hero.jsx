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
  if(loading || isLoading) return <Loader />
    return <>
      <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className="hero-overlay bg-slate-900 bg-opacity-80"></div>
            <div className="hero-content text-center">
              <div className="md:w-[500px]">
                {/* sociol sign up */}
                <div>
                <h1 className="mb-5 text-2xl md:text-4xl font-acme bg-gradient-to-r from-primary via-green-400 to-primary inline-block text-transparent bg-clip-text">রাজনগর বেঙ্গল ফুড আপনার বিশ্বস্ত দোকান</h1>
                <p className="text-sm text-neutral mb-5">মোঠো ফোন দিয়ে নিমিশেই দোকানের যাবতীয় হিসাব নিকাশ রাখুন </p>
                <div className="flex items-center justify-center gap-5 md:gap-8">
                  {
                    dbUser?.status === "admin" ? <><div onClick={''} className="md:text-xl text-base p-[6px] rounded cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l  from-primary to-green-800 text-neutral"><Link to={'/dashboard/addDebts'}>পাওনাদার যুক্ত করুন</Link></div>  <div className="md:text-xl text-base p-[6px] rounded cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l  from-green-800 to-primary text-neutral"><Link to={'/dashboard/showAlldebts'}>পাওনাদার দেখুন</Link></div></>:<>
                    {
                      user ? <><div className="md:text-xl text-base p-[6px] rounded cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l  from-green-800 to-primary text-neutral"><Link to={'/OrderFastFood'}>order করুন</Link></div></>:<><div className="md:text-xl text-base p-[6px] rounded cursor-pointer bg-gradient-to-r hover:bg-gradient-to-l  from-green-800 to-primary text-neutral"><Link to={'/signUp'}>রেজিস্ট্রেশন করুন</Link></div></>
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
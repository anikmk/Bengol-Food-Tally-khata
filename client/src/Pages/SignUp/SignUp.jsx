import img from "../../assets/img/77645.jpg";
import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { FaLock, FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { postUser } from "../../Api/userRelatedApi/userApi";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const {createUser,signInGoogle} = useAuth();
    const [theLock,setTheLock] = useState();
    const [showPassword,setShowPassword] = useState(false);
    const [termsAndCondition,setTermsAndCondition] = useState(false);
    
    const handleSignUp = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userData = {name,email,status:'user'}
        if(password.length < 6 ){
          return toast.error('ছয়টি সংখ্যার পাসওয়ার্ড দিতে হবে')
        }
        if(!termsAndCondition) {
          return toast.error('চেক বক্সে ক্লিক করেন নাই')
        }
        // new user create
        try{
          const result = await createUser(email,password)
          if(result?.user){
            const result = await postUser(userData);
            if(result?.insertedId){
              toast.success("ধন্যবাদ আপনার রেজিস্ট্রেশন সম্পুর্ন হয়েছে।")
              navigate(from, { replace: true });
            }
          }  
        }
        catch(err){
          toast.error('নেটওয়ার্ক সমস্যা কিচ্ছুক্ষণ পর চেষ্টা করুন।')
        }
    }
    // sign un with google
    const handleSignInWithGoogle = async() => {
     try{
      const result = await signInGoogle();
      if(result?.user){
        const userData = {
          name:result?.user?.displayName,
          email:result?.user?.email,
          status:'user'
        }
        const dbResult = await postUser(userData);
        if(dbResult?.insertedId){
          toast.success('ধন্যবাদ গুগল আপনার রেজিস্ট্রেশন সম্পুর্ন হয়েছে।')
          navigate(from, { replace: true });
        }
      }
     } 
     catch(err){
      toast.error('নেটওয়ার্ক সমস্যা কিচ্ছুক্ষণ পর চেষ্টা করুন।')
    }
    }
    const handleTypePassword = (e) => {
        setTheLock(e.target.value.length)
    }
    const hanldeShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleChecked = (e) => {
      setTermsAndCondition(e.target.checked)
    }
  return (
    <>
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
            <h1 className="mb-10 text-4xl font-acme text-primary">রেজিস্ট্রেশন করুন !</h1>
            <div className="flex items-center justify-center gap-8 mb-8">
              <div onClick={handleSignInWithGoogle} className="text-3xl bg-white p-[6px] rounded-full cursor-pointer"><FcGoogle /></div>
              <div className="text-3xl bg-white p-[6px] rounded-full cursor-pointer"><FaFacebook /></div>
            </div>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="space-y-5 font-medium text-white">
              <label className="input input-bordered flex items-center gap-2 bg-[#7e7c7c36]">
                  <FaUser className="text-primary" />
                  <input type="text" name="name" placeholder="আপনার নাম দিন" />
                </label>
                <label className="input input-bordered w-full flex items-center gap-2 bg-[#7e7c7c36]">
                  <MdEmail className="text-primary"/>
                  <input type="email" name="email" placeholder="ইমেইল দিন" />
                </label>
                <label className="input input-bordered relative flex items-center gap-2 bg-[#7e7c7c36]">
                  <IoKey className="text-primary"/>
                  <input onChange={handleTypePassword} name="password" type={`${showPassword ? "text":"password"}`} className="" placeholder="শক্তিশালী পাসওয়ার্ড দিন" />
                    {
                      showPassword ? <div><FaUnlock onClick={hanldeShowPassword} className="text-white absolute top-4 right-4 cursor-pointer"/></div>:<div>
                      {theLock >= 6 ? <FaLock onClick={hanldeShowPassword} className="text-white absolute top-4 right-4 cursor-pointer"/>: ''}
                    </div>
                    }
                </label>
                <div className="flex items-center justify-between gap-2">
                <div className="flex md:items-center md:gap-4 gap-2 text-xs md:text-base">
                <input onChange={handleChecked} type="checkbox" className="checkbox checkbox-warning checkbox-xs" /> 
                <p className="text-neutral font-poppins">Check term and conditions</p>
                </div>
                <div>
                  <p className="text-neutral font-poppins md:text-xs">Have an Account! <Link to='/signIn' className="text-primary hover:underline font-bold">Login</Link></p>
                </div>
                </div>
                <button className="bg-primary py-[8px] text-base text-neutral shadow-lg mt-4 w-full rounded-full hover:bg-[#ff1c68] transition-all">সাইন আপ করুন</button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

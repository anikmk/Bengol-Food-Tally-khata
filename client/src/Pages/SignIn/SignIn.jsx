import img from "../../assets/img/77645.jpg";
import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const SignIn = () => {
  const navigate = useNavigate();
    const {signIn,signInGoogle} = useAuth();
    const [theLock,setTheLock] = useState();
    const [showPassword,setShowPassword] = useState(false);
    const [termsAndCondition,setTermsAndCondition] = useState(false);
    
    const handleSignIn = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,password.length,email)
        if(password.length < 6 ){
          return toast.error('Password must be at least six char')
        }
        if(!termsAndCondition) {
          return toast.error('Please check terms & condition')
        }
        // sign in user
        try{
          const result = await signIn(email,password)
          if(result?.user){
            toast.success('Sign up successfully!')
            navigate('/')
          }  
        }
        catch(err){
          toast.error(err.message)
        }
    }
    // sign in with google
    const handleSignInWithGoogle = async() => {
     try{
      const result = signInGoogle();
      if(result?.user){
      toast.success('Sign up successfully!')
      navigate('/')
      }
     } 
     catch(err){
      toast.error(err.message)
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
            <h1 className="mb-10 text-2xl md:text-4xl font-acme text-primary">আগের ইমেইল পাসওয়ার্ড দিন!</h1>
            <div className="flex items-center justify-center gap-8 mb-8">
              <div onClick={handleSignInWithGoogle} className="text-3xl bg-white p-[6px] rounded-full cursor-pointer"><FcGoogle /></div>
              <div className="text-3xl bg-white p-[6px] rounded-full cursor-pointer"><FaFacebook /></div>
            </div>
            </div>
            <form onSubmit={handleSignIn}>
              <div className="space-y-5 font-medium text-white">
                <label className="input input-bordered w-full flex items-center gap-2 bg-[#7e7c7c36]">
                  <MdEmail className="text-primary"/>
                  <input type="email" name="email" placeholder="আগের ইমেইল দিন" />
                </label>
                <label className="input input-bordered relative flex items-center gap-2 bg-[#7e7c7c36]">
                  <IoKey className="text-primary"/>
                  <input onChange={handleTypePassword} name="password" type={`${showPassword ? "text":"password"}`} className="" placeholder="আগের পাসওয়ার্ড দিন" />
                    {
                      showPassword ? <div><FaUnlock onClick={hanldeShowPassword} className="text-white absolute top-4 right-4 cursor-pointer"/></div>:<div>
                      {theLock >= 6 ? <FaLock onClick={hanldeShowPassword} className="text-white absolute top-4 right-4 cursor-pointer"/>: ''}
                    </div>
                    }
                </label>
                <div className="flex items-center justify-between">
                <div className="flex md:items-center md:gap-4 text-sm md:text-base">
                <input onChange={handleChecked} type="checkbox" className="checkbox checkbox-warning checkbox-xs" /> 
                <p className="text-neutral font-poppins">Check term and conditions</p>
                </div>
                <div>
                  <p className="text-neutral font-poppins">Have an Account! <Link to='/signUp' className="text-primary hover:underline font-bold">Sign Up</Link></p>
                </div>
                </div>
                <button>সাইন ইন করুন</button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

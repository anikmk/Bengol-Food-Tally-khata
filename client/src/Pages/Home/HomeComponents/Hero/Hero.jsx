import { Link } from "react-router-dom";
import img from "../../../../assets/img/42159.jpg";
const Hero = () => {
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
                  <div onClick={''} className="md:text-xl text-base p-[6px] rounded cursor-pointer bg-gradient-to-r from-primary to-green-800 text-neutral"><Link>মালিক সম্পর্কে জানুন</Link></div>
                  <div className="md:text-xl text-base p-[6px] rounded cursor-pointer bg-gradient-to-r from-green-800 to-primary text-neutral"><Link>ম্যানেজার সম্পর্কে জানুন</Link></div>
                </div>
                </div>
              </div>
            </div>
          </div>
    </>
}
export default Hero;
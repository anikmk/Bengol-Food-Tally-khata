
import { Link } from "react-router-dom";
import Hero from "./HomeComponents/Hero/Hero";
import LatestFood from "./HomeComponents/LatestFood/LatestFood";
import About from "./HomeComponents/AboutPage/About";
import ContactSection from "./HomeComponents/ContactSection/ContactSection";

const Home = () => {
    return (

        <>
        <Hero />
        <div className="w-full md:w-[70%] bg-primary mx-auto rounded-b-xl p-2 text-xl text-neutral"> <marquee behavior="" direction="">
        🍴 বিশেষ অনুষ্ঠান? আমাদের সাথে থাকুন! 🍴 বিয়ে, জন্মদিন, বা যেকোনো বিশেষ আয়োজনের জন্য মিষ্টি,ধই,সিংকারা,চমচা,অর্ডার নেই। অর্ডার করতে 👉 <Link className=" bg-neutral text-primary rounded-md shadow p-[4px]" to={"/comboPackage"}>ক্লিক করুন</Link>। সরাসরি কথা বলতে বা আরও জানতে 👉 <Link className=" bg-neutral text-primary rounded-md shadow p-[4px]" to={"/contactUs"}>ক্লিক করুন</Link> । আপনার প্রতিটি মুহূর্তকে মধুর করতে আমরা সর্বদা প্রস্তুত! ✨
        </marquee> </div>
        <LatestFood />

        <About />
        <ContactSection />
        </>
    );
};

export default Home;
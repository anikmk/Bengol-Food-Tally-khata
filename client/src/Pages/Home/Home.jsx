
import { Link } from "react-router-dom";
import Hero from "./HomeComponents/Hero/Hero";
import LatestFood from "./HomeComponents/LatestFood/LatestFood";
import About from "./HomeComponents/AboutPage/About";
import ContactSection from "./HomeComponents/ContactSection/ContactSection";
import ServicesSection from "./HomeComponents/OurServices/Services";
import CustomOrder from "./HomeComponents/CustomOrder/CustomOrder";
import OurPackage from "./HomeComponents/Package/OurPackage/OurPackage";
import { Helmet } from "react-helmet";

const Home = () => {
    return (

        <>
        <Helmet>
        <title>Home - Anik Confectionery</title>
        <meta name="description" content="Welcome to Anik Confectionery. Explore our variety of Bengali food products and services for special events like weddings, birthdays, and more!" />
        <meta name="keywords" content="Anik Confectionery, Bengali food, sweets, cakes, events" />
        <meta name="author" content="Anik Confectionery" />
      </Helmet>
        <Hero />
        <div className="w-full md:w-[70%] bg-primary mx-auto rounded-b-xl p-2 text-xl text-neutral"> <marquee  direction="">
        🍴 বিশেষ অনুষ্ঠান? আমাদের সাথে থাকুন! 🍴 বিয়ে, জন্মদিন, বা যেকোনো বিশেষ আয়োজনের জন্য মিষ্টি,ধই,সিংকারা,চমচা,অর্ডার নেই। অর্ডার করতে 👉 <Link className=" bg-neutral text-primary rounded-md shadow p-[4px]" to={"/comboPackage"}>ক্লিক করুন</Link>। সরাসরি কথা বলতে বা আরও জানতে 👉 <Link className=" bg-neutral text-primary rounded-md shadow p-[4px]" to={"/contactUs"}>ক্লিক করুন</Link> ।  জন্মদিনের কেক অর্ডার করতে <Link to={"/birthdayCakeCategory"}>ক্লিক করুন</Link>আপনার প্রতিটি মুহূর্তকে মধুর করতে আমরা সর্বদা প্রস্তুত! ✨
        </marquee> </div>
        <LatestFood />
        <OurPackage />
        <CustomOrder />
        <ServicesSection />
        <About />
        <ContactSection />
        </>
    );
};

export default Home;
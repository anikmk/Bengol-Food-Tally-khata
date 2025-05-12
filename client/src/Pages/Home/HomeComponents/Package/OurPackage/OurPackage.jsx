import { useEffect } from "react";
import { getAllPackages } from "../../../../../Api/PackageRelatedApi/packageApi";
import Container from "../../../../../Componnents/Shared/Container/Container";
import Heading from "../../../../../Componnents/Shared/Heading/Heading";
import PackageCard from "./PackageCard";
import { useQuery } from "@tanstack/react-query";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurPackage = () => {
  const { data: packages, isLoading } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => await getAllPackages(),
  });

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="pb-14 bg-white">
        <Container>
        <Heading
          heading={"আমাদের প্যাকেজ"}
          subHeading={"আপনার বিশেষ দিনের জন্য সেরা প্যাকেজটি বেছে নিন।"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
          {packages?.map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={`${idx * 100}`} // একটার পর একটা delay দিয়ে আসবে
            >
              <PackageCard item={item} loading={isLoading} />
            </div>
          ))}
        </div>
    </Container>
      </div>
  );
};

export default OurPackage;

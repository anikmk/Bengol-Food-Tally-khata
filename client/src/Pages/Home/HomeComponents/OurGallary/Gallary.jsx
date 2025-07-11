import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Container from "../../../../Componnents/Shared/Container/Container";
import Heading from "../../../../Componnents/Shared/Heading/Heading";

const Gallary = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const galleryImages = [
    "/gallary (2).jpg",
    "/gallary (4).jpg",
    "/gallary.jpg",
    "/gallary (3).jpg",
    "/gallary (5).jpg",
    "/gallary (6).jpg",
  ];

  return (
    <Container>
      <div>
        <Heading
          heading={"আমাদের গ্যালারি"}
          subHeading={"ছবিতে আমাদের সেরা মুহূর্তগুলো"}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                className="h-full w-full object-cover group-hover:scale-105 group-hover:brightness-90 transition duration-300 ease-in-out"
                src={src}
                alt={`gallery-${index}`}
                loading="lazy"
              />
              {/* Optional overlay text/icon */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <Link to={'/about'}><span className="text-white text-sm md:text-lg font-semibold">🔍 দেখুন</span></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Gallary;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

  const galleryImages = [ "/gallary (2).jpg","/gallary (4).jpg","/gallary.jpg","/gallary (3).jpg","gallary (5).jpg","/gallary (6).jpg",];

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
              className="md:h-80 h-48"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // প্রতিটি ছবির জন্য ডিলে
            >
              <img className="h-full w-full rounded" src={src} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Gallary;

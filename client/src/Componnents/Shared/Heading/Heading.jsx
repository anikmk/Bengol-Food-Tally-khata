/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heading = ({ heading, subHeading, center }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false, // প্রতিবার স্ক্রলে অ্যানিমেশন হবে
      easing: 'ease-in-out',
      offset: 100, // ভিউপোর্টে ঢোকার আগেই শুরু হবে অ্যানিমেশন
    });
  }, []);

  return (
    <div className={`py-10 ${center ? 'text-center' : ''}`}>
      <div>
        <h4
          className="md:text-xl text-sm mb-2 text-gray-500"
          data-aos="fade-right"
          data-aos-delay="30"
        >
          {subHeading}
        </h4>
        <h2
          className="lg:text-5xl md:text-4xl text-2xl font-bold text-gray-800"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default Heading;

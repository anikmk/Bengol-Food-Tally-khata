import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Image Section */}
          <div data-aos="fade-right">
            <img
              src="./contact.png"
              alt="Contact Us"
              className="rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div data-aos="fade-left">
            <h2
              className="text-3xl font-bold mb-4 text-primary"
              data-aos="fade-up"
            >
              আমাদের সাথে যোগাযোগ করুন
            </h2>
            <p
              className="text-base-700 mb-12 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              আপনি যদি আমাদের সেবাগুলোর সম্পর্কে আরও জানতে চান, অর্ডার দিতে চান বা 
              যেকোনো প্রশ্ন থাকে, তাহলে আমাদের সাথে যোগাযোগ করুন। আমরা সবসময় আপনাকে সাহায্য করতে প্রস্তুত।
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-slate-500 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              বিস্তারিত জানতে ক্লিক করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

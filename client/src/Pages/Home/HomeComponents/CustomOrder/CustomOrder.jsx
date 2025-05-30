import { Link } from "react-router-dom";
import { GiStairsCake } from "react-icons/gi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomOrder = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div data-aos="fade-right">
              <img
                src="./package.png"
                alt="About Us"
                className="rounded-lg"
              />
            </div>

            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-primary mb-4" data-aos="fade-up" data-aos-delay="100">
                প্যাকেজ অর্ডার করুন
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                বিবাহ, জন্মদিন, বিশেষদিন এর জন্য আপনার প্রয়োজন অনুযায়ী অর্ডার করুন! আপনি জন্মদিন, বিবাহ, বা যেকোনো বিশেষ দিনের জন্য খাবারের প্যাকেজ অর্ডার করতে পারবেন।
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                ✨ আপনার সুবিধাগুলো:
              </p>

              <ul className="mb-5" data-aos="fade-up" data-aos-delay="400">
                <li>✔️ নিজের পছন্দমতো খাবার বাছাই করুন</li>
                <li>✔️ নির্দিষ্ট দিনের জন্য অগ্রিম অর্ডার করুন</li>
                <li>✔️ সেরা মানের খাবার ও সময়মতো ডেলিভারি</li>
              </ul>

              <p data-aos="fade-up" data-aos-delay="500">
                🎉 অর্ডার করতে নিচের বিস্তারিত দেখুন বাটনে ক্লিক করুন এবং সহজেই ফর্ম পূরণ করে আপনার পছন্দের প্যাকেজ নিশ্চিত করুন!
              </p>
              <p className="mt-3" data-aos="fade-up" data-aos-delay="600">
                🎂 তাছাড়া আপনার জন্মদিনের কেক পছন্দ করে অর্ডার করতে নিচের বার্থডে কেক অর্ডার বাটন এ ক্লিক করুন
              </p>

              <div className="mt-5" data-aos="zoom-in-up" data-aos-delay="700">
                <div className="flex items-center gap-4">
                  <Link
                    to="/customPackageOrderForm"
                    className="bg-primary text-white px-6 mt-8 py-3 rounded-md shadow hover:bg-secondary transition"
                  >
                    বিস্তারিত জানুন
                  </Link>
                  <Link
                    to="/birthdayCakeCategory"
                    className="bg-primary text-white px-6 mt-8 py-3 rounded-md shadow hover:bg-secondary transition"
                  >
                    <div className="flex items-center gap-2">
                      <GiStairsCake />
                      <span>বার্থডে কেক</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomOrder;

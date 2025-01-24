
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              আমাদের সম্পর্কে জানুন
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              আমরা ঐতিহ্যবাহী বাংলা খাবারের স্বাদ এবং গুণগত মান বজায় রেখে আপনাদের সেবা দিয়ে যাচ্ছি। 
              বিশেষ দিনে যেমন জন্মদিন, বিয়ে বা যেকোনো অনুষ্ঠানে আমাদের খাবার আপনাকে এবং 
              আপনার অতিথিদের মন জয় করবে।
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              আমাদের ফুড ডেলিভারি সেবার মাধ্যমে আপনি ঘরে বসে আপনার পছন্দের খাবার পেতে পারেন। 
              দ্রুত এবং নিরাপদ ডেলিভারি সেবা নিশ্চিত করার জন্য আমরা প্রতিজ্ঞাবদ্ধ।
            </p>
            <Link 
              to="/about" 
              className="bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-secondary transition"
            >
              বিস্তারিত জানুন
            </Link>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

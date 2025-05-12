import { Helmet } from "react-helmet";
import { FaPhoneVolume } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Helmet>
        <title>যোগাযোগ করুন | Anik Confectionery</title>
        <meta name="description" content="যোগাযোগ করুন আমাদের সাথে। আপনার নাম, ইমেইল এবং বার্তা পাঠিয়ে দিন অথবা আমাদের হেল্পলাইন নাম্বারে কল করুন।" />
        <meta name="keywords" content="যোগাযোগ, কাস্টমার সার্ভিস, হেল্পলাইন, ইমেইল, ফোন নাম্বার" />
      </Helmet>
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-4xl font-bold text-primary mb-8">
          যোগাযোগ করুন
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed">
          আপনি আমাদের সাথে যোগাযোগ করতে চাইলে নিচের ফর্মটি পূরণ করুন বা সরাসরি আমাদের হেল্পলাইন নাম্বারে কল করুন।
        </p>

        {/* Contact Form */}
        <form className="bg-white shadow-xl rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                আপনার নাম
              </label>
              <input
                type="text"
                className="w-full border border-pink-300 hover:shadow-md rounded-lg  p-3"
                placeholder="আপনার নাম লিখুন"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                আপনার ইমেইল
              </label>
              <input
                type="email"
                className="w-full border border-pink-300 hover:shadow-md rounded-lg  p-3"
                placeholder="আপনার ইমেইল লিখুন"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 font-bold mb-2">
              আপনার বার্তা
            </label>
            <textarea
              rows="5"
              className="w-full rounded-lg p-3 border border-pink-300 hover:shadow-md"
              placeholder="আপনার বার্তা লিখুন"
              required
            ></textarea>
          </div>
          <div className="md:flex items-center justify-between">
          <button
            type="submit"
            className="mt-6 bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-secondary transition"
          >
            বার্তা পাঠান
          </button>
          <div className="mt-6">
            <label className=" flex items-center justify-center gap-5 text-gray-700 font-bold mb-2">
             <div className="flex items-center gap-2">
              <FaPhoneVolume />
             <h3> টেলিফোন :</h3>
             </div>
              <div><p>+8801785-825202</p>
              <p>+8801626-728671</p></div>
            </label>
            
          </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

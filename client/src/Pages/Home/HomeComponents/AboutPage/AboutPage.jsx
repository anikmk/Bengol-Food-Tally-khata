

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-4xl font-bold text-primary text-center mb-6">
          আমাদের সম্পর্কে
        </h1>
        <p className="text-center text-gray-700 text-lg mb-8">
          ঐতিহ্যবাহী বাংলা খাবারের স্বাদ এবং গুণগত মানের সাথে আপনাদের সেবা দিয়ে যাচ্ছি।  
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              কেন আমাদের বেছে নেবেন?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              আমাদের দোকানে শুধুমাত্র সতেজ এবং প্রাকৃতিক উপকরণ ব্যবহার করা হয়। 
              আমরা বিভিন্ন ধরণের মজাদার বাংলা খাবার তৈরি করি যা সকল বয়সের মানুষের কাছে জনপ্রিয়।
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>সতেজ এবং মানসম্মত খাবার।</li>
              <li>বাংলার ঐতিহ্যবাহী স্বাদের খাবার।</li>
              <li>বিশেষ দিনে কাস্টম প্যাকেজ অর্ডার।</li>
              <li>দ্রুত এবং নির্ভরযোগ্য ডেলিভারি।</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              আমাদের লক্ষ্য হলো বাংলা খাবারের ঐতিহ্য এবং স্বাদ দেশ এবং বিদেশে ছড়িয়ে দেওয়া। আপনারা আমাদের পাশে থাকলে, আমরা এই যাত্রা আরও এগিয়ে নিতে পারব।
            </p>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4 text-center">
            আমাদের লক্ষ্য এবং ভবিষ্যৎ পরিকল্পনা
          </h3>
          <p className="text-gray-700 leading-relaxed">
            আমরা শুধু একটি খাবার দোকান নয়, আমরা একটি গল্প বলি। 
            বাংলা সংস্কৃতির প্রতিটি স্বাদ আপনার প্লেটে পৌঁছে দিতে চাই। ভবিষ্যতে আমরা দেশের প্রতিটি অঞ্চলে এবং বিদেশেও আমাদের সেবা বিস্তৃত করতে চাই।
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

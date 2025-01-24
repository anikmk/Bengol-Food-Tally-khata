

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-4xl font-bold text-primary mb-8">
          যোগাযোগ করুন
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed">
          আপনি আমাদের সাথে যোগাযোগ করতে চাইলে নিচের ফর্মটি পূরণ করুন বা সরাসরি আমাদের হেল্পলাইন নাম্বারে কল করুন।
        </p>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                আপনার নাম
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
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
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
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
              className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              placeholder="আপনার বার্তা লিখুন"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-secondary transition"
          >
            বার্তা পাঠান
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

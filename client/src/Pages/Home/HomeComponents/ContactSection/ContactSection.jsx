
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="bg-secondary py-10 text-white">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
           {/* Image Section */}
           <div>
            <img
              src="./contact.png"
              alt="Contact Us"
              className="rounded-lg"
            />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              আমাদের সাথে যোগাযোগ করুন
            </h2>
            <p className="text-white mb-6 leading-relaxed">
              আপনি যদি আমাদের সেবাগুলোর সম্পর্কে আরও জানতে চান, অর্ডার দিতে চান বা 
              যেকোনো প্রশ্ন থাকে, তাহলে আমাদের সাথে যোগাযোগ করুন। আমরা সবসময় আপনাকে সাহায্য করতে প্রস্তুত।
            </p>
            <Link 
              to="/contact" 
              className="bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-slate-500 transition"
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

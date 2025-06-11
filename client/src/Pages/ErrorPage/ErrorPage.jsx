import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import errorImage from '/public/errorpage.jpg'
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-primary via-orange-100 to-primary/10 text-center p-4">
      <h1 className="text-8xl font-extrabold text-primary mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">উফ! পেজটি খুঁজে পাওয়া যায়নি</h2>
      <p className="text-gray-600 mb-6">যে পেজটি খুঁজছিলেন তা এখানে নেই বা মুছে ফেলা হয়েছে।</p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition duration-300"
      >
        <FaArrowLeft />
        হোমে ফিরে যান
      </Link>

      <div className="mt-10">
        <img
          src={errorImage}
          alt="404 Error Illustration"
          className="w-full max-w-xs mx-auto rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default ErrorPage;

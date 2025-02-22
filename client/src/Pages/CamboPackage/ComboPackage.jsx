
import { FaCartPlus } from "react-icons/fa";

const ComboPackage = () => {
  const packages = [
    {
      "id": 1,
      "name": "জন্মদিন প্যাকেজ",
      "description": "জন্মদিনের জন্য সেরা মিষ্টি এবং খাবারের প্যাকেজ।",
      "price": "3500",
      "img": "https://via.placeholder.com/300x200",
      "items": [
        {
          "itemName": "চকলেট কেক",
          "quantity": 1
        },
        {
          "itemName": "সন্দেশ",
          "quantity": 10
        },
        {
          "itemName": "চিপস",
          "quantity": 5
        },
        {
          "itemName": "কোল্ড ড্রিংকস",
          "quantity": 3
        },
        {
          "itemName": "সমুচা",
          "quantity": 10
        }
      ],
      "totalItems": 5
    },
    {
      "id": 2,
      "name": "বিবাহ প্যাকেজ",
      "description": "বিবাহের জন্য আকর্ষণীয় খাবার এবং মিষ্টি প্যাক।",
      "price": "7500",
      "img": "https://via.placeholder.com/300x200",
      "items": [
        {
          "itemName": "রসগোল্লা",
          "quantity": 20
        },
        {
          "itemName": "চমচম",
          "quantity": 15
        },
        {
          "itemName": "নিমকি",
          "quantity": 12
        },
        {
          "itemName": "কাচ্চি বিরিয়ানি",
          "quantity": 5
        },
        {
          "itemName": "বোরহানি",
          "quantity": 5
        }
      ],
      "totalItems": 5
    },
    {
      "id": 3,
      "name": "বিশেষ দিন প্যাকেজ",
      "description": "যেকোনো বিশেষ দিনের জন্য প্রস্তুত করা খাবার প্যাক।",
      "price": "5500",
      "img": "https://via.placeholder.com/300x200",
      "items": [
        {
          "itemName": "পেস্ট্রি কেক",
          "quantity": 3
        },
        {
          "itemName": "ফ্রাইড চিকেন",
          "quantity": 6
        },
        {
          "itemName": "সিংগারা",
          "quantity": 15
        },
        {
          "itemName": "চটপটি",
          "quantity": 2
        },
        {
          "itemName": "ফালুদা",
          "quantity": 2
        }
      ],
      "totalItems": 5
    }
  ]
  

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-center text-3xl font-bold text-primary mb-6">
        আমাদের প্যাকেজ
      </h1>
      <p className="text-center text-gray-600 mb-8">
        আপনার বিশেষ দিনের জন্য সেরা প্যাকেজটি বেছে নিন।
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={pkg.img}
              alt={pkg.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-primary mb-2">
                {pkg.name}
              </h2>
              <p className="text-gray-600 mb-3">{pkg.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-secondary">
                  {pkg.price}
                </span>
                <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-secondary transition">
                  <FaCartPlus /> কিনুন
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComboPackage;

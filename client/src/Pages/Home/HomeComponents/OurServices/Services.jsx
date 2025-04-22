import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const services = [
    {
      id: 1,
      title: "ফাস্ট ফুড অর্ডার করুন",
      description:
        "ইউজাররা সহজেই আমাদের ওয়েবসাইট থেকে সুস্বাদু ফাস্ট ফুড অর্ডার করতে পারবেন।",
      icon: "🍔",
    },
    {
      id: 2,
      title: "এডমিন: পাওনাদার ম্যানেজ করুন",
      description:
        "এডমিনরা পাওনাদার যোগ করতে, লেনদেন রেকর্ড করতে এবং ব্যালেন্স ম্যানেজ করতে পারবেন। কে কত টাকা দিয়েছে এবং কত বাকি আছে তা সহজেই ট্র্যাক করতে পারবেন।",
      icon: "📋",
    },
    {
      id: 3,
      title: "নিরাপদ লেনদেন",
      description:
        "আমাদের ওয়েবসাইটে করা সকল অর্ডারের জন্য নিরাপদ এবং নির্ভরযোগ্য পেমেন্ট সিস্টেম।",
      icon: "🔒",
    },
    {
      id: 4,
      title: "রিয়েল-টাইম আপডেট",
      description:
        "আপনার অর্ডার এবং লেনদেনের সকল আপডেট রিয়েল-টাইমে পেয়ে যান।",
      icon: "⏱️",
    },
    {
      id: 5,
      title: "এডমিন: অর্ডার রিপোর্ট",
      description:
        "এডমিনরা দৈনিক, সাপ্তাহিক এবং মাসিক অর্ডার রিপোর্ট জেনারেট করতে পারবেন।",
      icon: "📊",
    },
    {
      id: 6,
      title: "গ্রাহক সহায়তা",
      description:
        "আমাদের ২৪/৭ গ্রাহক সহায়তা সিস্টেমের মাধ্যমে যে কোনো প্রশ্নের উত্তর পান।",
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          আমাদের সার্ভিসসমূহ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 100} // প্রতি কার্ডে ১০০ মিলিসেকেন্ড করে ডিলে
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

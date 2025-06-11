const NoticeBoard = () => {
  const notices = [
    {
      title: "হোম সার্ভিস সময়সূচি",
      description: "প্রতিদিন সকাল ১০টা থেকে রাত ৯টা পর্যন্ত হোম সার্ভিস চলবে।",
    },
    {
      title: "সাপ্তাহিক ছুটি",
      description: "প্রতিবার শুক্রবার সার্ভিস বন্ধ থাকবে।",
    },
    {
      title: "বিশেষ নোটিশ",
      description: "বিক্রয় মূল্য পরিবর্তন হলে নোটিশ বোর্ডে জানানো হবে।",
    },
  ];

  return (
   <div className="py-8 md:py-14">
     <div className="max-w-3xl mx-auto p-4 rounded shadow bg-white">
      <h2 className="text-2xl font-bold text-primary text-center mb-4">📝 নোটিশ বোর্ড</h2>
      <div className="space-y-3">
        {notices.map((notice, idx) => (
          <div
            key={idx}
            className="border-l-4 border-primary bg-primary/5 p-3 rounded"
          >
            <h3 className="font-semibold text-primary mb-1">{notice.title}</h3>
            <p className="text-gray-700">{notice.description}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default NoticeBoard;

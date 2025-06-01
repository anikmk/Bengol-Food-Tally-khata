import Loader from "../../Componnents/Shared/Loader/Loader";

const Section = ({ title, items, onSelect, loading }) => {
  if(loading) return <Loader />
  return (
    <section>
      <h2 className="text-xl font-semibold text-primary mb-4 border-b pb-1">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items?.map((item, index) => (
          <div key={index} className="border rounded p-0 md:p-3 text-center shadow hover:shadow-md transition">
            <div className="h-28 bg-gray-100 flex items-center justify-center rounded relative">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover rounded" />
              <div className="absolute bottom-0 bg-white/80 w-full px-1 py-1">
                <h3 className="font-medium md:text-base text-sm">{item.name}</h3>
                <p className="text-primary font-semibold text-sm">৳{item.price}</p>
              </div>
              <div className="absolute top-0 right-0">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(e) => onSelect(item, e.target.checked)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;

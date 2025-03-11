import Loader from "../../Loader/Loader";

const ShopingCard = ({product,loading}) => {
    const {foodName,quantity,foodPrice,totalFoodPrice,customerFullName} = product;
    if(loading) return <Loader />
  return  <>
    <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              {/* পণ্যের ছবি */}
              <img
                src={'./shopingCardLogo.png'}
                alt="Bengal food"
                className="w-24 h-24 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
              />
  
              {/* বিবরণ */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-primary">
                 খাবারের নামঃ {foodName}
                </h3>
                <p className="text-gray-600">
                  আপনার নামঃ <span className="font-semibold capitalize">{customerFullName}</span>
                </p>
                <div className="flex md:block items-center gap-4 justify-center"><p className="text-gray-700">
                  খাবারের মূল্যঃ <span className="font-semibold">{foodPrice}</span>
                </p>
                <p className="text-gray-700">
                 খাবারের পরিমানঃ <span className="font-semibold">{quantity}</span>
                </p></div>
              </div>
  
              {/* মোট মূল্য */}
              <div className="text-right">
                <p className="text-xl font-semibold text-primary">
                    মোট {totalFoodPrice} টাকা</p>
              </div>
            </div>

            
    </>
}
export default ShopingCard;
import BirthdayCakeOrders from "./BirthdayCakeOrders/BirthdayCakeOrders";
import WithOutPackageOrders from "./CustomOrders/WithOutPackage/WithOutPackageOrders";
import WithPackageOrders from "./CustomOrders/WithPackage/WithPackageOrders";
import MainPackageOrders from "./MainPackageOrders/MainPackageOrders";

const PackageOrders = () => {
    return <>
    {/* bithday cake content */}
    <div>
    <BirthdayCakeOrders />
    </div>

    {/* main package content */}
    <div>
        <MainPackageOrders />
    </div>

    {/* with package content */}
    <div>
        <WithPackageOrders />
    </div>


    
    {/* with out package content */}
    <div>
        <WithOutPackageOrders />
    </div>

    </>
}
export default PackageOrders;
import WithOutPackageOrders from "./CustomOrders/WithOutPackage/WithOutPackageOrders";
import WithPackageOrders from "./CustomOrders/WithPackage/WithPackageOrders";
import MainPackageOrders from "./MainPackageOrders/MainPackageOrders";

const PackageOrders = () => {
    return <>
    
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
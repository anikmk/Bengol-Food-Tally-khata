import { MagnifyingGlass } from "react-loader-spinner";


const Loader = () => {
    return (
        <div className="grid place-items-center place-content-center min-h-screen">
            <h2 className="text-xl font-semibold">অনিক বেঙ্গল ফুড <span className="animate-pulse">...</span> </h2>
           <MagnifyingGlass
            visible={true}
            height="90"
            width="90"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#F53F7B"
            />
        </div>
    );
};

export default Loader;
import { NavLink, Outlet } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { CiHome } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { CiShop } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";

const Dashboard = () => {

    const closeDrawer = () => {
        const drawerCheckbox = document.getElementById('my-drawer');
        if (drawerCheckbox) {
            drawerCheckbox.checked = false;
        }
    };
    const navLink = [
        {item:"হোম",
        link:"/",
        icon:<CiHome />,
        id:1
        },
        {item:"পাওনাদার যুক্ত করুন",
        link:"/dashboard/addDebts",
        icon:<GrGallery />,
        id:2
        },
        {item:"সব পাওনাদার দেখুন",
        link:"/dashboard/showAlldebts",
        icon:<CiShop />,
        id:3
        },
        {item:"ফাস্ট ফোড যুক্ত করুন",
        link:"/dashboard/addFastFood",
        icon:<CiShop />,
        id:3
        },
        {item:"সব প্রডাক্ট যুক্ত করুন",
        link:"/dashboard/addAllProduct",
        icon:<CiShop />,
        id:3
        },
        {item:"সব ব্যবহারকারী দেখুন",
        link:"/dashboard/allUsers",
        icon:<IoCreateOutline />,
        id:4
        },
        
    ]
    return (
        <>
            <div className="flex lg:hidden">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className=" bg-primary py-2 px-4 btn text-neutral drawer-button text-xl font-poppins hover:text-primary"> <RiMenu5Line /> </label>
                        <Outlet />
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            {/* for small device */}
                            {navLink.map(items => <>
                            <NavLink to={items?.link} key={items.id}>
                            <div className="flex items-center font-poppins font-medium hover:bg-neutral p-2 rounded text-lightText hover:text-primary capitalize gap-4 shadow mb-4">
                            <div className="text-xl">{items?.icon}</div>
                            <li onClick={closeDrawer}>
                            {items?.item}</li>
                            </div>
                            </NavLink>
                        </>)}          
                        </ul>
                    </div>
                </div>
            </div>



            {/* sidebar content here */}
            {/* large device  */}
            <div className="hidden lg:flex h-screen">
                {/* sidebar menu items */}
                <div className="w-1/4 shadow-xl p-5 z-10">
                    <ul>          
                        {navLink.map(items => 
                            <NavLink to={items?.link} key={items.id}>
                            <div className="flex items-center font-poppins font-medium hover:bg-neutral p-2 rounded text-lightText hover:text-primary capitalize gap-4 shadow mb-4">
                            <div className="text-xl">{items?.icon}</div>
                            <li className={``}>
                            {items?.item}</li>
                            </div>
                            </NavLink>
                        )}                     
                    </ul>
                </div>

                {/* outlet render content */}

                <div className="flex-1 items-center justify-center p-8">
                <div className="">
                    <Outlet />
                </div>
                </div>
            </div>
            </>
    );
};

export default Dashboard;
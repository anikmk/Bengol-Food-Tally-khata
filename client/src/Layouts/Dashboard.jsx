import { Link, NavLink, Outlet } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { CiHome } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { CiShop } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BsArrow90DegDown } from "react-icons/bs";
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
        {
        item:"সব অর্ডার দেখুন",
        link:"/dashboard/allOrders",
        icon: <AiOutlineProduct />,
        id:2
        },
        {item:"পাওনাদার যুক্ত করুন",
        link:"/dashboard/addDebts",
        icon:<GrGallery />,
        id:3
        },
        {item:"সব পাওনাদার দেখুন",
        link:"/dashboard/showAlldebts",
        icon:<CiShop />,
        id:4
        },
        {item:"ফাস্ট ফোড যুক্ত করুন",
        link:"/dashboard/addFastFood",
        icon:<CiShop />,
        id:5
        },
        {item:"ফাস্ট ফোড আপডেট করুন",
        link:"/dashboard/updateFastFood",
        icon:<CiShop />,
        id:6
        },
        {item:"প্যাকেজ যুক্ত করুন",
        link:"/dashboard/addPackages",
        icon:<CiShop />,
        id:7
        },
        {item:"প্যাকেজ আপডেট করুন",
        link:"/dashboard/updatePackage",
        icon:<CiShop />,
        id:8
        },
        {item0:"কাস্টম প্রাইজ আপডেট করুন",
        link1:"/dashboard/updateCustomPrice",
        link2:"/dashboard/updateCustomPrice2",
        icon:<CiShop />,
        id:9
        },
        {item:"সব প্রডাক্ট যুক্ত করুন",
        link:"/dashboard/addAllProduct",
        icon:<CiShop />,
        id:10
        },
        {item:"সব ব্যবহারকারী দেখুন",
        link:"/dashboard/allUsers",
        icon:<IoCreateOutline />,
        id:11
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
                           <>
                            <NavLink to={items?.link} key={items.id}>
                            <div className={`flex items-center font-poppins font-medium hover:bg-neutral p-2 rounded text-lightText hover:text-primary capitalize gap-4 shadow mb-4 ${items?.item0 === "কাস্টম প্রাইজ আপডেট করুন" && "hidden"}`}>
                            <div className="text-xl">{items?.icon}</div>
                            <li className={``}>
                            {items?.item}</li>
                            </div>
                            </NavLink>


                            {items?.item0 === "কাস্টম প্রাইজ আপডেট করুন" && <details className="dropdown dropdown-top">
                            <summary className="flex items-center font-poppins font-medium hover:bg-neutral p-2 rounded text-lightText hover:text-primary capitalize gap-4 shadow mb-4 cursor-pointer"><BsArrow90DegDown /> <span>{items?.item0}</span></summary>
                            <ul className="menu dropdown-content bg-primary rounded z-1  p-2 shadow-sm text-center">
                                <Link to={items?.link1}><button className="text-sm font-medium bg-neutral text-lightText p-[5px] rounded hover:text-primary">পার কেজি আপডেট</button></Link>
                                <div className="text-neutral">____OR____</div>
                                <Link to={items?.link2}><button className="text-sm font-medium bg-neutral text-lightText p-[5px] rounded hover:text-primary">পার আইটেম আপডেট</button></Link>
                            </ul>
                            </details>}
                           </>
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
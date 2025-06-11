import { Link, NavLink, Outlet } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { CiHome } from "react-icons/ci";
import { BsArrow90DegDown } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { FcCalculator } from "react-icons/fc";
import { VscDiffAdded } from "react-icons/vsc";
import { RxUpdate } from "react-icons/rx";
import { PiUsersThree } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
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
        {item:"এনালিটিক্স",
        link:"/dashboard/analytics",
        icon:<GrAnalytics />,
        id:2
        },
        {item:"ক্যালকুলেটর",
        link:"/dashboard/calculator",
        icon:<FcCalculator />,
        id:3
        },
        {
        item:"ফাস্ট ফুডের অর্ডার দেখুন",
        link:"/dashboard/allOrders",
        icon: <FiBookOpen />,
        id:4
        },
        {
        item:"প্যাকেজের অর্ডার দেখুন",
        link:"/dashboard/packageOrders",
        icon: <FiBookOpen />,
        id:5
        },
        {
        item:" অন্যান্য অর্ডার দেখুন",
        link:"/dashboard/allPornoOrdersList",
        icon: <FiBookOpen />,
        id:6
        },
        {item:"পাওনাদার যুক্ত করুন",
        link:"/dashboard/addDebts",
        icon:<VscDiffAdded />,
        id:7
        },
        {item:"সব পাওনাদার দেখুন",
        link:"/dashboard/showAlldebts",
        icon:<FiBookOpen />,
        id:8
        },
        {item:"ফাস্ট ফোড যুক্ত করুন",
        link:"/dashboard/addFastFood",
        icon:<VscDiffAdded />,
        id:9
        },
        {item:"ফাস্ট ফোড আপডেট করুন",
        link:"/dashboard/updateFastFood",
        icon:<RxUpdate />,
        id:10
        },
        {item:"প্যাকেজ যুক্ত করুন",
        link:"/dashboard/addPackages",
        icon:<VscDiffAdded />,
        id:11
        },
        {item:"প্যাকেজ আপডেট করুন",
        link:"/dashboard/updatePackage",
        icon:<RxUpdate />,
        id:12
        },
        {item0:"কাস্টম প্রাইজ আপডেট করুন",
        link1:"/dashboard/updateCustomPrice",
        link2:"/dashboard/updateCustomPrice2",
        icon:<RxUpdate />,
        id:13
        },
        {item:"সব প্রডাক্ট যুক্ত করুন",
        link:"/dashboard/addAllProduct",
        icon:<VscDiffAdded />,
        id:14
        },
        {item:"কেকের ক্যাটালগ যুক্ত করুন",
        link:"/dashboard/addBirthdayCakeCatelog",
        icon:<VscDiffAdded />,
        id:15
        },
        {item:"কেকের ক্যাটালগ আপডেট করুন",
        link:"/dashboard/updateBirthdayCake",
        icon:<RxUpdate />,
        id:16
        },
        {item:"অন্যান্য পণ্য যুক্ত করুন",
        link:"/dashboard/anotherPorno",
        icon:<VscDiffAdded />,
        id:17
        },
        {item:"অন্যান্য পণ্য আপডেট করুন",
        link:"/dashboard",
        icon:<RxUpdate />,
        id:18
        },
        {item:"সব ব্যবহারকারী দেখুন",
        link:"/dashboard/allUsers",
        icon:<PiUsersThree />,
        id:19
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
                            {navLink.map(items => 
                           <>
                            <NavLink to={items?.link} key={items.id}>
                            <div onClick={closeDrawer} className={`flex items-center font-poppins font-medium hover:bg-neutral p-2 rounded text-lightText hover:text-primary capitalize gap-4 shadow mb-4 ${items?.item0 === "কাস্টম প্রাইজ আপডেট করুন" && "hidden"}`}>
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
                </div>
            </div>



            {/* sidebar content here */}
            {/* large device  */}
            <div className="hidden lg:flex min-h-screen">
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
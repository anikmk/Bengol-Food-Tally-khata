import {Link} from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import Container from '../Container/Container';
import { CgMenuGridR } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { getSingleUser } from '../../../Api/userRelatedApi/userApi';
// import Loader from '../Loader/Loader';
import { FiSettings } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import Load from '../Loader/load/Load';
import { PiDropboxLogoFill } from "react-icons/pi";
import { getShopingCartProduct } from '../../../Api/fastFoodRelatedApi/foodApi';
const Navbar = () => {
  const {user,logOut,} = useAuth();
  const [isMenuClick,setIsMenuClick] = useState();
  
  const handleLogOut = async() => {
    await logOut();
  }
  const handleMenu = () => {
    setIsMenuClick(!isMenuClick)
  }
   const navLink = [
    {
      id:1,
      text:'ফাস্ট ফোড',
      link:'/OrderFastFood'
    },
    {
      id:2,
      text:'কম্ব প্যাকেজ',
      link:'/comboPackage'
    },
    {
      id:3,
      text:'সব পণ্য',
      link:'/allProduct'
    },
    {
      id:6,
      text:'কাস্টম অর্ডার',
      link:'/customPackageOrderForm'
    },
    {
      id:5,
      text:'নোটিশ বোর্ড',
      link:'/noticeBoard'
    },
    {
      id:4,
      text:<BsCart2 />,
      link:'/shopingCart'
    },
    
  ]

  const {data:singleUser = {}, isLoading} = useQuery({
    queryKey:[user?.email,"singleUser"],
    queryFn:async()=>await getSingleUser(user?.email),
  })

  const isAdmin = singleUser?.status === "admin";
  
  const {data:orderQuantity} = useQuery({
          queryKey:"orderQuantity",
          queryFn:async () => await getShopingCartProduct(user?.email) 
      })
      
  return (

    <>
      <div className='bg-primary font-medium shadow-xl p-0'>
      <Container>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div onClick={handleMenu} tabIndex={0} role="button" className="md:btn md:btn-ghost lg:hidden text-neutral text-3xl">
              {isMenuClick === true ? <div><RxCross2 /></div>:<div><CgMenuGridR /></div>}
            </div>
            <ul
              tabIndex={0}
              className={` shadow-lg menu menu-sm dropdown-content bg-primary text-primary rounded-box z-[1] mt-3 w-52 p-2 ${isMenuClick === false && "hidden"}`}
            >
              <li className='text-base mt-2 rounded p-[4px] shadow-lg bg-neutral font-semibold'><Link to={'/'}>হোম</Link></li>
             {
              navLink.map((item) => 
             <li className='text-lg mt-3 rounded p-[4px] shadow-lg bg-neutral font-semibold' key={item?.id}><Link to={item?.link}>
              {
                item?.id === 4 ? <>{item?.text} <span className='-mt-2 font-semibold'>{orderQuantity?.length}</span> </>:<>{item?.text}</>
              }
              </Link></li>
             )
             }
            </ul>
          </div>
          <div className='ml-2'>
          <p className='text-white text-lg flex items-center gap-[3px]'> <PiDropboxLogoFill /> <p>অনিক</p></p>
          <h1 className='text-white text-sm'> কনফেকশনারী</h1> 
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-5 text-neutral">
          <li className='text-base mr-2'><Link to={'/'}>হোম</Link></li>
          {
          navLink.map((item) => 
             <li className='text-lg mr-2' key={item?.id}><Link to={item?.link}>
              {
                item?.id === 4 ? <>{item?.text} <span className='-mt-2 font-semibold'>{orderQuantity?.length}</span> </>:<>{item?.text}</>
              }
            
             </Link></li>
             )
          }
          
          </ul>
        </div>
       


          <div className='navbar-end'>

          {
            user ? <>
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost text-neutral font-semibold text-2xl">
                  <FiSettings />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-[1] mt-[18px] -ml-10 space-y-[6px]">

                  {
                    isAdmin && <li><Link to={'/dashboard/calculator'} className="bg-gradient-to-r hover:bg-gradient-to-l from-primary to-green-600 text-neutral rounded-lg text-sm p-2 shadow-lg">{isLoading ? <><Load /></>:"Dashboard"}</Link></li>
                  }

                  <li><Link onClick={handleLogOut} className="bg-gradient-to-r hover:bg-gradient-to-l from-primary to-green-600 text-neutral rounded-lg text-sm p-2 shadow-lg">logout</Link></li>

                </ul>
              </div>
            </>
            
            :
            
            <><Link to={'/signUp'} className="bg-gradient-to-r hover:bg-gradient-to-l from-primary to-green-600 text-neutral rounded-lg text-sm p-2">একাউন্ড তৈরি করুন</Link></>
          }
        </div>
      </div>
      </Container>
      </div>
    </>
  );
};

export default Navbar;

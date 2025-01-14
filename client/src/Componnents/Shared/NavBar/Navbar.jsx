import {Link} from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import Container from '../Container/Container';
import { CgMenuGridR } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { getSingleUser } from '../../../Api/userRelatedApi/userApi';
import Loader from '../Loader/Loader';
const Navbar = () => {
  const {user,logOut,loading} = useAuth();
  
  const [isMenuClick,setIsMenuClick] = useState();
  
  const handleLogOut = async() => {
    await logOut();
  }
  const handleMenu = () => {
    setIsMenuClick(!isMenuClick)
  }
   const navLink = [
    {
      id:2,
      text:'পাওনাদার যুক্ত করুন',
      link:'/addDebts'
    },
    {
      id:3,
      text:'সব পাওনাদার দেখুন',
      link:'/showAlldebts'
    },
    {
      id:4,
      text:'সব ব্যবহারকারি দেখুন',
      link:'/allUsers'
    },
  ]

  const {data:singleUser = {}, isLoading} = useQuery({
    queryKey:[user?.email,"singleUser"],
    queryFn:async()=>await getSingleUser(user?.email),
  })
  if(isLoading || loading) return <Loader />

  const isAdmin = singleUser?.status === "admin";
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
             isAdmin && navLink.map((item) => 
             <li className='text-base mt-3 rounded p-[4px] shadow-lg bg-neutral font-semibold' key={item?.id}><Link to={item?.link}>{item?.text}</Link></li>
             )
             }
            </ul>
          </div>
          <div className='h-[73px]'>
            
          <img className='h-full' src="./logo.png" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-5 text-neutral">
          <li className='text-base mr-2'><Link to={'/'}>হোম</Link></li>
          {
         isAdmin && navLink.map((item) => 
             <li className='text-base mr-2' key={item?.id}><Link to={item?.link}>{item?.text}</Link></li>
             )
          }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <><Link onClick={handleLogOut} className="bg-gradient-to-r hover:bg-gradient-to-l from-primary to-green-600 text-neutral rounded-lg text-sm p-2">লগ আউট করুন</Link></>:<><Link to={'/signUp'} className="bg-gradient-to-r hover:bg-gradient-to-l from-primary to-green-600 text-neutral rounded-lg text-sm p-2">একাউন্ড তৈরি করুন</Link></>
          }
        </div>
      </div>
      </Container>
      </div>
    </>
  );
};

export default Navbar;

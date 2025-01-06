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
      <div className='bg-primary font-medium shadow-xl'>
      <Container>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div onClick={handleMenu} tabIndex={0} role="button" className="md:btn md:btn-ghost lg:hidden text-neutral text-xl mr-6 md:mr-0">
              {isMenuClick === true ? <div><RxCross2 /></div>:<div><CgMenuGridR /></div>}
            </div>
            <ul
              tabIndex={0}
              className={` menu menu-sm dropdown-content bg-primary text-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow ${isMenuClick === false && "hidden"}`}
            >
              <li className='text-base mt-2'><Link to={'/'}>হোম</Link></li>
             {
             isAdmin && navLink.map((item) => 
             <li className='text-base mt-2' key={item?.id}><Link to={item?.link}>{item?.text}</Link></li>
             )
             }
            </ul>
          </div>
          <div className=''>
            
          <a className="bg-gradient-to-r from-green-600 to-primary text-neutral rounded-lg text-base font-semibold p-2"> বেঙ্গল ফুড</a>
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
            user ? <><Link onClick={handleLogOut} className="bg-gradient-to-r from-primary to-green-600 text-neutral rounded-lg text-sm p-2">লগ আউট করুন</Link></>:<><Link to={'/signUp'} className="bg-[#c914507c] p-2 text-neutral rounded-lg text-sm">একাউন্ড তৈরি করুন</Link></>
          }
        </div>
      </div>
      </Container>
      </div>
    </>
  );
};

export default Navbar;

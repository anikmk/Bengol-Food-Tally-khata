import {Link} from 'react-router-dom'
import Container from '../Container/Container';
import { CgMenuGridR } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
const Navbar = () => {
  const {user} = useAuth();
  const user2 = 'admin'
  const [isMenuClick,setIsMenuClick] = useState();
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
  return (

    <>
      <div className='bg-primary font-medium'>
      <Container>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div onClick={handleMenu} tabIndex={0} role="button" className="md:btn md:btn-ghost lg:hidden text-neutral text-xl mr-2 md:mr-0">
              {isMenuClick === true ? <div><RxCross2 /></div>:<div><CgMenuGridR /></div>}
            </div>
            <ul
              tabIndex={0}
              className={` menu menu-sm dropdown-content bg-primary text-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow ${isMenuClick === false && "hidden"}`}
            >
              <li className='text-base'><Link to={'/'}>হোম</Link></li>
             {
             user2 === 'admin' && navLink.map((item) => 
             <li className='text-base' key={item?.id}><Link to={item?.link}>{item?.text}</Link></li>
             )
             }
            </ul>
          </div>
          <div className='relative'>
            <a className='  absolute -top-4 left-0 text-neutral text-sm'>রাজনগর</a>
          <a className="md:text-xl text-lg bg-gradient-to-r from-sky-600 to-white inline-block text-transparent bg-clip-text font-semibold font-bangla">বেঙ্গল ফুড</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-neutral">
          <li className='text-base'><Link to={'/'}>হোম</Link></li>
          {
         user2 === 'admin' && navLink.map((item) => 
             <li className='text-base' key={item?.id}><Link to={item?.link}>{item?.text}</Link></li>
             )
          }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <><Link to={'/signIn'} className="bg-[#c914507c] p-2 text-neutral rounded-lg text-sm">সাইন ইন করুন</Link></>:<><Link to={'/signUp'} className="bg-[#c914507c] p-2 text-neutral rounded-lg text-sm">একাউন্ড তৈরি করুন</Link></>
          }
        </div>
      </div>
      </Container>
      </div>
    </>
  );
};

export default Navbar;

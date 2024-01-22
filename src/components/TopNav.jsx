import { useState } from "react";
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose,} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import {TbTruckReturn} from "react-icons/tb";
import {FaGoogleWallet} from "react-icons/fa";
import {MdHelp,MdOutlineFavorite} from "react-icons/md";
const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            setSideNav(!sideNav);
          }}
        >
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Yum
          <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 font-bold">
            Free
          </p>
          <p className="p-2 font-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Meals"
          className="bg-transparent focus:outline-none p-2 w-full"
        />
      </div>
      {sideNav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0 " onClick={()=>{setSideNav(!sideNav);}}></div>) : ("")
      }
      <button className="bg-orange-700 text-white py-2 hidden md:flex item-center rounded-full">
        <BsFillCartFill size={20} />
        Cart
      </button>
      <div
        className={
          sideNav
            ? "fixed bg-white top-0 left-0 w-[300px] h-screen z-10 duration-300"
            : "fixed bg-white  top-0 left-[-100%] w-[300px] h-screen z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => {
            setSideNav(!sideNav);
          }}
          size={25}
          className="absolute top-4 right-4 cursor-pointer"
        />
        <h1 className="text-2xl p-4">
          Yum <span className="text-orange-700 font-bold">Eats</span>
        </h1>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex">
              <BsPerson className="text-white bg-black rounded-full mr-4" size={25}/>
              My Account
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckReturn className="text-white bg-black rounded-full mr-4" size={25}/>
              Delivery
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineFavorite className="text-white bg-black rounded-full mr-4" size={25}/>
              My Favorite
            </li>
            <li className="text-xl py-4 flex">
              <FaGoogleWallet className="text-white bg-black rounded-full mr-4" size={25}/>
              My Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp className="text-white bg-black rounded-full mr-4" size={25}/>
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default TopNav;

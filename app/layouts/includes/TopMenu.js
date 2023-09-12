"use client";

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useUser } from "@/app/context/user";

const TopMenu = () => {
  const user = useUser();

  const { isMenu, setIsMenu } = useState(false);

  const isLoggedIn = () => {
    if (user && user?.id) {
      return (
        <button
          onClick={() => (!isMenu ? setIsMenu(true) : setIsMenu(false))}
          className='flex items-center gap-2 hover:underline cursor-pointer'
        >
          <div>Hi, {user.name}</div>
          <BsChevronDown />
        </button>
      );
    }

    return (
      <Link
        href='/auth'
        className='flex items-center gap-2 hover:underline cursor-pointer'
      >
        <div>Login</div>
        <BsChevronDown />
      </Link>
    );
  };
  return (
    <>
      <div id='TopMenu' className='border-b'>
        <div className='flex items-center justify-between w-full mx-auto max-w-[1200px]'>
          <ul
            id='TopMenuLeft'
            className='flex items-center text-[11px] text-[#333333] px-2 h-8'
          >
            <li className='relative px-3'>
              {isLoggedIn()}
              <div
                id='AuthDropdown'
                className='hidden absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg'
              >
                <div className='flex items-center justify-start gap-1 p-3'>
                  <img width={50} src='https://picsum.photos/200' />
                  <div className='font-bold text-[13px]'>Dan Crha</div>
                </div>
                <div className='border-b' />
                <ul className='bg-white'>
                  <li className='text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer'>
                    <Link href='/orders'>My Orders</Link>
                  </li>
                  <li className='text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer'>
                    Sign Out
                  </li>
                </ul>
              </div>
            </li>
            <li className='px-3 hover:underline cursor-pointer'>Daily Deals</li>
            <li className='px-3 hover:underline cursor-pointer'>
              Help & Contact
            </li>
          </ul>
          <ul
            id='TopMenuRight'
            className='flex items-center text-[11px] text-[#333333] px-2 h-8'
          >
            <li className='flex items-center gap-2 px-3 hover:underline cursor-pointer'>
              <img width={32} src='/images/flag.png' />
              Ship to
            </li>
            <li className='px-3 hover:underline cursor-pointer'>
              <div className='relative'>
                <AiOutlineShoppingCart size={22} />
                <div className='absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white'>
                  <div className='flex items-center justify-center -mt-[1px] '>
                    3
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopMenu;

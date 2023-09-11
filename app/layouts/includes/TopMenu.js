"use client";

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const TopMenu = () => {
  return (
    <>
      <div id='TopMenu' className='border-b'>
        <div className='flex items-center justify-between w-full mx-auto max-w-[1200px]'>
          <ul
            id='TopMenuLeft'
            className='flex items-center text-[11px] text-[#333333] px-2 h-8'
          >
            <li className='relative px-3'>
              <Link
                href='/auth'
                className='flex items-center gap-2 hover:underline cursor-pointer'
              >
                <div>Login</div>
                <BsChevronDown />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopMenu;

import React from "react";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BsListTask } from 'react-icons/bs';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100 p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li><Link to={'all-task'} className="font-semibold">To-Do <BsListTask /></Link></li>
                <li><Link to={'new_task'} className="font-semibold">New Task <AiOutlinePlusCircle /></Link></li>
                <li><Link to={'completed-task'} className="font-semibold">Completed Task <AiOutlineFileDone /></Link></li>
            </ul>
          </div>
          <Link to={'/'} className="font-bold btn btn-ghost normal-case text-xl bg-gray-200">Daily Task Note</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to={'all-task'} className="font-semibold">To-Do <BsListTask /></Link></li>
            <li><Link to={'new_task'} className="font-semibold">New Task <AiOutlinePlusCircle /></Link></li>
            <li><Link to={'completed-task'} className="font-semibold">Completed Task <AiOutlineFileDone /></Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

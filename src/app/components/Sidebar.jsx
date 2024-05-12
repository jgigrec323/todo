import React from "react";
import Link from "next/link";
import { HiMiniInbox } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { MdToday } from "react-icons/md";
import { BsCalendar3Week } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa";
function Sidebar() {
  return (
    <div>
      <div className="bg-neutral-900 h-[32rem] w-60 p-5 rounded-xl">
        <div className="mb-3">
          <h2 className="text-xl text-purple-200">Filters</h2>
        </div>
        <ul className="flex flex-col gap-4">
          <li>
            <Link className="flex gap-3 items-center" href={"/"}>
              <HiMiniInbox />
              All
            </Link>
          </li>
          <li>
            <Link className="flex gap-3 items-center" href={"/"}>
              <FaStar />
              Starred
            </Link>
          </li>
          <li>
            <Link className="flex gap-3 items-center" href={"/"}>
              <MdToday />
              Today
            </Link>
          </li>
          <li>
            <Link className="flex gap-3 items-center" href={"/"}>
              <BsCalendar3Week />
              Week
            </Link>
          </li>
        </ul>
        <div className="mb-3 mt-12">
          <h2 className="text-xl text-purple-200">Projects</h2>
        </div>
        <Link className="flex gap-3 items-center" href={"/"}>
          <FaRegFolder />
          Default
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

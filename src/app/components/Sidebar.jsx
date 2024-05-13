"use client";
import React from "react";
import Link from "next/link";
import { HiMiniInbox } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { MdToday } from "react-icons/md";
import { BsCalendar3Week } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa";
import { usePathname } from "next/navigation";
function Sidebar() {
  const currentPath = usePathname();

  const links = [
    { path: "/", label: "All", icon: <HiMiniInbox size={15} /> },
    { path: "/starred", label: "Starred", icon: <FaStar size={15} /> },
    { path: "/today", label: "Today", icon: <MdToday size={15} /> },
    { path: "/week", label: "Week", icon: <BsCalendar3Week size={15} /> },
  ];
  return (
    <div className="bg-neutral-900 h-[32rem] w-60 p-5 rounded-3xl">
      <div className="mb-3">
        <h2 className="text-xl text-purple-200">Filters</h2>
      </div>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li
            key={link.path}
            className={`${
              currentPath === link.path && "bg-neutral-800"
            } p-1 rounded-lg`}
          >
            <Link className="flex gap-3 items-center ml-1" href={link.path}>
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mb-3 mt-12">
        <h2 className="text-xl text-purple-200">Projects</h2>
      </div>
      <Link className="flex gap-3 items-center ml-1" href={"/"}>
        <FaRegFolder size={15} />
        Default
      </Link>
    </div>
  );
}

export default Sidebar;

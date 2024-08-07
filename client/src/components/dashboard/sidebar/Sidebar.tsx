"use client";

import React, { useState } from "react";
import { IoLogoBitcoin, IoIosPeople, IoMdTrendingUp } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi2";
import { MdOutlineAnalytics, MdOutlineWidgets } from "react-icons/md";
import { RiCalendarTodoFill, RiContactsBook3Line } from "react-icons/ri";
import { FaRocketchat } from "react-icons/fa";
import { HiOutlineViewBoards } from "react-icons/hi";
import { LiaOpencart } from "react-icons/lia";
import { List, ListSubheader } from "@mui/material";

import AvatarSection from "./AvatarSection";
import MenuItem from "./MenuItem";
import { CustomDrawer } from "./SideBarStyle";

const menuItems = [
  {
    category: "Application",
    items: [
      { text: "Crypto", icon: <IoLogoBitcoin /> },
      { text: "CRM", icon: <IoIosPeople /> },
      { text: "Analytics", icon: <MdOutlineAnalytics /> },
      { text: "Health Care", icon: <MdHealthAndSafety /> },
      { text: "E-Commerce", icon: <BsCart4 /> },
      { text: "Academy", icon: <HiAcademicCap /> },
      { text: "Metrics", icon: <RiCalendarTodoFill /> },
      { text: "Widgets", icon: <MdOutlineWidgets /> },
    ],
  },
  {
    category: "Apps",
    items: [
      { text: "Mail", icon: <IoMailOutline />, badge: 4, badgeColor: "error" },
      {
        text: "ToDo",
        icon: <RiCalendarTodoFill />,
        badge: 6,
        badgeColor: "success",
      },
      { text: "Contact", icon: <RiContactsBook3Line /> },
      { text: "Chat", icon: <FaRocketchat /> },
      { text: "Scrum Board", icon: <HiOutlineViewBoards /> },
      { text: "Wall App", icon: <LiaOpencart /> },
      { text: "Ecommerce", icon: <BsCart4 /> },
    ],
  },
];

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState("Crypto");

  const handleListItemClick = (text: string) => {
    setSelectedIndex(text);
  };

  return (
    <div>
      <CustomDrawer open={true} variant="permanent">
        <List>
          <AvatarSection />
          {menuItems.map((menu, menuIndex) => (
            <React.Fragment key={menuIndex}>
              <ListSubheader>{menu.category}</ListSubheader>
              {menu.items.map((item, index) => (
                <MenuItem
                  key={index}
                  text={item.text}
                  icon={item.icon}
                  selected={selectedIndex === item.text}
                  onClick={() => handleListItemClick(item.text)}
                  badge={item.badge}
                />
              ))}
            </React.Fragment>
          ))}
        </List>
      </CustomDrawer>
    </div>
  );
};

export default Sidebar;

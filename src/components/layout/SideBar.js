import React, { useState } from "react";
import Image from "next/image";
import { SideBarMenuData } from "@/src/helper/layoutdata/sideBarData";
import Link from "next/link";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [selectMenu, setSelectedMenu] = useState("Workflow");
  return (
    <aside
      className={`aside__section scroll__bar ${
        showSideBar ? "aside__section--show" : "aside__section--hide"
      }`}
    >
      {/* Logo */}
      <div className="aside__logo">
        <Image src={"/images/zaancrop_logo.svg"} width={127} height={22} />
        <Image
          className={`logo__arrow ${!showSideBar && "logo__arrow--768--media"}`}
          src={"/images/sidebar_double_arrow.svg"}
          width={20}
          height={20}
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
        />
      </div>
      {/* Menu */}
      <div className="aside__menu">
        {SideBarMenuData?.map((item) => {
          return (
            <div
              className={`menu__item ${
                selectMenu === item.title && "menu__item--selected"
              }  `}
            >
              <Link
                className="menu__item--link"
                href={"/"}
                onClick={() => {
                  setSelectedMenu(item.title);
                }}
              >
                <Image src={item.imagePath} width={22} height={22} />
                <span>{item.title}</span>
              </Link>
            </div>
          );
        })}
        <div className="menu__item--compnay">
          <div className="menu__item ">
            <Link className="menu__item--link" href={"/"}>
              <Image
                src={"/images/sidebar_menu_compnay.svg"}
                width={22}
                height={22}
              />
              <span>Company</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

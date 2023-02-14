import Image from "next/image";
import React from "react";
import IconButton from "../buttons/IconButton";

export const Header = () => {
  return (
    <header className="header__section">
      <div className="header__section--div">
        {/* User Group */}
        <div className="header__usergroup">
          <div className="usergroup__list">
            <div className="usergroup__count border--right pad--right">
              <Image
                className="avatar__rounded--50"
                src={"/images/header_user_1.svg"}
                width={30}
                height={30}
              />
              <span className="user__count--yellow">15</span>
            </div>

            <div className="usergroup__count pad--left">
              <Image
                className="user__avatar--medium"
                src={"/images/header_user_2.svg"}
                width={30}
                height={30}
              />
              <span className="user__count--purple">11</span>
            </div>
          </div>

          <div className="usergroup__option">
            <button className="usergroup__option--btn">
              <Image
                src={"/images/header_user_option.svg"}
                width={11}
                height={5.5}
              />
            </button>
          </div>
        </div>
        {/* Idea portion */}
        <IconButton
          icon={"/images/header_suggestions.svg"}
          type="secondary"
          className="ml-8"
          width={24}
          height={24}
        />

        {/* Add portion */}
        <IconButton
          icon={"/images/header_plus.svg"}
          type="primary"
          className="ml-8"
          width={24}
          height={24}
        />
        {/* Seaching portion */}
        <div className="header__search">
          <Image src={"/images/header_search.svg"} width={20} height={20} />
          <input placeholder="Search" />
        </div>
        {/* Announcement portion */}
        <IconButton
          icon={"/images/header_annoucement.svg"}
          type="secondary"
          className="ml-8"
          width={24}
          height={24}
        />
        {/* Cliender portion */}
        <IconButton
          icon={"/images/header_calendar.svg"}
          type="secondary"
          className="ml-8"
          width={24}
          height={24}
        />
        {/* Chat portion */}
        <IconButton
          icon={"/images/header_chat.svg"}
          type="secondary"
          className="ml-8"
          width={24}
          height={24}
        />
        {/* User Avatar */}
        <div className="header__user--avatar ml-8">
          <Image
            className="avatar__rounded--50"
            src={"/images/header_avatar.svg"}
            width={38}
            height={38}
          />
        </div>
      </div>
    </header>
  );
};

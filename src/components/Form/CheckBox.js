import {
  activityAboutStatus,
  tagsStatus,
} from "@/src/helper/workflowdata/activityAboutStatus";
import Image from "next/image";
import React from "react";

const CheckBox = ({ text, dotStatus = false, bg = false, avatar = "" }) => {
  // const bgClass = bg ? "pl-8 pr-8 " : "";
  const bgColor = bg
    ? tagsStatus.includes(text)
      ? `rounded-12 pl-8 pr-8 __bg--color--${tagsStatus.findIndex(
          (data) => data === text
        )}`
      : ""
    : "";

  return (
    <div className="cs__checkbox">
      <input
        class="styled-checkbox"
        id="styled-checkbox-1"
        type="checkbox"
        value="value1"
      />
      <label for="styled-checkbox-1" className={`heading__sub__2 ${bgColor}`}>
        {dotStatus && activityAboutStatus.includes(text) && (
          <span
            className={`mr-6 __dot __dot--color--${activityAboutStatus.findIndex(
              (status) => status === text
            )}`}
          ></span>
        )}
        {avatar && (
          <Image className="mr-8 " src={avatar} width={24} height={24} />
        )}
        {text}
      </label>
    </div>
  );
};

export default CheckBox;

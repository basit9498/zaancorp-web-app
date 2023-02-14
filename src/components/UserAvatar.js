import Image from "next/image";
import React from "react";

const UserAvatar = ({
  imagePath,
  width = 30,
  height = 30,
  messageCount = 0,
}) => {
  return (
    <div className="avatar__notification">
      <Image
        className="avatar__rounded--50"
        src={imagePath}
        width={width}
        height={height}
      />
      <span className="avatar__notification--count">{messageCount}</span>
    </div>
  );
};

export default UserAvatar;

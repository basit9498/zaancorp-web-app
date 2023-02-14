import Image from "next/image";
import React from "react";

const types = ["primary", "secondary"];
const sizes = ["lg", "md", "sm"];
const IconButton = ({
  icon,
  width = 12,
  height = 12,
  type = "primary",
  size = "md",
  className = "",
  text = null,
  onClick = () => {},
}) => {
  const btnClass = types.includes(type) ? type : "secondary";
  const btnSizeClass = sizes.includes(size) ? size : "md";

  return (
    <button
      className={`icon__btn--flex icon__btn ${btnClass}__icon--btn ${className} icon__btn--${btnSizeClass}`}
      onClick={onClick}
    >
      <Image src={icon} width={width} height={height} />
      {text && <span className="icon__btn--text btn__text__3">{text}</span>}
    </button>
  );
};

export default IconButton;

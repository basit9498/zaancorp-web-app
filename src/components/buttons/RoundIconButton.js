import Image from "next/image";
import React from "react";

const types = ["primary", "secondary"];
const RoundIconButton = ({
  icon,
  width = 18,
  height = 18,
  type = "primary",
  className = "",
}) => {
  const btnClass = types.includes(type) ? type : "secondary";
  return (
    <button
      className={`icon__btn--rounded  ${btnClass}__icon--btn--rounded  ${className}`}
    >
      <Image src={icon} width={width} height={height} />
    </button>
  );
};

export default RoundIconButton;

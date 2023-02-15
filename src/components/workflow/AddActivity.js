import Image from "next/image";
import React from "react";

const AddActivity = ({ showAddActivtyHandler }) => {
  return (
    <div className="addactivity__section">
      <div className="addactivity__btn">
        <button onClick={showAddActivtyHandler}>
          <Image src={"/images/add_ac_plus.svg"} width={18} height={18} />
          <span className="ml-4 btn__text__2">Add Card</span>
        </button>
      </div>
    </div>
  );
};

export default AddActivity;

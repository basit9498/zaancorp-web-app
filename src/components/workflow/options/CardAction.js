import { cardActionData } from "@/src/helper/workflowdata/cardActionData";
import Image from "next/image";
import React from "react";

const CardAction = ({ setShowActionSortHandler }) => {
  return (
    <div className="cardaction__div">
      {/* Header */}
      <div className="cardaction__header">
        <div className="sort__title">
          <span>List Actions</span>
        </div>
        <Image
          src={"/images/cs_close.svg"}
          width={16}
          height={16}
          className="ml-8 cursor__pointer"
          onClick={setShowActionSortHandler}
        />
      </div>
      {/* Options */}
      <div className="cardaction__list">
        {cardActionData?.map((data) => {
          return (
            <div className="cardaction__option">
              <div>
                <span>{data}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardAction;

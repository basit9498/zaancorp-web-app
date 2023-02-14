import { cardSortData } from "@/src/helper/workflowdata/cardSortData";
import Image from "next/image";
import React from "react";

const CardSort = ({ setShowCardSortHandler, type = "" }) => {
  return (
    <div
      className={`cardsort__div ${
        type === "main" ? "cardsort__div--main" : "cardsort__div--playlist"
      }`}
    >
      {/* Header */}
      <div className="cardsort__header">
        <div className="sort__title">
          <Image src={"/images/cs_Sort by.svg"} width={18} height={18} />
          <span>Sort by</span>
        </div>
        <Image
          src={"/images/cs_close.svg"}
          width={16}
          height={16}
          className="ml-8 cursor__pointer"
          onClick={setShowCardSortHandler}
        />
      </div>
      {/* Options */}
      <div className="cardsort__list">
        {cardSortData?.map((data) => {
          return (
            <div className="cardsort__option">
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

export default CardSort;

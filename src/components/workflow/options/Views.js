import { viewsData } from "@/src/helper/workflowdata/viewsData";
import Image from "next/image";
import React from "react";

const Views = ({ showViewHandler }) => {
  return (
    <div className="view__div">
      {/* Header */}
      <div className="view__header">
        <div className="view__title">
          <Image src={"/images/view_save.svg"} width={18} height={18} />
          <span className="heading__5">Views</span>
        </div>
        <Image
          src={"/images/cs_close.svg"}
          width={16}
          height={16}
          className="ml-8 cursor__pointer"
          onClick={showViewHandler}
        />
      </div>
      {/* Options */}
      <div className="view__list">
        {viewsData?.map((data, index) => {
          return (
            <div className="view__option">
              <div>
                <span className={`view__dot view__dot--color--${index}`}></span>
                <span className="ml-16 heading__sub__2 ">{data}</span>
              </div>
              {index === 2 && (
                <div>
                  <Image
                    src={"/images/view_delete.svg"}
                    width={16}
                    height={16}
                    className="cursor__pointer"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Views;

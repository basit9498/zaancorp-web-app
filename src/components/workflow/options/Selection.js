import { activityAboutStatus } from "@/src/helper/workflowdata/activityAboutStatus";
import Image from "next/image";
import React, { useState } from "react";

const Selection = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div className="selection__div">
      <div
        className="selection__header"
        onClick={() => {
          setShowList(!showList);
        }}
      >
        <span>Select Project</span>
        <Image src={"/images/se_arrow chevron.svg"} width={16} height={16} />
      </div>

      {/*  */}
      {showList && (
        <div className="selection__list">
          {activityAboutStatus?.map((data, index) => {
            return (
              <div
                className="list__option--div"
                onClick={() => {
                  setShowList(!showList);
                }}
              >
                <div className="list__option">
                  <span className={`__dot __dot--color--${index}`}></span>
                  <p className="ml-6">{data} </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Selection;

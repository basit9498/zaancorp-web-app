import { activityAboutStatus } from "@/src/helper/workflowdata/activityAboutStatus";
import Image from "next/image";
import React, { useState } from "react";
import CheckBox from "./CheckBox";

const FormSelection = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div className="formselection__div">
      <div
        className="formselection__header"
        onClick={() => {
          setShowList(!showList);
        }}
      >
        <span>Enter or select name</span>
        <Image src={"/images/se_arrow chevron.svg"} width={16} height={16} />
      </div>

      {/*  */}
      {showList && (
        <div className="formselection__list">
          {activityAboutStatus?.map((data, index) => {
            return (
              <div className="list__option--div">
                <div className="list__option">
                  <CheckBox />
                  <Image
                    src={"/images/header_user_1.svg"}
                    width={24}
                    height={24}
                  />
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

export default FormSelection;

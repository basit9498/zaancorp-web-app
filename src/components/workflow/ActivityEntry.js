import Image from "next/image";
import React from "react";
import Selection from "./options/Selection";

const ActivityEntry = ({ showAddActivtyHandler }) => {
  return (
    <div className="activity__entry--section">
      <div className="activity__entry">
        {/* Header */}
        <div className="entry__header">
          <h3>Card title</h3>
          <Image
            src={"/images/add_ac_close.svg"}
            width={14}
            height={14}
            className="cursor__pointer"
            onClick={showAddActivtyHandler}
          />
        </div>
        {/* Entry Card Name */}
        <div className="entry__name">
          <textarea placeholder="Enter card name" />
        </div>
        {/* Entry Select Project */}
        <div className="entry__project--selection">
          <div className="project__selection">
            <Selection />
          </div>
          <div className="selection__btn ml-8">
            <button className="btn__text__2" onClick={showAddActivtyHandler}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityEntry;

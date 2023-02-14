import { playListFilterData } from "@/src/helper/workflowdata/filterListData";
import Image from "next/image";
import React, { useState } from "react";
import ActivityEntry from "./ActivityEntry";
import AddActivity from "./AddActivity";
import CardAction from "./options/CardAction";
import CardSort from "./options/CardSort";
import Filter from "./options/Filter";
import WorkFlowActivity from "./WorkFlowActivity";

const WorkFlowPlaylist = ({ data }) => {
  const [showAddActivty, setShowAddActivty] = useState(false);
  const [showCardSort, setShowCardSort] = useState(false);
  const [showCardAction, setShowCardAction] = useState(false);
  const [showCardFilter, setShowCardFilter] = useState(false);

  const showAddActivtyHandler = () => {
    setShowAddActivty(!showAddActivty);
  };

  const setShowCardSortHandler = () => {
    setShowCardSort(!showCardSort);
  };

  const setShowActionSortHandler = () => {
    setShowCardAction(!showCardAction);
  };

  const setShowActionFilterHandler = () => {
    setShowCardFilter(!showCardFilter);
  };
  return (
    <div className="wf__playlist--div">
      {/* playlist header */}
      <div className="playlist__header">
        <div className="playlist__header--left">
          <h2>
            {data?.title}
            <span>{` (${data?.count})`}</span>
          </h2>
          <Image
            className="ml-8 cursor__pointer"
            src={"/images/pl_fIlter.svg"}
            width={14}
            height={14}
            onClick={setShowActionFilterHandler}
          />
          <Image
            className="ml-6 cursor__pointer"
            src={"/images/pl_sort.svg"}
            width={14}
            height={14}
            onClick={setShowCardSortHandler}
          />
          {showCardSort && (
            <CardSort setShowCardSortHandler={setShowCardSortHandler} />
          )}
          {showCardAction && (
            <CardAction setShowActionSortHandler={setShowActionSortHandler} />
          )}
          {showCardFilter && (
            <Filter
              showFilterHandler={setShowActionFilterHandler}
              type="playlist"
              data={playListFilterData}
            />
          )}
        </div>
        <div className="playlist__header--right">
          <Image
            src={"/images/pl_menu_dot.svg"}
            width={18}
            height={18}
            className="cursor__pointer"
            onClick={setShowActionSortHandler}
          />
        </div>
      </div>

      {/* Activity List */}
      <div className="playlist__activty">
        <div
          className={`playlist__activty--list ${
            showAddActivty
              ? "playlist__activty--list--selected-entry"
              : "playlist__activty--list--unselected-entry"
          }`}
        >
          {data?.activity?.map((item) => {
            return <WorkFlowActivity data={item} className="width__200" />;
          })}
        </div>
        {/* Add Activity */}
        {!showAddActivty && (
          <div className="playlist__add">
            <AddActivity showAddActivtyHandler={showAddActivtyHandler} />
          </div>
        )}
      </div>
      {/* Activity Entry */}
      {showAddActivty && (
        <div>
          <ActivityEntry showAddActivtyHandler={showAddActivtyHandler} />
        </div>
      )}
    </div>
  );
};

export default WorkFlowPlaylist;

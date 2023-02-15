import { projectFilterData } from "@/src/helper/workflowdata/filterListData";
import React, { useState } from "react";
import IconButton from "../buttons/IconButton";
import RoundIconButton from "../buttons/RoundIconButton";

import Modal from "../modal/Modal";
import UserAvatar from "../UserAvatar";
import ActivityReminder from "./options/ActivityReminder";
import CardSort from "./options/CardSort";
import Filter from "./options/Filter";
import Views from "./options/Views";
import { ModalDelete } from "../modal/ModalDelete";
import SavedAsView from "../modal/SavedAsView";

const WorkFlowStatus = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const showFilterHandler = () => {
    setShowFilter(!showFilter);
  };
  const showArchiveHandler = () => {
    setShowArchive(!showArchive);
  };

  const showPinHandler = () => {
    setShowPin(!showPin);
  };

  const showViewHandler = () => {
    setShowView(!showView);
  };

  const showSortHandler = () => {
    setShowSort(!showSort);
  };
  return (
    <section className="workflow__section">
      <div className="workflow__section--div">
        <div className="workflow__avatar__options">
          {/* Heading */}
          <h2 className="heading__1">Workflow</h2>
          {/* option */}
          <div className="workflow__options">
            <RoundIconButton icon={"/images/ws_1.svg"} type="primary" />
            <RoundIconButton
              icon={"/images/ws_2.svg"}
              type="secondary"
              className="ml-8"
            />

            <RoundIconButton
              icon={"/images/ws_3.svg"}
              type="secondary"
              className="ml-8"
            />
            <RoundIconButton
              icon={"/images/ws_4.svg"}
              type="secondary"
              className="ml-8"
            />
          </div>
          {/* UserAvatar Notification */}
          <div className="workflow__useravatar">
            <UserAvatar imagePath={"/images/ws_5.svg"} />
            <UserAvatar imagePath={"/images/ws_6.svg"} />
            <UserAvatar imagePath={"/images/ws_7.svg"} />
            <UserAvatar imagePath={"/images/ws_8.svg"} />
          </div>
        </div>
        {/* Main option Filter */}
        <div className="workflow__main--options">
          <IconButton
            type="secondary"
            icon={"/images/ws_9.svg"}
            className={"mr-12 "}
            width={20}
            height={20}
            size="sm"
            onClick={showPinHandler}
          />
          <IconButton
            type="secondary"
            icon={"/images/ws_10.svg"}
            className={"mr-12 "}
            width={20}
            height={20}
            size="sm"
            onClick={showArchiveHandler}
          />
          <IconButton
            type="secondary"
            icon={"/images/ws_13.svg"}
            className={"mr-12 "}
            width={20}
            height={20}
            size="sm"
            text={"Views"}
            onClick={showViewHandler}
          />
          <IconButton
            type="secondary"
            icon={"/images/ws_11.svg"}
            className={"mr-12 "}
            width={20}
            height={20}
            size="sm"
            text={"Filter"}
            onClick={showFilterHandler}
          />
          <IconButton
            type="secondary"
            icon={"/images/ws_12.svg"}
            width={20}
            height={20}
            size="sm"
            text={"Sort by"}
            onClick={showSortHandler}
          />
          {showArchive && (
            <ActivityReminder
              showHandler={showArchiveHandler}
              type="Archive_Snooze"
            />
          )}
          {showPin && (
            <ActivityReminder showHandler={showPinHandler} type="Pinned" />
          )}

          {showView && <Views showViewHandler={showViewHandler} />}

          {showSort && (
            <CardSort setShowCardSortHandler={showSortHandler} type="main" />
          )}
        </div>
      </div>
      {showFilter && (
        // <Filter
        //   showFilterHandler={showFilterHandler}
        //   data={projectFilterData}
        // />
        <Modal>
          {/* <ModalDelete /> */}
          <SavedAsView />
        </Modal>
      )}
    </section>
  );
};

export default WorkFlowStatus;

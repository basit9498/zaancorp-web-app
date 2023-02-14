import { archiveData } from "@/src/helper/workflowdata/archiveData";
import Image from "next/image";
import React, { useState } from "react";
import WorkFlowActivity from "../WorkFlowActivity";

const ActivityReminder = ({ showHandler, type = "" }) => {
  const [tabSelected, setTabSelected] = useState("Archived");
  return (
    <div
      className={`ar__div ${
        type === "Archive_Snooze" ? "ar__div--ach--sn" : "ar__div--pined"
      }`}
    >
      {/* Header */}
      <div className="ar__header">
        {type === "Archive_Snooze" && (
          <div className="header_folder--selection">
            <button
              className={`cursor__pointer ${
                tabSelected === "Archived"
                  ? "ar__btn--selection"
                  : "ar__btn--unselection"
              }`}
              onClick={() => {
                setTabSelected("Archived");
              }}
            >
              <Image
                src={`/images/${
                  tabSelected === "Archived" ? "ar_Archive" : "ar_un_Archive"
                }.svg`}
                width={16}
                height={16}
              />
              <span className="ml-4">Archive</span>
            </button>
            <button
              className={`cursor__pointer ${
                tabSelected === "Snoozed"
                  ? "ar__btn--selection"
                  : "ar__btn--unselection"
              }`}
              onClick={() => {
                setTabSelected("Snoozed");
              }}
            >
              <Image
                src={`/images/${
                  tabSelected === "Snoozed" ? "ar_se_Snooze" : "ar_Snooze"
                }.svg`}
                width={16}
                height={16}
              />
              <span className="ml-4">Snooze</span>
            </button>
          </div>
        )}
        {type === "Pinned" && (
          <div className="header_folder--selection">
            <Image src={"/images/ar_Pinned.svg"} width={20} height={20} />
            <span className="header__title ml-4">Pinned Card</span>
          </div>
        )}
        <Image
          src={"/images/cs_close.svg"}
          width={20}
          height={20}
          className="cursor__pointer"
          onClick={showHandler}
        />
      </div>
      {/* Searching */}
      <div className="ar__search">
        <div>
          <Image src={"/images/ar_search.svg"} width={16} height={16} />
          <input className="ml-8" placeholder="Search" />
        </div>
      </div>

      {/* Activity Detail */}
      <div className="ar__activty">
        {type === "Archive_Snooze" &&
          archiveData?.map((data) => {
            return (
              <WorkFlowActivity
                data={data}
                className="width__257"
                footer={true}
                footerType={tabSelected}
              />
            );
          })}
        {type === "Pinned" &&
          archiveData?.map((data) => {
            return <WorkFlowActivity data={data} className="width__257" />;
          })}
        {/* {archiveData?.map((data) => {
          return (
            <WorkFlowActivity
              data={data}
              className="width__257"
              footer={true}
              footerType={tabSelected}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default ActivityReminder;

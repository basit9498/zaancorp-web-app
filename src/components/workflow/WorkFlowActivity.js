import { activityAboutStatus } from "@/src/helper/workflowdata/activityAboutStatus";
import Image from "next/image";
import React from "react";

const WorkFlowActivity = ({
  data,
  className,
  footer = false,
  footerType = "",
}) => {
  return (
    <div className={`wf__acticity--div ${className}`}>
      <div className="wf__acticity">
        {/* Activity Header */}
        <div className="acticity__header">
          <div className="header__dot">
            <span
              className={`__dot __dot--color--${activityAboutStatus.findIndex(
                (status) => status === data?.about
              )}`}
            ></span>
            <p className="ml-4">{data?.about}</p>
          </div>
          {data?.tag && <Image src={data?.tag} width={14} height={14} />}
        </div>
        {/* Activty Title */}
        <div className="acticity__title">
          <h3>{data?.title}</h3>
        </div>
        {/* Status bar */}
        {(data?.status || data?.showStatus) && (
          <div className="acticity__status">
            {data?.status ? (
              data?.status.map((sts) => {
                return (
                  <>
                    <span>{sts}</span>
                  </>
                );
              })
            ) : (
              <>
                {data?.showStatus && (
                  <>
                    <span className="status__size"></span>{" "}
                    <span className="status__size"></span>
                  </>
                )}
              </>
            )}
          </div>
        )}

        {/*Activity Detail */}
        <div className="acticity__detail">
          <div className="acticity__detail--options">
            <Image src={"/images/ac_description.svg"} width={14} height={14} />
          </div>
          {data?.options?.message && (
            <div className="acticity__detail--options">
              <Image src={"/images/ac_message.svg"} width={14} height={14} />
              <span>{data?.options?.message}</span>
            </div>
          )}
          {data?.options?.checklist && (
            <div className="acticity__detail--options">
              <Image src={"/images/ac_checklist.svg"} width={14} height={14} />
              <span>{data?.options?.checklist}</span>
            </div>
          )}
          {data?.options?.link && (
            <div className="acticity__detail--options">
              <Image src={"/images/ac_link.svg"} width={14} height={14} />
              <span>{data?.options?.link}</span>
            </div>
          )}
        </div>

        {/*Created Detail */}
        <div className="acticity__created">
          <div className="acticity__created--tag">
            Created 3 days ago
            {/* <span>Created 3 days ago</span> */}
          </div>
          <Image
            className="avatar__rounded--50"
            src={"/images/ac_creater.svg"}
            width={18}
            height={18}
          />
        </div>
      </div>
      {/* Footer */}
      {footer && (
        <div className="acticity__footer">
          <div className="footer__detail">
            <Image
              className="avatar__rounded--50"
              src={"/images/ac_creater.svg"}
              width={16}
              height={16}
            />
            {footerType === "Archived" ? (
              <p className="ml-4">
                Archived in <strong>Completed</strong> 3 days ago
              </p>
            ) : (
              <p className="ml-4">
                Snoozed until <strong>Oct 24 at 10:00 PM</strong>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkFlowActivity;

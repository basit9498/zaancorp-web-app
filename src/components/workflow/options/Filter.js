import { projectFilterData } from "@/src/helper/workflowdata/filterListData";
import Image from "next/image";
import React, { useState } from "react";
import CheckBox from "../../Form/CheckBox";
import Modal from "../../modal/Modal";
import SavedAsView from "../../modal/SavedAsView";

const Filter = ({ showFilterHandler, type = "", data = [] }) => {
  const [modelOpen, setModelOpen] = useState(false);

  const setModelOpenHandler = () => {
    setModelOpen(!modelOpen);
  };
  return (
    <>
      <div
        className={`filter__section ${
          type === "playlist" ? "filter__playlistcard" : "filter__project"
        }`}
      >
        {/* Header */}
        <div className="filter__header">
          <div className="header__title">
            {type !== "playlist" && (
              <Image src={"/images/pr_filter.svg"} width={20} height={20} />
            )}

            <span className="ml-8 heading__2">Filters</span>
          </div>
          <Image
            src={"/images/cs_close.svg"}
            width={20}
            height={20}
            className="cursor__pointer"
            onClick={showFilterHandler}
          />
        </div>

        <div
          className={`filter__group ${
            type === "playlist"
              ? "filter__group--height--playlist"
              : "filter__group--height--project"
          }`}
        >
          {/* Projects */}
          {data?.projects && (
            <div className="filter__list pt-20">
              <h3 className="heading__5">Project</h3>
              <div className="list__options">
                {data?.projects?.map((data) => {
                  return <CheckBox text={data} dotStatus={true} />;
                })}
              </div>
              {type === "playlist" && (
                <div className="filter__sub--show mt-12 cursor__pointer">
                  <span className="heading__sub__3">Show all...</span>
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          {data?.tags && (
            <div className="filter__list pt-24">
              <h3 className="heading__5">Tags</h3>
              <div className="list__options">
                {data?.tags?.map((data) => {
                  return <CheckBox text={data} dotStatus={false} bg={true} />;
                })}
              </div>
              <div className="filter__sub--show mt-12 cursor__pointer">
                <span className="heading__sub__3">Show all...</span>
              </div>
            </div>
          )}

          {/* Cards */}
          {data?.cards && (
            <div className="filter__list pt-24">
              <h3 className="heading__5">Card</h3>
              <div className="list__options">
                {data?.cards?.map((data) => {
                  return <CheckBox text={data} dotStatus={false} bg={false} />;
                })}
              </div>
            </div>
          )}

          {/* Assigned To */}
          {data?.assigned && (
            <div className="filter__list pt-24">
              <h3 className="heading__5">Assigned To</h3>
              <div className="list__options">
                {data?.assigned?.map((data) => {
                  return <CheckBox text={data.title} avatar={data.img} />;
                })}
              </div>
            </div>
          )}
        </div>

        {/* filter Footer */}
        <div className="filter__footer">
          <div className="footer__left">
            {type !== "playlist" && (
              <button
                className="btn__text__1 footer__btn"
                onClick={setModelOpenHandler}
              >
                Save as View
              </button>
            )}
          </div>

          <div className="footer__right">
            <button className=" btn__text__1 footer__btn">Clear</button>
            <button className="btn__text__1 footer__btn ml-4">Apply</button>
          </div>
        </div>
      </div>

      {/* Model */}
      {modelOpen && (
        <Modal>
          <SavedAsView modelHandler={setModelOpenHandler} />
        </Modal>
      )}
    </>
  );
};

export default Filter;

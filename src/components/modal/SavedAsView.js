import Image from "next/image";
import React from "react";
import FormSelection from "../Form/FormSelection";

const SavedAsView = () => {
  return (
    <div className="savemodal__div">
      <div className="modal__header">
        <div className="savemodal__header--title--div">
          <Image
            src={"/images/ws_13.svg"}
            width={20}
            height={20}
            className="mr-12"
          />
          <h4 className="heading__4">Saved as View</h4>
        </div>
        <div>
          <Image
            src={"/images/cs_close.svg"}
            width={20}
            height={20}
            className="cursor__pointer"
          />
        </div>
      </div>
      <div className="modal__body savemodal__body">
        {/* View Name */}
        <div className="model__inputcontrol">
          <lable className="btn__text__3">View Name</lable>
          <div className="inputfield__detail mt-16">
            <div className="inputfield__div">
              <input placeholder="Enter Name" />
            </div>
            <div className="input__right--side">
              <span className="box__black ml-8"></span>
              <Image
                src={"/images/header_user_option.svg"}
                width={11}
                height={5.5}
                className="cursor__pointer ml-6"
              />
            </div>
          </div>
        </div>

        {/* Share with others */}
        <div className="model__inputcontrol mt-16">
          <p className="btn__text__3 mb-8">Share with others</p>
          <FormSelection />
        </div>
      </div>

      <div className="modal__footer savemodal__footer">
        <button className="modal_btn  btn__text__2">Save</button>
      </div>
    </div>
  );
};

export default SavedAsView;

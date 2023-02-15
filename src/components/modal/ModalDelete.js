import Image from "next/image";
import React from "react";

export const ModalDelete = () => {
  return (
    <div className="delmodal__div">
      <div className="modal__header">
        <div>
          <h4 className="heading__4">Delete</h4>
        </div>
        <div>
          <Image
            src={"/images/cs_close.svg"}
            width={20}
            height={20}
            className="cursor__pointer"
            // onClick={showFilterHandler}
          />
        </div>
      </div>
      <div className="modal__body delmodal__body">
        <p className="heading__sub__1">
          Are you sure you want to delete this Filter?
        </p>
      </div>

      <div className="modal__footer delmodal__footer">
        <button className="modal_btn mr-12 btn__text__2">Cancel</button>
        <button className="modal_btn btn__text__2">Delete</button>
      </div>
    </div>
  );
};

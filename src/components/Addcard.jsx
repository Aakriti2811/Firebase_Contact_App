import React from "react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

const Addcard = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <> 
          {/* <div className="absolute top-36  "></div> */}
          <div
            className="backdrop-blur h-full w-screen fixed top-0 flex justify-center items-center"
          >
            <div className="bg-slate-300  w-[80vw] max-w-[500px] min-h-[250px] rounded-xl z-50 ">
              <div className="flex justify-end">
                <IoCloseCircleOutline
                  className="text-3xl m-1 cursor-pointer"
                  onClick={onClose}
                />
              </div>
              {children}
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("addCard-root")
  );
};
export default Addcard;

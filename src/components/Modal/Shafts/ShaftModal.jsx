import React from "react";
import ShaftVBA from "../../VBA/Shafts/ShaftVBA";

function ShaftModal() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("shaftId").showModal()}
      >
        see code
      </button>
      <dialog id="shaftId" className="modal" data-theme="dark">
        <div className="modal-box w-11/12 max-w-5xl">
            <ShaftVBA />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary ">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ShaftModal;

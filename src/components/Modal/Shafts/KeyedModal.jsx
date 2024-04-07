import React from "react";
import KeyedVBA from "../../VBA/Shafts/KeyedVBA.jsx";

function KeyedModal() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("keyedId").showModal()}
      >
        see code
      </button>
      <dialog id="keyedId" className="modal" data-theme="dark">
        <div className="modal-box w-11/12 max-w-5xl">
            <KeyedVBA />
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

export default KeyedModal;

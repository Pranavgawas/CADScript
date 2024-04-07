import React from "react";
import SplinedVBA from "../../VBA/Shafts/SplinedVBA.jsx";

function SplinedModal() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("splinedId").showModal()}
      >
        see code
      </button>
      <dialog id="splinedId" className="modal" data-theme="dark">
        <div className="modal-box w-11/12 max-w-5xl">
            <SplinedVBA />
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

export default SplinedModal;

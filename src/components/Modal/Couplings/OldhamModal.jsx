import React from "react";
import OldhamVBA from "../../VBA/Couplings/OldhamVBA.jsx";

function OldhamModal() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("oldhamId").showModal()}
      >
        see code
      </button>
      <dialog id="oldhamId" className="modal" data-theme="dark">
        <div className="modal-box w-11/12 max-w-5xl">
            <OldhamVBA />
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

export default OldhamModal;

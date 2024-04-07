import React from "react";
import UniversalVBA from "../../VBA/Couplings/UniversalVBA.jsx";

function UniversalModal() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("univarsalId").showModal()}
      >
        see code
      </button>
      <dialog id="univarsalId" className="modal" data-theme="dark">
        <div className="modal-box w-11/12 max-w-5xl">
            <UniversalVBA />
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

export default UniversalModal;

import React from "react";
import RigidVBA from "../../VBA/Couplings/RigidVBA.jsx";

function RigidModal() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("rigidId").showModal()}
      >
        see code
      </button>
      <dialog id="rigidId" className="modal" data-theme="dark">
        <div className="modal-box w-11/12 max-w-5xl">
            <RigidVBA />
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

export default RigidModal;

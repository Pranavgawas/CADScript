import React from "react";
import FlangeVBA from "../../VBA/Couplings/FlangeVBA.jsx";

function FlangeModal() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("flangeId").showModal()}
      >
        see code
      </button>
      <dialog id="flangeId" className="modal" data-theme="dark">
        <div className="modal-box w-11/12 max-w-5xl">
            <FlangeVBA />
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

export default FlangeModal;

import React from "react";
import FlangedVBA from "../../VBA/Shafts/FlangedVBA";

function FlangedModal() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("flangedId").showModal()}
      >
        see code
      </button>
      <dialog id="flangedId" className="modal" data-theme="dark">
        <div className="modal-box w-11/12 max-w-5xl">
            <FlangedVBA />
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

export default FlangedModal;

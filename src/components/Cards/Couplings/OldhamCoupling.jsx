import React from "react";
import image from "../../../assets/images.json";
import OldhamModal from "../../Modal/Couplings/OldhamModal.jsx";

function OldhamCoupling() {
  const oldhamcouplingURL = image["oldhamcoupling"];
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={oldhamcouplingURL}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <div className="card-actions justify-end">
          <OldhamModal />
        </div>
      </div>
    </div>
  );
}

export default OldhamCoupling;



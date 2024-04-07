import React from "react";
import SplinedModal from "../../Modal/Shafts/SplinedModal.jsx";
import image from '../../../assets/images.json';

function SplinedShaft() {
    const splinedShaftURL = image["splinedshaft"];
  return (
    <div className="card card-compact w-90 bg-base-100 shadow-xl">
      <figure>
        <img
          src={splinedShaftURL}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shaft</h2>
        <div className="card-actions justify-end">
          <SplinedModal />
        </div>
      </div>
    </div>
  );
}

export default SplinedShaft;

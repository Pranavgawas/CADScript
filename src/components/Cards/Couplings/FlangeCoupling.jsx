import React from "react";
import image from '../../../assets/images.json';
import FlangeModal from "../../Modal/Couplings/FlangeModal.jsx";

function FlangeCoupling() {
  const flangecouplingURL = image["flangecopling"];
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={flangecouplingURL}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Flange Coupling</h2>
        <div className="card-actions justify-end">
        <FlangeModal />
        </div>
      </div>
    </div>
  );
}

export default FlangeCoupling;

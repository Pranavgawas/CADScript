import React from "react";
import image from '../../../assets/images.json';
import UniversalModal from "../../Modal/Couplings/UniversalModal.jsx";

function UniversalCoupling() {
    const universalcouplingURL = image["universalcoupling"];
  return (
    <div className="card card-compact w-90 bg-base-100 shadow-xl">
      <figure>
        <img
          src={universalcouplingURL}
          alt="universal coupling"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Universal Coupling</h2>
        <div className="card-actions justify-end">
          <UniversalModal />
        </div>
      </div>
    </div>
  );
}

export default UniversalCoupling;

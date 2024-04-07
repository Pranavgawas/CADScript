import React from "react";
import image from '../../../assets/images.json';
import RigidModal from "../../Modal/Couplings/RigidModal.jsx";

function RigidCoupling() {
    const rigidcouplingURL = image["rigidcoupling"];
  return (
    <div className="card card-compact w-90 bg-base-100 shadow-xl">
      <figure>
        <img
          src={rigidcouplingURL}
          alt="rigidcoupling"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Rigid Coupling</h2>
        <div className="card-actions justify-end">
          <RigidModal />
        </div>
      </div>
    </div>
  );
}

export default RigidCoupling;

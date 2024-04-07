import React from "react";
import image from '../../../assets/images.json';
import FlangedModal from "../../Modal/Shafts/FlangedModal.jsx";


function FlangedShaft() {
    const flangedShaftURL = image["flangedshaft"];
  return (
    <div className="card card-compact w-90 bg-base-100 shadow-xl">
      <figure>
        <img
          src={flangedShaftURL}
          alt="Shaft"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Flanged Shaft</h2>
        <div className="card-actions justify-end">
          <FlangedModal />
        </div>
      </div>
    </div>
  );
}

export default FlangedShaft;

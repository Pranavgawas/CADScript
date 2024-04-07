import React from "react";
import KeyedModal from "../../Modal/Shafts/KeyedModal.jsx";
import image from '../../../assets/images.json';

function KeyedShaft() {
    const keyedShaftURL = image["keyedshaft"];
  return (
    <div className="card card-compact w-90 bg-base-100 shadow-xl">
      <figure>
        <img
          src={keyedShaftURL}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shaft</h2>
        <div className="card-actions justify-end">
          <KeyedModal />
        </div>
      </div>
    </div>
  );
}

export default KeyedShaft;

import React from "react";
import ShaftModal from "../../Modal/Shafts/ShaftModal";
import image from '../../../assets/images.json';

function Shaft() {
    const shaftURL = image["shaft"];
  return (
    <div className="card card-compact w-90 bg-base-100 shadow-xl">
      <figure>
        <img
          src={shaftURL}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shaft</h2>
        <div className="card-actions justify-end">
          <ShaftModal />
        </div>
      </div>
    </div>
  );
}

export default Shaft;

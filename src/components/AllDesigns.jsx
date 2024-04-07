import React from 'react';
import Shaft from './Cards/Shafts/Shaft.jsx';
import KeyedShaft from './Cards/Shafts/KeyedShaft.jsx';
import FlangedShaft from './Cards/Shafts/FlangedShaft.jsx';
import SplinedShaft from './Cards/Shafts/SplinedShaft.jsx';
import Divider from './Divider.jsx';
import FlangeCoupling from './Cards/Couplings/FlangeCoupling.jsx';
import OldhamCoupling from './Cards/Couplings/OldhamCoupling.jsx';
import RigidCoupling from './Cards/Couplings/RigidCoupling.jsx';
import UnivelsalCoupling from './Cards/Couplings/UnivarsalCoupling.jsx';

function AllDesigns() {
  return (
    <>
    <h1 className="mb-4 text-4xl font-bold">Shafts :</h1>
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Shaft />
        <KeyedShaft />
        <FlangedShaft />
        <SplinedShaft />
    </div>
    <Divider />
    <h1 className="mb-4 text-4xl font-bold">Coupling :</h1>
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <FlangeCoupling />
        <OldhamCoupling />
        <RigidCoupling />
        <UnivelsalCoupling />
    </div>

    </>
  )
}

export default AllDesigns
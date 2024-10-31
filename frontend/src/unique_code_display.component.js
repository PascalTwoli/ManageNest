import { useEffect, useState } from 'react';

function UniqueCodeDisplay({ uniqueCode }) {


  return (
    <div>
      {uniqueCode ? (
        <>
            <span>{uniqueCode}</span><br/>
            <span>Use this code to unlock your house.</span>
        </>
      ) : (
        <p>No unique code found for this tenant.</p>

      )}
    </div>
  );
}

export default UniqueCodeDisplay;
import React, { useState } from 'react'

export default function ToggleBtn({isToggled, onToggle}) {

    const [toggled, setToggled] = useState(false);

    // const handleToggle = () => {
    //   setToggled(!toggled);
    //   onToggle(!toggled); // pass the new toggle state to the parent
    // };
  return (
    <div>
      <button 
        className={`toggle-btn ${isToggled ? 'toggled' : ""}`}
        onClick={onToggle} 
      >
        <div className='thumb'>  </div>
      </button>
    </div>
  )
}

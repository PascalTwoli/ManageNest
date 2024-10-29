import React, { useState } from 'react'

export default function ToggleBtn() {

    const [toggled, setToggled] = useState(false);
  return (
    <div>
      <button 
        className={`toggle-btn ${toggled ? 'toggled' : ""}`}
        onClick={() => {
            setToggled(!toggled)
            console.log(
                "the toggle button was clicked "
            )
        }} 
      >
        <div className='thumb'>  </div>
      </button>
    </div>
  )
}

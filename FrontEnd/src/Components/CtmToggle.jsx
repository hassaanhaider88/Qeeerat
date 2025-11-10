import React from "react";
import './CtmToggle.css'
const CtmToggle = ({ IsONForNotify, setIsONForNotify,handleNotifyToggle }) => {
  return (
    <div class="switch-wrapper">
      <input
        onChange={handleNotifyToggle}
        checked={IsONForNotify}
        value={IsONForNotify}
        type="checkbox"
        id="switch-one-corner"
      />
    </div>
  );
};

export default CtmToggle;

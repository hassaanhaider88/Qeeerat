import React from "react";
import './CtmToggle.css'
const CtmToggle = ({ IsONForNotify, setIsONForNotify }) => {
  return (
    <div class="switch-wrapper">
      <input
        onChange={() => setIsONForNotify(!IsONForNotify)}
        checked={IsONForNotify}
        value={IsONForNotify}
        type="checkbox"
        id="switch-one-corner"
      />
    </div>
  );
};

export default CtmToggle;

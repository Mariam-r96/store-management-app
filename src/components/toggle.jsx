import React, { useState } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const Toggle = () => {
  const [toggle, settoggle] = useState(true);

  const onToggle = (checked) => {
    console.log(checked);
    settoggle({ checked });
  };

  return (
    <>
      <h5>Choose your way! </h5>
      <BootstrapSwitchButton
        className="custom_switchBtn"
        width={154}
        height={55}
        offstyle="outline-danger"
        onstyle="outline-info"
        checked={toggle}
        onlabel="Direct Sell"
        offlabel="Food Panda"
        onChange={onToggle}
      />
    </>
  );
};

export default Toggle;

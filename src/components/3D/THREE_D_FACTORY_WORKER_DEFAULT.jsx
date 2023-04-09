import React from "react";
const componentPath = require("../../assets/Factory worker/Default/3D/factory_worker_3d_default.png");

export function THREE_D_FACTORY_WORKER_DEFAULT() {
  return (
    <img
      src={componentPath}
      alt="THREE_D_FACTORY_WORKER_DEFAULT"
      style={{ width: "100%" }}
    />
  );
}

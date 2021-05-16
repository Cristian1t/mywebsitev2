import React, { useContext } from "react";
import { ComponentContext } from "./Theme/ComponentContext";

function MainComponent() {
  const { component } = useContext(ComponentContext);
  return <div>{component}</div>;
}

export default MainComponent;

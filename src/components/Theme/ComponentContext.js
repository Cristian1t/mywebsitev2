import React, { createContext, useState } from "react";
export const ComponentContext = createContext();

export const ComponentProvider = ({ children }) => {
  const [component, setComponent] = useState();

  return (
    <ComponentContext.Provider value={{ component, setComponent }}>
      {children}
    </ComponentContext.Provider>
  );
};

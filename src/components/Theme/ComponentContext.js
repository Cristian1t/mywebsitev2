import React, { createContext, useState } from 'react';
export const ComponentContext = createContext();

export const ComponentProvider = ({ children }) => {
  const [project, setProject] = useState();

  return (
    <ComponentContext.Provider value={{ project, setProject }}>
      {children}
    </ComponentContext.Provider>
  );
};

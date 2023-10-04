import React, { createContext, useState } from "react";

export const Infos = createContext({});

export default function InfosProvider({ children }) {
  const [dados, setDados] = useState([]);

  return (
    <Infos.Provider value={{ dados, setDados }}>{children}</Infos.Provider>
  );
}

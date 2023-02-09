import React, { createContext, useEffect, useState } from "react";

export const RICK_CONTEXT = createContext();

const ContextRick = ({ children }) => {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacter(data.results));
  }, []);

  const value = { characters };
  return (
    <RICK_CONTEXT.Provider value={value}>{children}</RICK_CONTEXT.Provider>
  );
};

export default ContextRick;

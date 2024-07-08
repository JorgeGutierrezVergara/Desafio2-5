import { createContext, useState } from "react";
export const CounterContext = createContext();
const CounterProvider = ({ children }) => {
  const [favList, setFavList] = useState([]);
  return (
    <CounterContext.Provider value={{ favList, setFavList }}>
      {children}
    </CounterContext.Provider>
  );
};
export default CounterProvider;

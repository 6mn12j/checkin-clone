import { createContext, useState, useEffect } from 'react';

const EntryContext = createContext({});

const EntryProvider = ({ children }) => {
  const [entry, setEntry] = useState({
    gaepo: 0,
    seocho: 0,
    maxCapGaepo: 0,
    maxCapSeocho: 0,
  });

  useEffect(() => {
    // async await 들어갈 자리
    setEntry({
      gaepo: 24,
      seocho: 60,
      maxCapGaepo: 142,
      maxCapSeocho: 142,
    })
  }, []);

  return (
    <EntryContext.Provider
      value={{
        entry
      }}
    >
      {children}
    </EntryContext.Provider>
  );
};

export { EntryContext, EntryProvider };
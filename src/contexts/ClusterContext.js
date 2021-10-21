import { createContext, useState, useEffect } from 'react';

const ClusterContext = createContext({});

const ClusterProvider = ({ children }) => {
  const [headCount, setHeadCount] = useState({
    gaepo: 0,
    seocho: 0,
    maxCapGaepo: 0,
    maxCapSeocho: 0,
  });

  useEffect(() => {
    // async await 들어갈 자리
    setHeadCount({
      gaepo: 24,
      seocho: 60,
      maxCapGaepo: 142,
      maxCapSeocho: 142,
    });
  }, []);

  return (
    <ClusterContext.Provider
      value={{
        headCount,
      }}
    >
      {children}
    </ClusterContext.Provider>
  );
};

export { ClusterContext, ClusterProvider };

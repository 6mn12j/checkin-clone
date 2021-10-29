import { createContext, useState, useEffect } from 'react';
import { getClusterStatus } from '../api/api';

type Props = {
  children?: React.ReactNode;
}

const ClusterContext = createContext({});

const ClusterProvider = ({ children }: Props) => {
  const [headCount, setHeadCount] = useState({
    gaepo: 0,
    seocho: 0,
    maxCapGaepo: 150,
    maxCapSeocho: 150,
  });

  useEffect(() => {
    const fetcheData = async () => {
      const response = await getClusterStatus();
      const { data } = response.data;
      setHeadCount({
        ...data,
      });
      return;
    };
    fetcheData();
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

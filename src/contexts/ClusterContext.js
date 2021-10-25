import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ClusterContext = createContext({});

const ClusterProvider = ({ children }) => {
  const [headCount, setHeadCount] = useState({
    gaepo: 0,
    seocho: 0,
    maxCapGaepo: 150,
    maxCapSeocho: 150,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchCluster = async () => {
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       const response = await axios({
	// 		  	method: "get",
  //         url: "http://gpark.42cadet.kr/cluster/",
  //       });
  //       console.log(response.data);
  //       setHeadCount(response.data);
  //     } catch (e) {
  //       setError(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchCluster();
  // }, []);

  useEffect(() => {
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
        loading,
        error
      }}
    >
      {children}
    </ClusterContext.Provider>
  );
};

export { ClusterContext, ClusterProvider };

import { createContext, useState, useEffect } from 'react';
import { getUserInfo } from '../api/api';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userCursus: '',
    cardNumber: null,
  });
  const name = 'jihuhwan';
  useEffect(() => {
    const fetcheData = async () => {
      const respones = await getUserInfo(name);
      const { data } = respones.data;
      console.log(data);
      setUserInfo({ ...data });
      return;
    };
    fetcheData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

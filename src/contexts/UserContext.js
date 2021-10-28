import { createContext, useState, useEffect } from 'react';
import { getUserInfo } from '../api/api';
import userDefault from '../images/user-default.png';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userCursus: '',
    cardNumber: null,
    userImage: userDefault,
  });
  const name = 'jihuhwan';

  useEffect(() => {
    const fetcheData = async () => {
      const respones = await getUserInfo(name);
      const { data } = respones.data;
      setUserInfo({
        ...data,
        userImage: `https://cdn.intra.42.fr/users/${data.userId}.jpg`,
      });
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

import { createContext, useState, useEffect } from 'react';
import { getUserInfo } from '../api/api';
import userDefault from '../images/user-default.png';
import { decoding, getToken } from '../utils/utils';

export type Props = {
  children: React.ReactNode;
};

const UserContext = createContext({});

const UserProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userCursus: '',
    cardNumber: null,
    userImage: userDefault,
  });

  //로그인 이후에 token 이있음. 지금은 token(쿠키)이없으면 ''으로 그냥 넣음.
  const name = document.cookie
    ? decoding(getToken()).split(':')[1].split(',')[0].replace(/"/g, '')
    : '';

  useEffect(() => {
    if (name) {
      setLoading(true);
      const fetcheData = async () => {
        const respones = await getUserInfo(name);
        const { data } = respones.data;
        setUserInfo({
          ...data,
          userImage: `https://cdn.intra.42.fr/users/${data.userId}.jpg`,
        });
        setLoading(false);
        return;
      };
      fetcheData();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading,
        userInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

import { createContext, useState, useEffect } from 'react';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    userImage: '',
    userId: '',
    userCursus: '',
    cardNumber: null,
  });

  useEffect(() => {
    const fetcheData = async () => {
      // async await 들어갈 자리
      return {
        userImage: '',
        userId: '',
        userCursus: '',
        cardNumber: null,
      };
    };
    const fetchedData = fetcheData();
    console.log(`fetchedData ${JSON.stringify(fetchedData)}`);
    //const { userImage, userId, userCursus, cardNumber } = fetchedData;
    setUserInfo({
      userImage:
        'https://ca.slack-edge.com/T039P7U66-U02030HEWK1-37eba79f5edf-512',
      userId: 'minjupar',
      userCursus: '42cursus',
      cardNumber: '124',
    });
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

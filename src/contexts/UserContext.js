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
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fwn8ds%2Fbtq5u4RsTuG%2F7KMKUbqv3CLSbdigBxxnJ0%2Fimg.png',
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

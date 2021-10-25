import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import userDefault from '../images/user-default.png';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    userImage: userDefault,
    userId: '-',
    userCursus: '-',
    cardNumber: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios({
			  	method: "get",
          url: "http://gpark.42cadet.kr/user/",
        });
        const res = response.data.data;
        setUserInfo ({
          userImage: `https://cdn.intra.42.fr/users/medium_${res.userId}.jpg`,
          userId: res.userId,
          userCursus: res.userCursus,
          cardNumber: res.cardNumber,
        });
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);
  
  // useEffect(() => {
  //   const fetcheData = async () => {
  //     // async await 들어갈 자리
  //     return {
  //       userImage: '',
  //       userId: '',
  //       userCursus: '',
  //       cardNumber: null,
  //     };
  //   };
  //   const fetchedData = fetcheData();
  //   // console.log(`fetchedData ${JSON.stringify(fetchedData)}`);
  //   //const { userImage, userId, userCursus, cardNumber } = fetchedData;
  //   setUserInfo({
  //     userImage:
  //       'https://ca.slack-edge.com/T039P7U66-U02030HEWK1-37eba79f5edf-512',
  //     userId: 'minjupar',
  //     userCursus: '42cursus',
  //     cardNumber: '124',
  //   });
  // }, []);

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

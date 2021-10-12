import { createContext, useState, useEffect } from 'react';

const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // 쿠키에 로그인 데이터 있나 없나 확인하는 부분
    setIsLogin(true);
  }, []);

  return (
    <LoginContext.Provider
      value={{
        isLogin
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };

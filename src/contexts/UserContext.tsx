import React, { Dispatch, createContext, useReducer, useContext } from 'react';

import userDefault from '../images/user-default.png';

export type Props = {
  children: React.ReactNode;
};

const initialState = {
  username: '',
  userCursus: '',
  cardNumber: '',
  userImage: userDefault,
  checkIn: '',
  checkOut: '',
  isLogin: false,
};

export type UserState = {
  username: string;
  userCursus: string;
  cardNumber: null | number | string;
  userImage: string;
  checkIn: null | string | Date;
  checkOut: null | string | Date;
  isLogin: boolean;
};

type UserAction =
  | { type: 'SET_USER_INFO'; userInfo: UserState }
  | { type: 'SET_USER_ID'; username: string }
  | { type: 'SET_LOGIN' }
  | { type: 'SET_LOGOUT' };

type UserDispatch = Dispatch<UserAction>;

const UserStateContext = createContext<UserState>(initialState);
const UserDispatchContext = createContext<UserDispatch>(() => null);

export const useUserState = (): UserState => {
  const state = useContext(UserStateContext);
  return state;
};

export const useUserDispatch = (): UserDispatch => {
  const dispatch = useContext(UserDispatchContext);
  return dispatch;
};

const reducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_USER_ID':
      console.log(action);
      return {
        ...state,
        username: action.username,
      };
    case 'SET_USER_INFO':
      return {
        ...action.userInfo,
      };
    case 'SET_LOGIN':
      return {
        ...state,
        isLogin: true,
      };
    case 'SET_LOGOUT':
      return {
        ...state,
        isLogin: false,
      };

    default:
      return state;
  }
};

const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export { UserStateContext, UserDispatchContext, UserProvider };

import { createContext, useContext, useEffect, useReducer, Dispatch } from 'react';
import { getClusterStatus } from '../api/api';
// import type { AxiosError } from 'axios';

type Props = {
  children?: React.ReactNode;
};

// 클러스터 상태를 위한 타입
type Cluster = {
  gaepo: number;
  seocho: number;
  maxCapGaepo: number;
  maxCapSeocho: number;
};

// 비동기 요청을 위한 타입
type ClusterState = {
  loading: boolean;
  error: any;
  data: null | Cluster;
};

// 액션들을 위한 타입
type Action =
  | { type: 'LOADING' }
  | { type: 'GET_CLUSTER'; data: Cluster }
  | { type: 'FAILURE'; error: any };

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type ClusterDispatch = Dispatch<Action>;

const initialState: ClusterState = {
  loading: false,
  error: null,
  data: {
    gaepo: 0,
    seocho: 0,
    maxCapGaepo: 0,
    maxCapSeocho: 0,
  },
};

// 리듀서
const reducer = (state: ClusterState, action: Action): ClusterState => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_CLUSTER':
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case 'FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      throw new Error('invalid action type');
  }
};

// Context 만들기
const ClusterStateContext = createContext<null | ClusterState>(null);
const ClusterDispatchContext = createContext<null | ClusterDispatch>(null);

// API를 요청하는 함수
export const getCluster = async (dispatch: React.Dispatch<Action>) => {
  dispatch({ type: 'LOADING' });
  try {
    const response = await getClusterStatus();
    console.log(response.data);
    dispatch({ type: 'GET_CLUSTER', data: response.data.data });
  } catch (e) {
    dispatch({ type: 'FAILURE', error: e });
  }
};

// provider 반환
export const ClusterProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCluster(dispatch);
  }, []);

  return (
    <ClusterStateContext.Provider value={state}>
      <ClusterDispatchContext.Provider value={dispatch}>
        {children}
      </ClusterDispatchContext.Provider>
    </ClusterStateContext.Provider>
  );
};

// state, dispatch 를 잘 쓰기위한 커스텀 hook
export const useClusterState = () => {
  const ClusterState = useContext(ClusterStateContext);
  if (!ClusterState) throw new Error('Cannot find ClusterProvider'); 
  return ClusterState;
};

export const useClusterDispatch = () => {
  const ClusterDispatch = useContext(ClusterDispatchContext);
  if (!ClusterDispatch) throw new Error('Cannot find ClusterProvider');
  return ClusterDispatch;
};
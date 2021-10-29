import styles from './styles/App.module.css';
import { UserProvider } from './contexts/UserContext';
import { ClusterProvider } from './contexts/ClusterContext';

import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import CheckInOutPage from './pages/CheckInOutPage';

const App = () => {
  return (
    <main className={styles.wrapper}>
      <BrowserRouter>
        <ClusterProvider>
          <UserProvider>
            <Route path="/" exact component={MainPage} />
            <Route path="/checkin" exact component={CheckInOutPage} />
          </UserProvider>
        </ClusterProvider>
      </BrowserRouter>
    </main>
  );
};

export default App;

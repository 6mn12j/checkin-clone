import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ClusterProvider } from './contexts/ClusterContext'
import MainPage from './pages/MainPage';
import CheckInOutPage from './pages/CheckInOutPage'
import styles from './styles/App.module.css';

const App = () => {
  return (
    <main className={styles.wrapper}>
      <BrowserRouter>
        <ClusterProvider>
          <Route path='/' exact component={MainPage} />
          <Route path='/checkin' exact component={CheckInOutPage} />
        </ClusterProvider>
      </BrowserRouter>
    </main>
  ); 
}

export default App;

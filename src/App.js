import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { EntryProvider } from './contexts/EntryContext'
import Main from './pages/Main';
import CheckInOut from './pages/CheckInOut'
import styles from './styles/App.module.css';

const App = () => {
  return (
    <main className={styles.wrapper}>
      <BrowserRouter>
        <EntryProvider>
          <Route path='/' exact component={Main} />
          <Route path='/checkin' exact component={CheckInOut} />
        </EntryProvider>
      </BrowserRouter>
    </main>
  ); 
}

export default App;

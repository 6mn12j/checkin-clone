import './App.css';
import { UserProvider } from './contexts/UserContext';
import CheckInOutPage from './pages/CheckInOutPage';

function App() {
  return (
    <UserProvider>
      <CheckInOutPage />;
    </UserProvider>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import TransactionPage from './components/TransactionsPage/TransactionPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/transactions' element={<TransactionPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

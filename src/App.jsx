import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TransactionPage from './components/TransactionsPage/TransactionPage';
import HomePage from './components/LandingPage/HomePage';
import LandingPage from './components/LandingPage/LandingPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/budget" element={<LandingPage />} />
          <Route path='/transactions' element={<TransactionPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

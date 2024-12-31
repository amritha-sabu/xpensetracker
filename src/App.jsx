import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TransactionPage from './components/TransactionsPage/TransactionPage';
import HomePage from './components/HomePage/HomePage';
import BudgetPage from './components/HomePage/BudgetPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path='/transactions' element={<TransactionPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

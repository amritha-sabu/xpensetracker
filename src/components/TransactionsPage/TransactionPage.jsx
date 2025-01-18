import { useSelector } from "react-redux";
import BudgetSection from "./BudgetSection";
import { useNavigate } from "react-router-dom";
import AddNewExpense from "./addExpense";
import Expenses from "./Expenses";
import styles from './transaction.module.css';

const TransactionPage = () => {
    const budgetData = useSelector((state) => state.budget);
    const navigate = useNavigate();

    const handleNewOrUpdateClick = () => {
        navigate('/');
    };
    return (
        <div className={styles.transaction} >
            <h1>xTracker</h1>
            {budgetData ? (
                <div>
                    <header>
                        <h2 className={styles.header} >{budgetData.userName}s Monthly Expenditure</h2>
                        <button id='new-update' onClick={handleNewOrUpdateClick}>New/Update tracker</button>
                    </header>
                    <hr />
                    <main>
                        <BudgetSection />
                        <hr />
                        <AddNewExpense />
                        <hr />
                        <Expenses />
                    </main>
                </div>
            ) : (
                <p>No budget data available.</p>
            )}
        </div>
    );
};

export default TransactionPage;
import { useSelector } from "react-redux";
import BudgetSection from "./BudgetSection";
import { useNavigate } from "react-router-dom";

const TransactionPage = () => {
    const budgetData = useSelector((state) => state.budget);
    const navigate = useNavigate();

    const handleNewOrUpdateClick = () => {
        navigate('/');
    };
    return (
        <div>
            <h1>xTracker</h1>
            {budgetData ? (
                <div>
                    <header>
                        <h2>{budgetData.userName}s Monthly Expenditure</h2>
                        <button id='new-update' onClick={handleNewOrUpdateClick}>New/Update tracker</button>
                    </header>
                    <hr />
                    <main>
                        <BudgetSection />
                    </main>
                </div>
            ) : (
                <p>No budget data available.</p>
            )}
        </div>
    );
};

export default TransactionPage;
import { useSelector } from "react-redux";
import style from './budgetSection.module.css';

const BudgetSection = () => {
    const budgetData = useSelector((state) => state.budget);
    const expenses = useSelector((state) => state.expense) || [];

    const categories = ["Food", "Travel", "Entertainment", "Others"];
    const calculateExpenses = (category) => {
        const categoryFilter = expenses.filter((expense) => expense['category-select'] === category);
        const totalCategoryExpense = categoryFilter.reduce((total, expense) => total + parseFloat(expense['expense-amount'] || 0), 0);
        
        return totalCategoryExpense;
    };

    const row = categories.map((category) => {
        const categoryBudget = budgetData.categoricalBudget[category.toLowerCase()] || 0;
        const totalCategoryExpense = calculateExpenses(category);
        const categoryBalance = categoryBudget - totalCategoryExpense;
        const categoryLimitStatus = categoryBalance < 0 ? 'exceed' : 'within';

        return (
                <tr key={category}>
                    <td>{category}</td>
                    <td style={{ backgroundColor: categoryBalance >= 0 ? "green" : "red", color : 'white' , width : '50px', borderRadius : '20px' }}>
                        {categoryLimitStatus}
                    </td>
                    <td>{categoryBudget}</td>
                    <td>{totalCategoryExpense}</td>
                    <td>{categoryBalance}</td>
                </tr>
        );
    });

    const totalBudget = parseFloat(budgetData.monthlyBudget) || 0;
    const totalExpense = expenses.reduce((total, exp) => total + parseFloat(exp['expense-amount'] || 0), 0);
    const totalBalance = totalBudget - totalExpense;
    const totalLimitStatus = totalBalance < 0 ? 'exceed' : 'within';

    return (
        <div className={style.budgetRow}>
            {budgetData ? (
                        <main>
                            <table style={{ width: '100%', textAlign: 'center' }}>
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Limit Status</th>
                                        <th>Budget</th>
                                        <th>Expenses</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>All</td>
                                        <td style={{ backgroundColor: totalBalance >= 0 ? "green" : "red", color : 'white' , width : '50px', borderRadius : '20px' }}>
                                            {totalLimitStatus}
                                        </td>
                                        <td>{totalBudget}</td>
                                        <td>{totalExpense}</td>
                                        <td>{totalBalance}</td>
                                    </tr>
                                    {row}
                                </tbody>
                            </table>
                        </main>
            ) : (
                <p>No budget data available.</p>
            )}
        </div>
    );
};

export default BudgetSection;
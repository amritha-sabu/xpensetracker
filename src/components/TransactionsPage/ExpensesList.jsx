import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../../redux/expensesSlice";

const ExpensesList = () => {
    const expenses = useSelector((state) => state.expense);
    const filter = useSelector((state) => state.filter.filterStatus);
    const dispatch = useDispatch();

    const getFilteredExpenses = () => {
        return filter === 'All'
            ? expenses
            : expenses.filter((expense) => expense['category-select'] === filter);
    };

    const filteredExpenses = getFilteredExpenses();

    const handleDeleteExpense = (index) => {
        dispatch(deleteExpense(index));
    };

    return (
        <div>
            <h3>Filtered by: {filter}</h3>
            <table style={{ width: '100%', textAlign: 'center', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Transaction</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpenses && filteredExpenses.length > 0 ? (
                        filteredExpenses.map((expense, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{expense['expense-name']}</td>
                                <td>{expense['category-select']}</td>
                                <td>{expense['expense-amount']}</td>
                                <td>
                                    <button onClick={() => handleDeleteExpense(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No expenses available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ExpensesList;

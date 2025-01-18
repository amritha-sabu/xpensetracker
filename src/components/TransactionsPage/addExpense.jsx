import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/expensesSlice";
import styles from './newExpense.module.css';

const AddNewExpense = () => {
    const [newExpense, setNewExpense] = useState({
        'expense-name' : '',
        'category-select' : '',
        'expense-amount' : '',
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewExpense({
            ...newExpense,
            [name] : value
        })
    };

    const handleAddNewExpense = (e) => {
        e.preventDefault();
        dispatch(addExpense(newExpense));

        setNewExpense({
            'expense-name' : '',
            'category-select' : '',
            'expense-amount' : '',
        });
    };

    return (
        <div className={styles.expenseForm}>
            <div id="title">New Expense Form</div>

            <form className={styles.expenseForm1} id="expense-form1" onSubmit={(e) => handleAddNewExpense(e)} >
                <label htmlFor="expense-name">Expense Name</label>
                <input type='text' name="expense-name" value={newExpense['expense-name']} onChange={(e) => handleChange(e)} />
                <label htmlFor="category-select">Select a Category</label>
                <select name="category-select" value={newExpense['category-select']} onChange={(e) => handleChange(e)} >
                    <option value="" disabled>Select</option>
                    <option value='Food' >Food</option>
                    <option value='Travel' >Travel</option>
                    <option value='Entertainment' >Entertainment</option>
                    <option>Other</option>
                </select>
                <label htmlFor="expense-amount">Expense Amount</label>
                <input type='number' name="expense-amount" value={newExpense['expense-amount']} onChange={(e) => handleChange(e)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewExpense;
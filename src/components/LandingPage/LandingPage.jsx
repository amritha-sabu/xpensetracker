import { useState } from 'react';
import styles from './landing.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setBudget } from '../../redux/budgetSlice';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const budgetData = useSelector((state) => state.budget);
    const [data, setData] = useState({
        userName: budgetData.userName || '',
        monthlyBudget: budgetData.monthlyBudget || '',
        categoricalBudget: {
            food: budgetData.categoricalBudget?.food || '',
            travel: budgetData.categoricalBudget?.travel || '',
            entertainment: budgetData.categoricalBudget?.entertainment || '',
            others: budgetData.categoricalBudget?.others || '',
        },
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (["food", "travel", "entertainment", "others"].includes(name)) {
            setData((prevData) => ({
                ...prevData,
                categoricalBudget: { ...prevData.categoricalBudget, [name]: value },
            }));
        } else {
            setData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSatrtNewTracker = () => {};

    const handleGoBack = () => {};

    const handleSubmit = (e) => {
        e.preventDefault();

        let sum = Number(data.categoricalBudget.food) + Number(data.categoricalBudget.travel) + Number(data.categoricalBudget.entertainment);
        
        if(sum > data.monthlyBudget){
            alert('Total Categorical budget should not exceed monthly budget');
            return;
        }else if(sum < data.monthlyBudget){
            let others = Number(data.monthlyBudget) - sum;

            const updatedData = { ...data, categoricalBudget : { ...data.categoricalBudget, others : others} };

            setData(updatedData);
            dispatch(setBudget(updatedData));
        }
        
        if (sum === data.monthlyBudget) {
            dispatch(setBudget(data));
        }
        navigate('/transactions');
    };
    
    return (
        <div className={styles.landingpage}>
            <h1>xTracker</h1>
            <h3>Welcome to your won Expense Tracker</h3>
            <p>Please fill in the form below to start tracking</p>
            
            <form id="form" name='landing-page-form' onSubmit={(e) => handleSubmit(e)} >
                <label>Enter Your Name</label>
                <input id='name' name='userName' type='text' value={data.userName} onChange={(e) => handleChange(e)} />
                <label>Enter Your Monthly Budget</label>
                <input id='budget' name='monthlyBudget' type='number' value={data.monthlyBudget} onChange={(e) => handleChange(e)} />
                <label>Fill Your Monthly Category Budget</label>
                <div>
                    <label>Food</label>
                    <input id='food' name='food' type='number' value={data.categoricalBudget.food} onChange={(e) => handleChange(e)} />
                    <label>Travel</label>
                    <input id='travel' name='travel' type='number' value={data.categoricalBudget.travel} onChange={(e) => handleChange(e)} />
                    <label>Entertainment</label>
                    <input id='entertainment' name='entertainment' type='number' value={data.categoricalBudget.entertainment} onChange={(e) => handleChange(e)} />
                </div>
                {!budgetData ? (
                    <button type='submit'>Submit</button>
                ) : (
                    <div>
                        <button id='new-update' onClick={(e) => handleSubmit(e)} >Update Budget</button>
                        <button id='clear' onClick={handleSatrtNewTracker} >Start New Tracker</button>
                        <button onClick={handleGoBack}>Go Back</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default LandingPage;
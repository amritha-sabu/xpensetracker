import budget from './budgetSlice';
import expense from './expensesSlice';
import filter from './expenseFilterSlice';

const reducerMappings = {
    budget : budget,
    expense : expense,
    filter : filter
};

export default reducerMappings;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterChange } from "../../redux/expenseFilterSlice";

const ExpenseFilter = () => {
    const [selectedType, setSelectedType] = useState("All");
    const dispatch = useDispatch();

    const filters = ["All", "Food", "Travel", "Entertainment", "Others"];

    const handleFilterChange = (type) => {
        setSelectedType(type);
        dispatch(filterChange(type));
    }

    return (
        <div>
            <h3>Filter Expenses</h3>
            <div>
                {filters.map((type) => (
                    <button key={type} className={selectedType === type ? "Selected" : ""} onClick={() => handleFilterChange(type)} >{type}</button>
                ))}
            </div>
        </div>
    );
};

export default ExpenseFilter;
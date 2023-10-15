import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // computed state / derived state
  // So this here is a computed value, a value which we derive based on above state.

  // let filterInfoText = "2019, 2021 & 2022";
  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021 & 2022";
  // } else if (filteredYear === "2020") {
  //   filterInfoText = "2019, 2021 & 2022";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2019, 2020 & 2022";
  // } else {
  //   filterInfoText = "2019, 2020 & 2021";
  // }

  return (
    <div>
      <Card className="expenses">
        {/* <p style={{ color: "white" }}>
          Date for years {filterInfoText} is hidden!!
        </p> */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

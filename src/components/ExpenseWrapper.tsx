import { ExpenseForm } from "./ExpenseForm";
import { useState } from "react";

export function ExpenseWrapper({ setExpenses, Expenses }) {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const handleAddSource = (e) => {
    const value = e.target.value;
    setSource(value);
    console.log("source:", source);
    //   console.log(e.target.value);
  };

  const handleAddAmount = (e) => {
    const value = e.target.value;
    setAmount(value);
    //  console.log("source:", source);
    //   console.log(e.target.value);
  };
  const handleAddDate = (e) => {
    const value = e.target.value;
    setDate(value);
    //  console.log("source:", source);
    //   console.log(e.target.value);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    // console.log("submitting");

    const newExpense = {
      source: source,
      amount: amount,
      date: new Date().toLocaleDateString(),
    };

    setExpenses([...Expenses, newExpense]);
  };

  return (
    <>
      <ExpenseForm
        handleAddSource={handleAddSource}
        handleAddExpense={handleAddExpense}
        handleAddAmount={handleAddAmount}
        handleAddDate={handleAddDate}
      />
      <ul>
        {Expenses.map((Expense) => {
          return (
            <li>
              <p>{Expense.source}</p>
              <p>{Expense.amount}</p>
              <p>{Expense.date}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

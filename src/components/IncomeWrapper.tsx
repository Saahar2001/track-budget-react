import { IncomeForm } from "./IncomeForm";
import { useState } from "react";

export function IncomeWrapper({ setIncomes, incomes }) {
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
  };
  const handleAddDate = (e) => {
    const value = e.target.value;
    setDate(value);
    //   console.log(e.target.value);
  };

  const handleAddIncome = (e) => {
    e.preventDefault();
    // console.log("submitting");

    const newIncome = {
      source: source,
      amount: amount,
      date: new Date().toLocaleDateString(),
    };

    setIncomes([...incomes, newIncome]);
  };

  return (
    <>
      <IncomeForm
        handleAddSource={handleAddSource}
        handleAddIncome={handleAddIncome}
        handleAddAmount={handleAddAmount}
        handleAddDate={handleAddDate}
      />
      <ul>
        {incomes.map((income) => {
          return (
            <li>
              <p>{income.source}</p>
              <p>{income.amount}</p>
              <p>{income.date}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

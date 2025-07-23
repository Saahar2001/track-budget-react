import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { useState } from "react";
import { IncomeWrapper } from "./components/IncomeWrapper";
import { ExpenseWrapper } from "./components/ExpenseWrapper";

// before return write the JS code
type IncomeType = {
  source: string;
  amount: number;
  date: string;
};

function App() {
  const [incomes, setIncomes] = useState<IncomeType[]>([]);
  const [Expenses, setExpenses] = useState<IncomeType[]>([]);

  return (
    <div className="container-fluid">
      <h1 className="title">Tracking budget</h1>
      <div className="row">
        <div className="div1 col-md-6">
          <h1 className="name">Income</h1>
          <IncomeWrapper setIncomes={setIncomes} incomes={incomes} />
        </div>

        <div className="div2 col-md-6">
          <h1 className="name">Expense</h1>
          <ExpenseWrapper setExpenses={setExpenses} Expenses={Expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;

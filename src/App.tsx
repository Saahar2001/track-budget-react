import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { IncomeWrapper } from "./components/IncomeWrapper";
import { ExpenseWrapper } from "./components/ExpenseWrapper";
import TargetSection from "./components/Target";
import BalanceSection from "./components/Balance";

type Entry = {
  id: string;
  source: string;
  amount: number;
  date?: string;
};

function App() {
  const [incomes, setIncomes] = useState<Entry[]>([]);
  const [expenses, setExpenses] = useState<Entry[]>([]);
  const [target, setTarget] = useState<number>(0);
  const [saving, setSaving] = useState<number>(0);

  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const balance = totalIncome - totalExpense - saving;

  const progress = target > 0 ? Math.min(100, (saving / target) * 100) : 0;

  const handleDeleteIncome = (id: string) => {
    setIncomes(incomes.filter((income) => income.id !== id));
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleTransfer = (amount: number) => {
    if (amount > 0 && amount <= balance) {
      setSaving((prev) => prev + amount);
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="title">Tracking budget</h1>
      <div className="row">
        <div className="div1 col-md-4">
          <h1 className="name">Income</h1>
          <IncomeWrapper
            incomes={incomes}
            setIncomes={setIncomes}
            onDelete={handleDeleteIncome}
          />
        </div>

        <div className="div2 col-md-4">
          <h1 className="name">Expense</h1>
          <ExpenseWrapper
            expenses={expenses}
            setExpenses={setExpenses}
            onDelete={handleDeleteExpense}
          />
        </div>

        <div className="div2 col-md-4">
          <h2>Target</h2>
          <TargetSection target={target} setTarget={setTarget} />
          <h2> Balance </h2>
          <BalanceSection
            balance={balance}
            saving={saving}
            target={target}
            progress={progress}
            onTransfer={handleTransfer}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

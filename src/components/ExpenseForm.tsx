import { Button } from "./Button";

export function ExpenseForm({
  handleAddSource,
  handleAddExpense,
  handleAddAmount,
  handleAddDate,
}) {
  return (
    <form onSubmit={handleAddExpense}>
      <div>
        <label htmlFor="source">Expense source:</label>
        <input
          type="text"
          id="source"
          name="source"
          onChange={handleAddSource}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount of Expense: </label>
        <input
          type="text"
          id="amount"
          name="amount"
          onChange={handleAddAmount}
        />
      </div>
      <div>
        <label htmlFor="date">Date of expense: </label>
        <input type="date" id="date" name="date" onChange={handleAddDate} />
      </div>
      <Button label="Add Expense" />
    </form>
  );
}

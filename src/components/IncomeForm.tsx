import { Button } from "./Button";

export function IncomeForm({
  handleAddSource,
  handleAddIncome,
  handleAddAmount,
  handleAddDate,
}) {
  return (
    <form onSubmit={handleAddIncome}>
      <div>
        <label htmlFor="source">Income Source:</label>
        <input
          type="text"
          id="source"
          name="source"
          onChange={handleAddSource}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount of income: </label>
        <input
          type="text"
          id="amount"
          name="amount"
          onChange={handleAddAmount}
        />
      </div>
      <div>
        <label htmlFor="date">Date of income: </label>
        <input type="date" id="date" name="date" onChange={handleAddDate} />
      </div>
      <Button label="Add Income" />
    </form>
  );
}

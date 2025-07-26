import React from "react";
import { Button } from "./Button";
import { FieldErrors, UseFormRegister, SubmitHandler } from "react-hook-form";

type ExpenseInput = {
  source: string;
  amount: number;
  date?: string;
};

type Props = {
  register: UseFormRegister<ExpenseInput>;
  errors: FieldErrors<ExpenseInput>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export function ExpenseForm({ register, errors, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="source">Expense source:</label>
        <input
          type="text"
          id="source"
          {...register("source")}
          aria-invalid={errors.source ? "true" : "false"}
        />
        {errors.source && <p role="alert">{errors.source.message}</p>}
      </div>

      <div>
        <label htmlFor="amount">Amount of Expense:</label>
        <input
          type="number"
          id="amount"
          {...register("amount", { valueAsNumber: true })}
          aria-invalid={errors.amount ? "true" : "false"}
        />
        {errors.amount && <p role="alert">{errors.amount.message}</p>}
      </div>

      <div>
        <label htmlFor="date">Date of expense:</label>
        <input type="date" id="date" {...register("date")} />
      </div>

      <Button label="Add Expense" type="submit" />
    </form>
  );
}

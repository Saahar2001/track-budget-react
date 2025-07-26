import React from "react";
import { Button } from "./Button";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type IncomeInput = {
  source: string;
  amount: number;
  date?: string;
};

type Props = {
  register: UseFormRegister<IncomeInput>;
  errors: FieldErrors<IncomeInput>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export function IncomeForm({ register, errors, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="source">Income source:</label>
        <input
          type="text"
          id="source"
          {...register("source")}
          aria-invalid={errors.source ? "true" : "false"}
        />
        {errors.source && <p role="alert">{errors.source.message}</p>}
      </div>

      <div>
        <label htmlFor="amount">Amount of Income:</label>
        <input
          type="number"
          id="amount"
          {...register("amount", { valueAsNumber: true })}
          aria-invalid={errors.amount ? "true" : "false"}
          min="0"
        />
        {errors.amount && <p role="alert">{errors.amount.message}</p>}
      </div>

      <div>
        <label htmlFor="date">Date of income:</label>
        <input type="date" id="date" {...register("date")} />
      </div>

      <Button label="Add Income" type="submit" />
    </form>
  );
}

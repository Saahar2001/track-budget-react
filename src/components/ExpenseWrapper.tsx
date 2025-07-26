import { ExpenseForm } from "./ExpenseForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const expenseSchema = z.object({
  source: z.string().min(1, "Source is required"),
  amount: z.number().positive("Amount must be positive"),
  date: z.string().optional(),
});

type ExpenseInput = z.infer<typeof expenseSchema>;

type ExpenseType = ExpenseInput & { id: string };

type Props = {
  expenses: ExpenseType[];
  setExpenses: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
  onDelete?: (id: string) => void;
};

export function ExpenseWrapper({ expenses, setExpenses, onDelete }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseInput>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      source: "",
      amount: 0,
      date: "",
    },
  });

  const onSubmit = (data: ExpenseInput) => {
    const newExpense: ExpenseType = {
      id: Date.now().toString(),
      ...data,
      amount: Number(data.amount),
      date: data.date || new Date().toLocaleDateString(),
    };

    setExpenses([...expenses, newExpense]);
    reset();
  };

  return (
    <>
      <ExpenseForm
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      />
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <p>{expense.source}</p>
            <p>{expense.amount}</p>
            <p>{expense.date}</p>
            {onDelete && (
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

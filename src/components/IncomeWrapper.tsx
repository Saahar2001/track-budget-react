import { IncomeForm } from "./IncomeForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const incomeSchema = z.object({
  source: z.string().min(1, "Source is required"),
  amount: z.number().positive("Amount must be positive"),
  date: z.string().optional(),
});

type IncomeInput = z.infer<typeof incomeSchema>;

type IncomeType = IncomeInput & { id: string };

type Props = {
  incomes: IncomeType[];
  setIncomes: React.Dispatch<React.SetStateAction<IncomeType[]>>;
  onDelete?: (id: string) => void;
};

export function IncomeWrapper({ incomes, setIncomes, onDelete }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IncomeInput>({
    resolver: zodResolver(incomeSchema),
    defaultValues: {
      source: "",
      amount: 0,
      date: "",
    },
  });

  const onSubmit = (data: IncomeInput) => {
    const newIncome: IncomeType = {
      id: Date.now().toString(),
      ...data,
      amount: Number(data.amount),
      date: data.date || new Date().toLocaleDateString(),
    };

    setIncomes([...incomes, newIncome]);
    reset();
  };

  return (
    <>
      <IncomeForm
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      />
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>
            <p>{income.source}</p>
            <p>{income.amount}</p>
            <p>{income.date}</p>
            {onDelete && (
              <button onClick={() => onDelete(income.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

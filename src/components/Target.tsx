import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./Button";

const targetSchema = z.object({
  target: z.number().min(1, "Please enter a valid target"),
});

type Props = {
  target: number;
  setTarget: (value: number) => void;
};

export default function TargetSection({ target, setTarget }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(targetSchema),
    defaultValues: { target },
  });

  const onSubmit = (data: { target: number }) => {
    setTarget(data.target);
  };

  const handleClear = () => {
    setTarget(0);
    reset({ target: 0 });
  };

  return (
    <div className="goal-box">
      <form onSubmit={handleSubmit(onSubmit)} className="goal-form">
        <label>Set Target</label>
        <input
          type="number"
          min={1}
          {...register("target", { valueAsNumber: true })}
        />
        {errors.target && <p className="form-error">{errors.target.message}</p>}
        <div className="btn-row">
          <Button type="submit" label="Save" />
          <Button type="button" label="Clear" onClick={handleClear} />
        </div>
      </form>
    </div>
  );
}

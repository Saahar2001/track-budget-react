import React, { useState } from "react";
import { Button } from "./Button";

type Props = {
  balance: number;
  saving: number;
  target: number;
  progress: number;
  onTransfer: (amount: number) => void;
};

export default function BalanceSection({
  balance,
  saving,
  target,
  progress,
  onTransfer,
}: Props) {
  const [amount, setAmount] = useState<number | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value === "" ? "" : Math.max(0, Number(value)));
  };

  const handleSubmit = () => {
    if (amount !== "" && amount > 0 && amount <= balance) {
      onTransfer(amount);
      setAmount("");
    }
  };

  return (
    <div className="balance-box">
      <p>Current Savings: {saving} SAR</p>
      <p>Target: {target} SAR</p>
      <p>Progress: {progress.toFixed(1)}%</p>

      <div className="progress-area">
        <div className="progress-track">
          <div className="progress-inner" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <p>Current Balance: {balance} SAR</p>

      <div className="transfer-form">
        <input
          type="number"
          min={0}
          max={balance}
          value={amount}
          onChange={handleChange}
          placeholder="Transfer..."
        />
        <Button
          label="Send"
          onClick={handleSubmit}
          disabled={amount === "" || amount <= 0 || amount > balance}
        />
      </div>
    </div>
  );
}

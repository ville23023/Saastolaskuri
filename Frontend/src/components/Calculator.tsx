import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [weeklySavings, setWeeklySavings] = useState<string>("");
  const [targetAmount, setTargetAmount] = useState<string>("");
  const [calculatedWeeks, setCalculatedWeeks] = useState<number | null>(null);

  const handleCalculate = () => {
    const weekly = parseFloat(weeklySavings);
    const target = parseFloat(targetAmount);

    if (!isNaN(weekly) && !isNaN(target) && weekly > 0 && target > 0) {
      const weeks = Math.ceil(target / weekly);
      setCalculatedWeeks(weeks);
    } else {
      setCalculatedWeeks(null);
    }
  };

  return (
    <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-lg w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Savings Goal Planner
      </h2>

      <div className="flex flex-col gap-4 mb-6">
        <input
          type="number"
          placeholder="Weekly savings amount (€)"
          value={weeklySavings}
          onChange={(e) => setWeeklySavings(e.target.value)}
          className="p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="number"
          placeholder="Target amount (€)"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          className="p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleCalculate}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Calculate Weeks
        </button>
      </div>

      {calculatedWeeks !== null && (
        <div className="text-center text-lg">
          {calculatedWeeks > 0 ? (
            <p>
              You will reach your goal in{" "}
              <span className="font-bold">{calculatedWeeks}</span> week(s).
            </p>
          ) : (
            <p className="text-green-400 font-bold">Goal already achievable!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Calculator;

import React, { useState } from "react";

interface CategoryCardProps {
  categoryName: string;
  targetAmount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryName,
  targetAmount,
}) => {
  const [savedAmount, setSavedAmount] = useState<number>(0);
  const [addAmount, setAddAmount] = useState<string>("");

  const handleAddSavings = () => {
    const parsedAmount = parseFloat(addAmount);
    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      setSavedAmount((prev) => prev + parsedAmount);
      setAddAmount("");
    }
  };

  const remainingAmount = Math.max(targetAmount - savedAmount, 0);
  const estimatedWeeks = Math.ceil(
    remainingAmount / (savedAmount > 0 ? savedAmount : 1)
  );

  return (
    <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-lg w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {categoryName}
      </h2>

      <div className="text-center mb-6">
        <p className="text-lg">
          Saved: <span className="font-bold">{savedAmount.toFixed(2)} €</span>
        </p>
        <p className="text-lg">
          Target: <span className="font-bold">{targetAmount.toFixed(2)} €</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <input
          type="number"
          placeholder="Add amount €"
          value={addAmount}
          onChange={(e) => setAddAmount(e.target.value)}
          className="p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleAddSavings}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Add Savings
        </button>
      </div>

      <div className="text-center">
        {remainingAmount > 0 ? (
          <p className="text-sm">
            Est. <span className="font-bold">{estimatedWeeks}</span> week(s)
            left at this pace
          </p>
        ) : (
          <p className="text-green-400 font-bold text-lg">Goal reached!</p>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;

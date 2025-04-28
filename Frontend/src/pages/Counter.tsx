// Tällä hetkellä kortissa kovakoodatut arvot
// Myöhemmin mahdollista rakentaa tietokantaintegraatio
import CategoryCard from "../components/CategoryCard";

const Counter = () => {
  return (
    <div>
      <h1>Säästölaskuri</h1>
      <CategoryCard categoryName={"Lada"} targetAmount={1200} />
      <CategoryCard categoryName={"Shampoo"} targetAmount={244} />
    </div>
  );
};

export default Counter;

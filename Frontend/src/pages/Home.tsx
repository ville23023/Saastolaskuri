const Home = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white">
      <h1 className="text-4xl text-center font-bold animate__animated animate__fadeIn">
        Welcome to the Savings Planner!
      </h1>
      <p
        className="mt-4 text-lg text-center animate__animated animate__fadeIn animate__delay-1s"
        style={{ lineHeight: "1.6" }}
      >
        Use our calculator to see how long it will take to achieve your goal.
        Sign up and start planning today.
      </p>
    </div>
  );
};

export default Home;

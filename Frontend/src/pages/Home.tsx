const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold animate__animated animate__fadeIn">
        Welcome to the Savings Planner!
      </h1>
      <p className="mt-4 text-lg text-center animate__animated animate__fadeIn animate__delay-1s">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies
        orci a massa viverra, nec dapibus elit placerat. Nulla facilisi. Integer
        condimentum ac libero at iaculis.
      </p>
    </div>
  );
};

export default Home;

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

      <div className="mt-6 animate__animated animate__fadeIn animate__delay-2s">
        <a
          href="/login"
          className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300"
        >
          Go to Login
        </a>
        <a
          href="/signup"
          className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;

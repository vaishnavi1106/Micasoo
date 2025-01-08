import React, { useState } from "react";

const Loginpage= () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 h-screen w-screen">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your password"
              required
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Confirm your password"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={toggleForm}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;

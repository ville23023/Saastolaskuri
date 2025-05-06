import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Calculator from "../components/Calculator";

interface TokenPayload {
  userId: string;
  exp: number;
  iat: number;
}

interface User {
  userName: string;
}

const CalculatorApp: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode<TokenPayload>(token);
        const userId = decoded.userId;

        fetch(`http://localhost:3000/api/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data: User) => {
            setUsername(data.userName);
          });
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  return (
    <div className="p-10">
      {username ? (
        <h1 className="text-2xl font-bold text-center pb-10">
          Welcome, {username}!
        </h1>
      ) : (
        <p>Loading user info...</p>
      )}
      <div>
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorApp;

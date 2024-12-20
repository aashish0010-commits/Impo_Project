import React, { useState } from "react";
import Link from "next/link"; // Import Next.js Link for navigation
import axios from 'axios';
import { useRouter } from 'next/navigation'; // For Next.js 13+ (app directory)

function LoginPatient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Define the router object using the useRouter hook

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
  
      // Store token and user info (first name) in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('firstName', response.data.firstName); // Assuming firstName is returned from the server
  
      router.push('/'); // Redirect to homepage
    } catch (err) {
      console.error(err);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container mx-auto my-10 p-8 shadow-lg max-w-md">
      <h2 className="text-2xl font-semibold mb-6">Patient Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full p-3 bg-customDark text-white rounded-md">
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/register-patient" className="text-customLink hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPatient; 
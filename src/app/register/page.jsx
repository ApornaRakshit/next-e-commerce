"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../../../firebase";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );

      // Save Name in Firebase
      await updateProfile(userCredential.user, {
        displayName: form.name,
      });

      console.log("User created:", userCredential.user);

      alert("Registration Successful!");

      // Clear Form
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect Home
      router.push("/");

    } catch (error) {

      console.log(error.code);
      console.log(error.message);

      if (error.code === "auth/email-already-in-use") {
        alert("Email already exists");
      } else {
        alert(error.message);
      }

    } finally {

      setLoading(false);

    }
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-[#f6f3ef] px-4">

    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white/60 backdrop-blur-xl 
        p-8 rounded-3xl shadow-lg border border-[#e5ded4]"
    >

      {/* Title */}
      <h1 className="text-2xl font-bold text-[#2c2c2c] text-center">
        Create Account
      </h1>

      <p className="text-center text-gray-500 mt-2 text-sm">
        Join us and start shopping today
      </p>

      {/* Name */}
      <div className="mt-6">
        <label className="text-sm text-gray-600">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-[#c47a2c]"
        />
      </div>

      {/* Email */}
      <div className="mt-4">
        <label className="text-sm text-gray-600">
          Email
        </label>

        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-[#c47a2c]"
        />
      </div>

      {/* Password */}
      <div className="mt-4">
        <label className="text-sm text-gray-600">
          Password
        </label>

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="new-password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-[#c47a2c]"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-5 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>
      </div>

      {/* Confirm Password */}
      <div className="mt-4">
        <label className="text-sm text-gray-600">
          Confirm Password
        </label>

        <div className="relative">

          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-[#c47a2c]"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-5 text-gray-500"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 bg-gradient-to-r from-[#c96b1d] to-[#a24a05]
          text-white py-3 rounded-xl font-semibold
          shadow-lg hover:scale-105 transition disabled:opacity-50"
      >
        {loading ? "Creating Account..." : "Sign Up →"}
      </button>

      {/* Login Link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}

        <Link
          href="/login"
          className="text-[#c47a2c] font-semibold hover:underline"
        >
          Login
        </Link>
      </p>

    </form>
  </div>
);
}
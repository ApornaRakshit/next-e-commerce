"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

export default function Login() {
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);

            const userCredential = await signInWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );

            console.log("User:", userCredential.user);

            // ✅ Redirect to home page
            router.replace("/");

        } catch (error) {
            alert(error.message);
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
                    Login Account
                </h1>

                <p className="text-center text-gray-500 mt-2 text-sm">
                    Enter your credentials to continue
                </p>

                {/* Email */}
                <div className="mt-6">
                    <label className="text-sm text-gray-600">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-[#c47a2c]"
                    />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <label className="text-sm text-gray-600">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-[#c47a2c]"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-6 bg-gradient-to-r from-[#c96b1d] to-[#a24a05] 
                     text-white py-3 rounded-xl font-semibold 
                     shadow-lg hover:scale-105 transition disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login →"}
                </button>

                {/* Register */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-[#c47a2c] font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </form>
        </div>
    );
}
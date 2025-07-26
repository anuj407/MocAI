"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { supabase } from "../../services/supabaseClient";

const SignInPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp && !form.name) return toast.error("Name is required");
    if (!form.email || !form.password) return toast.error("Email and password are required");
    if (!/\S+@\S+\.\S+/.test(form.email)) return toast.error("Invalid email address");
    if (form.password.length < 6) return toast.error("Password must be at least 6 characters");

    toast.success(isSignUp ? "Account created successfully!" : "Signed in successfully!");
    console.log(`${isSignUp ? "Signup" : "Signin"} data:`, form);
  };

  const handleGoogleSignIn = async() => {
 
    const {error} = await supabase.auth.signInWithOAuth({
      provider : 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }

    })
    if (error) {
      toast.error("Google sign-in failed. Please try again.");
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-2">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="text-center text-gray-500 mb-6">
          {isSignUp ? "Join MocAI today" : "Sign in to continue to MocAI"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 text-zinc-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="👤 Enter Your Name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-zinc-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="📧 you@example.com"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-zinc-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-10"
              placeholder="🔒 Password"
              required
            />
            <button
              type="button"
              className="absolute cursor-pointer top-[37px] right-3 text-gray-600 hover:text-gray-800"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
          </div>

          {!isSignUp && (
            <div className="text-right text-sm">
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center cursor-pointer justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl" />
          <span className="font-medium text-gray-700">Continue with Google</span>
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            className="text-blue-600 cursor-pointer hover:underline font-medium"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Create One"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;

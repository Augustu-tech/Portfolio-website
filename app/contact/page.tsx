"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">

      {/* ✅ ANIMATION WRAPPER (THIS IS WHERE IT GOES) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-6 rounded-xl shadow-lg space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700 outline-none focus:ring-2 focus:ring-green-500 h-32"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 py-3 rounded font-semibold hover:bg-green-600 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* ✅ SUCCESS */}
          {status === "success" && (
            <p className="text-green-400 text-center">
              Message sent successfully ✅
            </p>
          )}

          {/* ❌ ERROR */}
          {status === "error" && (
            <p className="text-red-400 text-center">
              Failed to send message ❌
            </p>
          )}

        </form>

      </motion.div>

    </main>
  );
}
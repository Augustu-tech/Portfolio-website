"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
        <p className="text-gray-400 mb-6">
          Have a project, idea, or opportunity? Let’s talk.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 bg-slate-800 rounded-lg border border-slate-700 h-32 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* STATUS MESSAGES */}
        {status === "success" && (
          <p className="mt-4 text-green-400">
            ✅ Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-400">
            ❌ Something went wrong. Try again.
          </p>
        )}

      </div>
    </main>
  );
}
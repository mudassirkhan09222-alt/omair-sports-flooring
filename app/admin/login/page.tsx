"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) { router.push("/admin"); router.refresh(); }
    else        { setError("Incorrect password. Please try again."); setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-[#0a1f44] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src="/OSF-LOGO.png" alt="Omair Sports Flooring" width={150} height={56}
            className="object-contain brightness-0 invert" />
        </div>

        <div className="bg-white p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center">
              <Lock size={18} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black text-[#0a1f44] uppercase tracking-tight">Admin Panel</h1>
              <p className="text-xs text-gray-400">Omair Sports Flooring</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-[#0a1f44] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required autoFocus
                className="w-full border-2 border-gray-200 focus:border-blue-500 px-4 py-3 text-sm text-[#0a1f44] outline-none transition-colors"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs bg-red-50 border border-red-200 px-3 py-2">{error}</p>
            )}

            <button type="submit" disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 text-xs font-bold tracking-widest uppercase transition-colors">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-white/30 text-xs mt-5">
          Omair Sports Flooring — Admin
        </p>
      </div>
    </div>
  );
}

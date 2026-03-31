"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setState("error");
        return;
      }
      setState("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-2xl px-7 py-10 text-center"
        style={{ background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.25)" }}
      >
        <p className="text-2xl font-semibold mb-2" style={{ color: "#00E5FF" }}>
          Message sent!
        </p>
        <p className="text-sm" style={{ color: "#888" }}>
          Am got it. She reads everything — you&apos;ll hear back personally.
        </p>
      </div>
    );
  }

  const isLoading = state === "loading";

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(0,229,255,0.15)",
    borderRadius: "10px",
    color: "#fff",
    padding: "12px 14px",
    fontSize: "15px",
    outline: "none",
    width: "100%",
    fontFamily: "var(--font-space-grotesk), sans-serif",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    marginBottom: "6px",
    color: "#888",
    letterSpacing: "0.03em",
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" style={labelStyle}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
              disabled={isLoading}
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="contact-email" style={labelStyle}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              disabled={isLoading}
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" style={labelStyle}>
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="What's this about?"
            required
            disabled={isLoading}
            value={form.subject}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="contact-message" style={labelStyle}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Say whatever's on your mind."
            rows={6}
            required
            disabled={isLoading}
            value={form.message}
            onChange={handleChange}
            style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
          />
        </div>

        {state === "error" && errorMsg && (
          <p
            className="text-sm rounded-lg px-4 py-3"
            style={{ color: "#ff6b6b", background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.2)" }}
          >
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          style={{
            background: isLoading ? "rgba(0,229,255,0.3)" : "#00E5FF",
            color: "#000",
            border: "none",
            borderRadius: "10px",
            padding: "13px 28px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: isLoading ? "not-allowed" : "pointer",
            fontFamily: "var(--font-space-grotesk), sans-serif",
            transition: "opacity 0.15s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            alignSelf: "flex-start",
          }}
        >
          {isLoading ? (
            <>
              <span
                style={{
                  width: "14px",
                  height: "14px",
                  border: "2px solid rgba(0,0,0,0.3)",
                  borderTopColor: "#000",
                  borderRadius: "50%",
                  display: "inline-block",
                  animation: "spin 0.7s linear infinite",
                }}
              />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </button>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}

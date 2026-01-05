'use client';

import { useReducedMotion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const shouldReduceMotion = useReducedMotion();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Website inquiry from ${name || 'Visitor'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:your@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="mx-auto w-full max-w-3xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Send a message</h2>
        <p className="mt-2 text-gray-400">
          Fill out the form to start a conversation — it opens your email client.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="sr-only" htmlFor="cf-name">
            Name
          </label>
          <input
            id="cf-name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <label className="sr-only" htmlFor="cf-email">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <label className="sr-only" htmlFor="cf-message">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={6}
          placeholder="How can I help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-4 w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-lg backdrop-blur transition hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Send message
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </form>
    </section>
  );
}

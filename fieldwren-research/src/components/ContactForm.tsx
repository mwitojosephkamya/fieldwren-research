"use client";

import { useState } from "react";
import { contact, whatsappLink } from "@/config/site";

const topics = [
  "Research support",
  "Survey and field data collection",
  "Data analysis and statistics",
  "Monitoring and evaluation",
  "Training or workshop",
  "Something else",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");

  const text = `Hello Fieldwren Research. My name is ${name || "(name)"}.\nTopic: ${topic}\n\n${message}`;
  const mail = `mailto:${contact.email}?subject=${encodeURIComponent(
    `Enquiry: ${topic}`,
  )}&body=${encodeURIComponent(text)}`;

  const field =
    "mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-ink focus:border-blue focus:outline-none";

  return (
    <form className="card space-y-5 p-6" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="text-sm font-semibold">
          Your name
        </label>
        <input id="name" className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </div>
      <div>
        <label htmlFor="topic" className="text-sm font-semibold">
          What do you need help with?
        </label>
        <select id="topic" className={field} value={topic} onChange={(e) => setTopic(e.target.value)}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold">
          Tell us a little about it
        </label>
        <textarea
          id="message"
          rows={5}
          className={field}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your topic, deadline and what you have done so far"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <a className="btn btn-accent" href={whatsappLink(text)} target="_blank" rel="noopener noreferrer">
          Send on WhatsApp
        </a>
        <a className="btn btn-outline" href={mail}>
          Send by email
        </a>
      </div>
      <p className="text-xs text-slate">
        This form does not store anything. It opens WhatsApp or your email app with your message ready to send.
      </p>
    </form>
  );
}

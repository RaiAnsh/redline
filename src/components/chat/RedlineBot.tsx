"use client";

import { useEffect, useId, useRef, useState } from "react";
import { suggestedFaqEntries, matchFaq } from "@/data/faq";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

type Message = {
  id: string;
  from: "bot" | "user";
  text: string;
};

const contactLine = siteConfig.contacts.map((c) => `${c.name} at ${c.phoneDisplay}`).join(" or ");

const FALLBACK_ANSWER = `I don't have a canned answer for that one. The fastest way to get a real answer is to call ${contactLine}, or try one of the questions below.`;

const GREETING = "Hey, I'm RedlineBot. Ask me about services, hours, service area, or pricing, and I'll point you in the right direction.";

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `msg-${idCounter}`;
}

export function RedlineBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: nextId(), from: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  // Autofocus the input when the panel opens, and make sure it's on top of
  // any pending open-transition so the caret actually lands in the box.
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open]);

  function respond(rawText: string) {
    const text = rawText.trim();
    if (!text) return;

    const match = matchFaq(text);
    const userMsg: Message = { id: nextId(), from: "user", text };
    const botMsg: Message = { id: nextId(), from: "bot", text: match ? match.answer : FALLBACK_ANSWER };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <div
        id={panelId}
        role="dialog"
        aria-label="RedlineBot chat"
        aria-hidden={!open}
        className={cn(
          "flex w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-sm border border-brand-line bg-brand-charcoal shadow-2xl transition-all duration-200 origin-bottom-right",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0",
        )}
        style={{ height: open ? "min(32rem, 70svh)" : 0 }}
      >
        <div className="flex items-center justify-between border-b border-brand-line bg-brand-black px-4 py-3">
          <div className="flex items-center gap-2">
            <span aria-hidden className="h-2 w-2 rotate-45 bg-brand-red" />
            <div>
              <p className="text-sm font-semibold text-brand-white">RedlineBot</p>
              <p className="text-xs text-brand-grey">Usually answers instantly</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="rounded-sm p-1 text-brand-grey transition-colors hover:text-brand-white"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "max-w-[85%] rounded-sm px-3 py-2 text-sm leading-relaxed",
                m.from === "bot"
                  ? "bg-brand-steel text-brand-silver"
                  : "ml-auto bg-brand-red text-brand-white",
              )}
            >
              {m.text}
            </div>
          ))}

          <div className="flex flex-wrap gap-2 pt-1">
            {suggestedFaqEntries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => respond(entry.question)}
                className="rounded-full border border-brand-red/50 px-3 py-1.5 text-xs text-brand-white/90 transition-colors hover:bg-brand-red hover:text-brand-white"
              >
                {entry.question}
              </button>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            respond(input);
          }}
          className="flex items-center gap-2 border-t border-brand-line bg-brand-black p-3"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              // Belt-and-suspenders: some mobile keyboards/IME flows fire
              // Enter without triggering the form's native submit, so
              // handle it explicitly here too.
              if (e.key === "Enter") {
                e.preventDefault();
                respond(input);
              }
            }}
            placeholder="Ask a question..."
            className="min-w-0 flex-1 rounded-sm border border-brand-line bg-brand-charcoal px-3 py-2 text-sm text-brand-white placeholder:text-brand-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-brand-red text-brand-white transition-colors hover:bg-brand-red-dark"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-brand-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-brand-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-light"
      >
        <span className="sr-only">{open ? "Close RedlineBot chat" : "Open RedlineBot chat"}</span>
        {open ? (
          <svg width="22" height="22" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 5.5C4 4.67157 4.67157 4 5.5 4H18.5C19.3284 4 20 4.67157 20 5.5V14.5C20 15.3284 19.3284 16 18.5 16H9L5 19.5V16H5.5C4.67157 16 4 15.3284 4 14.5V5.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

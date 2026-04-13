"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Send,
  X,
  Bot,
  User,
  Loader2,
  Trash2,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  id: string;
}

const WELCOME_SUGGESTIONS = [
  "¿Cómo redacto un buen resumen?",
  "¿Cuál es la estructura del Marco Teórico?",
  "¿Cómo formulo los objetivos específicos?",
  "¿Qué incluye la sección de Metodología?",
];

function formatMessage(text: string) {
  // Simple markdown-like formatting
  return text
    .split("\n")
    .map((line, i) => {
      // Bold text
      const formatted = line.replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-slate-800 dark:text-slate-100">$1</strong>'
      );
      // Inline code
      const withCode = formatted.replace(
        /`(.*?)`/g,
        '<code class="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>'
      );

      if (line.trim() === "") {
        return <br key={i} />;
      }
      if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
        return (
          <li key={i} className="ml-4 list-disc">
            <span dangerouslySetInnerHTML={{ __html: withCode.replace(/^[-•]\s*/, "") }} />
          </li>
        );
      }
      if (/^\d+\.\s/.test(line.trim())) {
        return (
          <li key={i} className="ml-4 list-decimal">
            <span dangerouslySetInnerHTML={{ __html: withCode.replace(/^\d+\.\s*/, "") }} />
          </li>
        );
      }
      return (
        <p key={i} className="min-h-[1.25em]">
          <span dangerouslySetInnerHTML={{ __html: withCode }} />
        </p>
      );
    });
}

export default function ChatPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("tic-chat-history");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setMessages(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("tic-chat-history", JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      const userMessage: ChatMessage = {
        role: "user",
        content: text.trim(),
        id: crypto.randomUUID(),
      };

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      setIsLoading(true);

      try {
        const apiMessages = updatedMessages.map((m) => ({
          role: m.role,
          content: m.content,
        }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: apiMessages }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.error || "Error al obtener respuesta del asistente"
          );
        }

        const data = await response.json();

        const assistantMessage: ChatMessage = {
          role: "assistant",
          content: data.content,
          id: crypto.randomUUID(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido";
        const errorMsg: ChatMessage = {
          role: "assistant",
          content: `Lo siento, ocurrió un error: ${errorMessage}. Por favor, intenta de nuevo.`,
          id: crypto.randomUUID(),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("tic-chat-history");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-6 left-6 z-50 lg:bottom-6 lg:left-[calc(18rem+1.5rem)]"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 group"
            >
              <MessageSquare className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-0 left-0 z-[60] w-full h-full sm:bottom-4 sm:left-4 sm:w-[420px] sm:h-[600px] lg:left-[calc(18rem+1rem)] lg:bottom-4"
          >
            <div className="flex flex-col h-full sm:h-[600px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 sm:rounded-2xl shadow-2xl overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-950">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-md">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Asistente TIC
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-slate-300">
                        En línea
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {messages.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearChat}
                      className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-white/10"
                      title="Limpiar chat"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
              >
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center px-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                      <Sparkles className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
                      Asistente de Tesis
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 max-w-[280px] leading-relaxed">
                      Pregúntame cualquier duda sobre la redacción de tu
                      Trabajo de Integración Curricular.
                    </p>
                    <div className="w-full space-y-2">
                      {WELCOME_SUGGESTIONS.map((suggestion, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          onClick={() => sendMessage(suggestion)}
                          className="w-full text-left px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-600 dark:text-slate-300 hover:bg-emerald-50 hover:border-emerald-200 dark:hover:bg-emerald-950/20 dark:hover:border-emerald-800 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                            {suggestion}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex gap-2.5 ${
                          msg.role === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        {msg.role === "assistant" && (
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30 mt-0.5">
                            <Bot className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                            msg.role === "user"
                              ? "bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 rounded-br-md"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-bl-md"
                          }`}
                        >
                          {msg.role === "assistant" ? (
                            <div className="space-y-0.5">
                              {formatMessage(msg.content)}
                            </div>
                          ) : (
                            <p>{msg.content}</p>
                          )}
                        </div>
                        {msg.role === "user" && (
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700 mt-0.5">
                            <User className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-2.5"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30 mt-0.5">
                          <Bot className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-md px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <Loader2 className="h-4 w-4 text-emerald-500 animate-spin" />
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              Pensando...
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* UNL Reminder Banner */}
              <div className="px-4 py-2 bg-amber-50 dark:bg-amber-950/20 border-t border-amber-200 dark:border-amber-800/50">
                <p className="text-[10px] text-amber-700 dark:text-amber-400 text-center flex items-center justify-center gap-1.5">
                  <BookOpen className="h-3 w-3" />
                  Recuerda siempre consultar la normativa oficial de la UNL para tu TIC
                </p>
              </div>

              {/* Chat Input */}
              <div className="border-t border-slate-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-900">
                <div className="flex items-end gap-2">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe tu duda sobre la tesis..."
                    rows={1}
                    className="flex-1 resize-none rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-colors min-h-[40px] max-h-[100px]"
                    style={{
                      height: "auto",
                      overflow: input.split("\n").length > 2 ? "auto" : "hidden",
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height = `${Math.min(target.scrollHeight, 100)}px`;
                    }}
                  />
                  <Button
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || isLoading}
                    size="sm"
                    className="h-10 w-10 rounded-xl shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white border-0 shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-1.5 px-1">
                  <p className="text-[10px] text-slate-400">
                    Enter para enviar, Shift+Enter para nueva línea
                  </p>
                  <Badge
                    variant="outline"
                    className="text-[10px] text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 px-1.5 py-0"
                  >
                    IA TIC-UNL
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

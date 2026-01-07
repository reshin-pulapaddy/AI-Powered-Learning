'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! Welcome to CES LEAP Academy - AI Powered Corporate Training & Upskilling Platform',
      sender: 'bot',
      timestamp: new Date(),
    },
    {
      id: '2',
      text: 'How can we help you?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const quickOptions = [
    'I represent a company that has training and upskilling needs',
    'I want a demo of CES LEAP Academy LMS/LXP/Frontline Training Solution',
    'I want certified trainers for my company\'s training reqs',
    'I\'m a working professional looking to upskill',
    'I\'m just exploring',
  ];

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target as Node)
      ) {
        // Don't close if clicking on the launcher button
        const target = event.target as HTMLElement;
        if (!target.closest('.chatbot-launcher')) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleQuickOptionClick = (option: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your interest! Our team will get back to you shortly. In the meantime, feel free to explore our website or schedule a demo.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message! Our team will respond to you shortly. For immediate assistance, please call us at +91 7353948100 or email hello@cesleapacademy.com',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-launcher fixed bottom-6 right-6 z-[60] flex items-center justify-center w-16 h-16 bg-[#14467b] hover:bg-[#1a5a9a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Open chatbot"
      >
        {isOpen ? (
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <div className="relative">
            {/* Simple Message Icon */}
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            {/* Pulsing notification dot */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="fixed bottom-24 right-6 z-[60] w-96 h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col animate-in slide-in-from-bottom-4 duration-300"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0ea5e9] via-[#06b6d4] to-[#14b8a6] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Omni Online</h3>
                <p className="text-xs text-white/80">We typically reply in a few minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chatbot"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Quick Options (only show if no user messages yet) */}
            {messages.filter((m) => m.sender === 'user').length === 0 && (
              <div className="space-y-2 mt-4">
                {quickOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickOptionClick(option)}
                    className="w-full text-left px-4 py-2.5 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#14b8a6] text-white rounded-lg text-sm transition-all"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800 rounded-b-lg">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  messages.filter((m) => m.sender === 'user').length === 0
                    ? 'Please select an option above...'
                    : 'Type your message...'
                }
                disabled={messages.filter((m) => m.sender === 'user').length === 0}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] dark:bg-gray-700 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed text-sm"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || messages.filter((m) => m.sender === 'user').length === 0}
                className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] hover:from-[#06b6d4] hover:to-[#14b8a6] text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
         
          </div>
        </div>
      )}
    </>
  );
}


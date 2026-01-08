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
      text: 'Hello! 👋 Welcome to CES LEAP Academy. I\'m here to help you with your training and upskilling needs.',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const MAX_MESSAGES = 7;

  const quickOptions = [
    'I represent a company with training needs',
    'I want a demo of your platform',
    'I need certified trainers',
    'I\'m a professional looking to upskill',
    'Just exploring options',
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

  const getBotResponse = (userMessage: string, messageCount: number): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('company') || lowerMessage.includes('training needs')) {
      if (messageCount < 4) {
        return 'Great! We specialize in corporate training solutions. What specific skills or areas would you like to train your team on?';
      } else {
        return 'Perfect! Our team can create a customized training program for your company. Would you like to schedule a call to discuss your requirements?';
      }
    } else if (lowerMessage.includes('demo') || lowerMessage.includes('platform')) {
      if (messageCount < 4) {
        return 'Excellent! Our platform offers AI-powered learning, real-time analytics, and personalized training paths. What features interest you most?';
      } else {
        return 'I\'d love to show you a demo! You can schedule one through our website or call us at 044 4741 0999. Would that work for you?';
      }
    } else if (lowerMessage.includes('trainer') || lowerMessage.includes('certified')) {
      if (messageCount < 4) {
        return 'We have a network of certified trainers across various domains. What subject areas are you looking for?';
      } else {
        return 'We can connect you with expert trainers. Please share your contact details, and our team will reach out within 24 hours.';
      }
    } else if (lowerMessage.includes('professional') || lowerMessage.includes('upskill') || lowerMessage.includes('individual')) {
      if (messageCount < 4) {
        return 'That\'s wonderful! We offer courses in AI, Generative AI, Microsoft Copilot, and more. Which area interests you?';
      } else {
        return 'Great choice! You can browse our courses on the website or speak with our advisors. Would you like more information on any specific course?';
      }
    } else if (lowerMessage.includes('exploring') || lowerMessage.includes('just') || lowerMessage.includes('options')) {
      if (messageCount < 4) {
        return 'No problem! We offer corporate training, individual courses, and coaching programs. What would you like to know more about?';
      } else {
        return 'Feel free to explore our website or reach out anytime. You can also call us at 044 4741 0999 for personalized assistance.';
      }
    } else {
      if (messageCount < 4) {
        return 'I understand. Could you tell me more about what you\'re looking for? I can help you find the right solution.';
      } else {
        return 'Thank you for your interest! Our team will be happy to assist you. You can reach us at hello@cesleapacademy.com or call 044 4741 0999.';
      }
    }
  };

  const handleQuickOptionClick = (option: string) => {
    if (messages.length >= MAX_MESSAGES) {
      return;
    }

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
      if (messages.length + 1 < MAX_MESSAGES) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(option, messages.length + 1),
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Thank you for chatting with us! For detailed assistance, please contact us at hello@cesleapacademy.com or call 044 4741 0999. We\'re here to help! 🙌',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || messages.length >= MAX_MESSAGES) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    const currentMessageCount = messages.length + 1;
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      if (currentMessageCount < MAX_MESSAGES - 1) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(userMessage.text, currentMessageCount),
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Thank you for chatting with us! For detailed assistance, please contact us at hello@cesleapacademy.com or call 044 4741 0999. We\'re here to help! 🙌',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }
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
          className="fixed bottom-24 right-6 z-[60] w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col animate-in slide-in-from-bottom-4 duration-300"
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
          <div className="chatbot-messages flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Quick Options (only show if no user messages yet and under message limit) */}
            {messages.filter((m) => m.sender === 'user').length === 0 && messages.length < MAX_MESSAGES && (
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

            {/* Message limit warning */}
            {messages.length >= MAX_MESSAGES && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  💬 For more detailed assistance, please contact us directly at hello@cesleapacademy.com or call 044 4741 0999
                </p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  messages.length >= MAX_MESSAGES
                    ? 'Message limit reached. Please contact us directly.'
                    : messages.filter((m) => m.sender === 'user').length === 0
                    ? 'Please select an option above...'
                    : 'Type your message...'
                }
                disabled={messages.filter((m) => m.sender === 'user').length === 0 || messages.length >= MAX_MESSAGES}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] bg-white text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || messages.filter((m) => m.sender === 'user').length === 0 || messages.length >= MAX_MESSAGES}
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


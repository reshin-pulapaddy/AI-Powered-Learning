'use client';

import { useRef, useEffect } from 'react';

export default function CoursesMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const menuItems = [
    {
      name: 'AI Agents Specialization',
      href: '#ai-agents-specialization',
    },
    {
      name: 'Generative AI_ Prompt Engineering',
      href: '#generative-ai-prompt-engineering',
    },
    {
      name: 'Microsoft Copilot for Software Development Specialization',
      href: '#microsoft-copilot-software-development',
    },
  ];

  return (
    <div
      ref={menuRef}
      className="absolute left-0 top-full mt-2 z-40 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg hidden md:block animate-in fade-in slide-in-from-top-2 duration-200 min-w-[260px]"
      onMouseLeave={onClose}
    >
      <ul className="py-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#14467b] hover:text-white transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


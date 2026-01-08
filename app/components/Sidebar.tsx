'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  const recentPosts = [
    {
      id: 1,
      title: '15 Best Corporate Training Platforms in 2026: The Ultimate Guide for Future-Ready Workforce Development',
      date: '15 December, 2026',
      image: '📊',
    },
    {
      id: 2,
      title: 'The 5 Best eLearning Platforms for Corporate Training in 2026',
      date: '12 December, 2025',
      image: '🌐',
    },
    {
      id: 3,
      title: 'Top 7 LMS for Corporate Training: 2026 Edition',
      date: '9 December, 2026',
      image: '☁️',
    },
  ];

  const categories = ['AI Roleplay', 'AI Training', 'Corporate Training'];

  return (
    <aside className="space-y-8">
      {/* Search Bar */}
      <div className="rounded-xl bg-gray-50 p-6 border border-gray-200">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Search
        </h2>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-10 text-gray-900 placeholder-gray-500 focus:border-[#14467b] focus:outline-none focus:ring-2 focus:ring-[#14467b]/20 transition-colors"
          />
          <svg
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="rounded-xl bg-gray-50 p-6 border border-gray-200">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">
          Recent Posts
        </h2>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`#post-${post.id}`}
              className="group flex gap-4 transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#14467b] to-[#1a5a9a] text-2xl text-white">
                {post.image}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-[#14467b] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-xl bg-gray-50 p-6 border border-gray-200">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">
          Categories
        </h2>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`#category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center justify-between text-sm text-gray-700 hover:text-[#14467b] transition-colors group"
              >
                <span>{category}</span>
                <svg
                  className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}


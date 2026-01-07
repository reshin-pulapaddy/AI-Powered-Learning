'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import MegaMenu from './MegaMenu';
import MobileProductsMenu from './MobileProductsMenu';
import CorporateTrainingMenu from './CorporateTrainingMenu';
import CoachingMenu from './CoachingMenu';
import CoursesMenu from './CoursesMenu';
import BookDemoModal from './BookDemoModal';
import LoginModal from './LoginModal';
import SearchModal from './SearchModal';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [corporateTrainingMenuOpen, setCorporateTrainingMenuOpen] = useState(false);
  const [coursesMenuOpen, setCoursesMenuOpen] = useState(false);
  const [coachingMenuOpen, setCoachingMenuOpen] = useState(false);
  const [isBookDemoModalOpen, setIsBookDemoModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const navigation: Array<{
    name: string;
    href: string;
    hasMegaMenu: boolean;
    menuType?: 'products' | 'corporate-training' | 'courses' | 'coaching';
  }> = [
    { name: 'Products', href: '#products', hasMegaMenu: true, menuType: 'products' },
    { name: 'Corporate Training', href: '#training', hasMegaMenu: true, menuType: 'corporate-training' },
    { name: 'Courses', href: '#courses', hasMegaMenu: true, menuType: 'courses' },
    { name: 'Coaching', href: '#coaching', hasMegaMenu: true, menuType: 'coaching' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#14467b] text-white shadow-lg">
      {/* Top Bar */}
      <div className="hidden border-b border-[#1a5a9a] bg-[#0f3a5f] px-4 py-2 md:block w-full relative">
        <div className="flex items-center justify-between w-full text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:04447410999" className="hover:text-blue-200 transition-colors">
              044 4741 0999
            </a>
            <a href="mailto:hello@skillbridge.com" className="hover:text-blue-200 transition-colors">
              hello@skillbridge.com
            </a>
          </div>
          <div className="flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
            <span className="text-xs">No. 1 Corporate Training & Upskilling Company</span>
            <a
              href="#contact"
              className="rounded-md bg-white/10 px-3 py-1 text-xs hover:bg-white/20 transition-colors"
            >
              Talk to us
            </a>
          </div>
          <div className="flex items-center gap-3">
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/ces"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/cesltdofficial"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/ceslimited1/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* YouTube Icon */}
              <a
                href="https://www.youtube.com/@CES_Limited"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
                aria-label="Follow us on YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      {/* Main Navigation */}
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between relative z-50">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex flex-col items-start group">
              <span className="text-2xl md:text-3xl font-bold tracking-tight uppercase leading-none text-white">
                SKILLBRIDGE
              </span>
              <span className="text-[10px] md:text-xs font-normal tracking-[0.15em] text-blue-100/90 mt-1 uppercase">
                by CES
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => {
              if (item.hasMegaMenu) {
                if (item.menuType === 'products') {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        setProductsMenuOpen(true);
                        setCorporateTrainingMenuOpen(false);
                        setCoursesMenuOpen(false);
                        setCoachingMenuOpen(false);
                      }}
                      onMouseLeave={() => setProductsMenuOpen(false)}
                    >
                      <button
                        className="text-sm font-medium hover:text-blue-200 transition-colors relative group flex items-center gap-1"
                        onClick={() => {
                          setProductsMenuOpen(!productsMenuOpen);
                          setCorporateTrainingMenuOpen(false);
                          setCoursesMenuOpen(false);
                          setCoachingMenuOpen(false);
                        }}
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            productsMenuOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                      </button>
                      <MegaMenu isOpen={productsMenuOpen} onClose={() => setProductsMenuOpen(false)} />
                    </div>
                  );
                } else if (item.menuType === 'corporate-training') {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        setCorporateTrainingMenuOpen(true);
                        setProductsMenuOpen(false);
                        setCoursesMenuOpen(false);
                        setCoachingMenuOpen(false);
                      }}
                      onMouseLeave={() => setCorporateTrainingMenuOpen(false)}
                    >
                      <button
                        className="text-sm font-medium hover:text-blue-200 transition-colors relative group flex items-center gap-1"
                        onClick={() => {
                          setCorporateTrainingMenuOpen(!corporateTrainingMenuOpen);
                          setProductsMenuOpen(false);
                          setCoursesMenuOpen(false);
                          setCoachingMenuOpen(false);
                        }}
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            corporateTrainingMenuOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                      </button>
                      <CorporateTrainingMenu 
                        isOpen={corporateTrainingMenuOpen} 
                        onClose={() => setCorporateTrainingMenuOpen(false)} 
                      />
                    </div>
                  );
                } else if (item.menuType === 'courses') {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        setCoursesMenuOpen(true);
                        setProductsMenuOpen(false);
                        setCorporateTrainingMenuOpen(false);
                        setCoachingMenuOpen(false);
                      }}
                      onMouseLeave={() => setCoursesMenuOpen(false)}
                    >
                      <button
                        className="text-sm font-medium hover:text-blue-200 transition-colors relative group flex items-center gap-1"
                        onClick={() => {
                          setCoursesMenuOpen(!coursesMenuOpen);
                          setProductsMenuOpen(false);
                          setCorporateTrainingMenuOpen(false);
                          setCoachingMenuOpen(false);
                        }}
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            coursesMenuOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                      </button>
                      <CoursesMenu 
                        isOpen={coursesMenuOpen} 
                        onClose={() => setCoursesMenuOpen(false)} 
                      />
                    </div>
                  );
                } else if (item.menuType === 'coaching') {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        setCoachingMenuOpen(true);
                        setProductsMenuOpen(false);
                        setCorporateTrainingMenuOpen(false);
                        setCoursesMenuOpen(false);
                      }}
                      onMouseLeave={() => setCoachingMenuOpen(false)}
                    >
                      <button
                        className="text-sm font-medium hover:text-blue-200 transition-colors relative group flex items-center gap-1"
                        onClick={() => {
                          setCoachingMenuOpen(!coachingMenuOpen);
                          setProductsMenuOpen(false);
                          setCorporateTrainingMenuOpen(false);
                          setCoursesMenuOpen(false);
                        }}
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            coachingMenuOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                      </button>
                      <CoachingMenu 
                        isOpen={coachingMenuOpen} 
                        onClose={() => setCoachingMenuOpen(false)} 
                      />
                    </div>
                  );
                }
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-blue-200 transition-colors relative group"
                  onMouseEnter={() => {
                    setProductsMenuOpen(false);
                    setCorporateTrainingMenuOpen(false);
                    setCoursesMenuOpen(false);
                    setCoachingMenuOpen(false);
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all group-hover:w-full"></span>
                </a>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <div className="relative">
              <button
                onClick={() => setIsSearchModalOpen(!isSearchModalOpen)}
                className="hidden md:block p-2 hover:bg-white/10 rounded-md transition-colors"
                aria-label="Search"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <SearchModal
                isOpen={isSearchModalOpen}
                onClose={() => setIsSearchModalOpen(false)}
              />
            </div>

            {/* Login Button */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Login
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>

            {/* Schedule Call Button */}
            <button
              onClick={() => setIsBookDemoModalOpen(true)}
              className="hidden md:block px-4 py-2 bg-white text-[#14467b] rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
            >
              Schedule a Call
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1a5a9a] py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasMegaMenu ? (
                  <div>
                    {item.menuType === 'products' ? (
                      <>
                        <button
                          onClick={() => setProductsMenuOpen(!productsMenuOpen)}
                          className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                        >
                          {item.name}
                          <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                              productsMenuOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {productsMenuOpen && (
                          <div className="mt-2 ml-4 space-y-2 border-l-2 border-white/20 pl-4">
                            <MobileProductsMenu onClose={() => setProductsMenuOpen(false)} />
                          </div>
                        )}
                      </>
                    ) : item.menuType === 'corporate-training' ? (
                      <>
                        <button
                          onClick={() => setCorporateTrainingMenuOpen(!corporateTrainingMenuOpen)}
                          className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                        >
                          {item.name}
                          <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                              corporateTrainingMenuOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {corporateTrainingMenuOpen && (
                          <div className="mt-2 ml-4 space-y-2 border-l-2 border-white/20 pl-4">
                            <a
                              href="https://trainer.skillbridge.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCorporateTrainingMenuOpen(false)}
                            >
                              Join as SkillBridge Trainer
                            </a>
                            <a
                              href="https://www.skillbridge.com/genai-mastery-program/"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCorporateTrainingMenuOpen(false)}
                            >
                              GenAI Mastery Program
                            </a>
                          </div>
                        )}
                      </>
                    ) : item.menuType === 'courses' ? (
                      <>
                        <button
                          onClick={() => setCoursesMenuOpen(!coursesMenuOpen)}
                          className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                        >
                          {item.name}
                          <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                              coursesMenuOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {coursesMenuOpen && (
                          <div className="mt-2 ml-4 space-y-2 border-l-2 border-white/20 pl-4">
                            <a
                              href="#course-1"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCoursesMenuOpen(false)}
                            >
                              Course Category 1
                            </a>
                            <a
                              href="#course-2"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCoursesMenuOpen(false)}
                            >
                              Course Category 2
                            </a>
                            <a
                              href="#course-3"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCoursesMenuOpen(false)}
                            >
                              Course Category 3
                            </a>
                          </div>
                        )}
                      </>
                    ) : item.menuType === 'coaching' ? (
                      <>
                        <button
                          onClick={() => setCoachingMenuOpen(!coachingMenuOpen)}
                          className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                        >
                          {item.name}
                          <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                              coachingMenuOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {coachingMenuOpen && (
                          <div className="mt-2 ml-4 space-y-2 border-l-2 border-white/20 pl-4">
                            <a
                              href="https://www.skillbridge.com/skillbridges-one-on-one-coaching/"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCoachingMenuOpen(false)}
                            >
                              One-On-One Coaching
                            </a>
                            <a
                              href="https://www.skillbridge.com/skillbridges-group-coaching-program/"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCoachingMenuOpen(false)}
                            >
                              Group Coaching Program
                            </a>
                            <a
                              href="https://www.skillbridge.com/skillbridges-leadership-coaching-program/"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCoachingMenuOpen(false)}
                            >
                              Leadership Coaching Program
                            </a>
                            <a
                              href="https://www.skillbridge.com/skillbridges-one-on-one-internal-coaching/"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCoachingMenuOpen(false)}
                            >
                              One-On-One Internal Coaching
                            </a>
                          </div>
                        )}
                      </>
                    ) : null}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setIsLoginModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Login
            </button>
            <button
              onClick={() => {
                setIsBookDemoModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="block mt-4 w-full px-3 py-2 bg-white text-[#14467b] rounded-md text-sm font-medium text-center hover:bg-blue-50 transition-colors"
            >
              Schedule a Call
            </button>
          </div>
        )}
      </nav>

      {/* Book Demo Modal */}
      <BookDemoModal
        isOpen={isBookDemoModalOpen}
        onClose={() => setIsBookDemoModalOpen(false)}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </header>
  );
}


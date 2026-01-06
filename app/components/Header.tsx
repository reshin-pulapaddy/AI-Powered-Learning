'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import MegaMenu from './MegaMenu';
import MobileProductsMenu from './MobileProductsMenu';
import CorporateTrainingMenu from './CorporateTrainingMenu';
import CoachingMenu from './CoachingMenu';
import CoursesMenu from './CoursesMenu';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [corporateTrainingMenuOpen, setCorporateTrainingMenuOpen] = useState(false);
  const [coursesMenuOpen, setCoursesMenuOpen] = useState(false);
  const [coachingMenuOpen, setCoachingMenuOpen] = useState(false);

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
      <div className="hidden border-b border-[#1a5a9a] bg-[#0f3a5f] px-4 py-2 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+917353948100" className="hover:text-blue-200 transition-colors">
              +91 7353948100 (India)
            </a>
            <a href="mailto:hello@netskill.com" className="hover:text-blue-200 transition-colors">
              hello@netskill.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs">No. 1 Corporate Training & Upskilling Company</span>
            <a
              href="#contact"
              className="rounded-md bg-white/10 px-3 py-1 text-xs hover:bg-white/20 transition-colors"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between relative z-50">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold tracking-tight">
              NETSKILL by GoodWorks
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
            <button
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

            {/* Login Button */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors">
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
            <a
              href="#schedule"
              className="hidden md:block px-4 py-2 bg-white text-[#14467b] rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
            >
              Schedule a Call
            </a>

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
                              href="https://trainer.netskill.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCorporateTrainingMenuOpen(false)}
                            >
                              Join as Netskill Trainer
                            </a>
                            <a
                              href="https://www.netskill.com/genai-mastery-program/"
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
                              href="https://www.netskill.com/netskills-one-on-one-coaching/"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCoachingMenuOpen(false)}
                            >
                              One-On-One Coaching
                            </a>
                            <a
                              href="https://www.netskill.com/netskills-group-coaching-program/"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCoachingMenuOpen(false)}
                            >
                              Group Coaching Program
                            </a>
                            <a
                              href="https://www.netskill.com/netskills-leadership-coaching-program/"
                              className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                              onClick={() => setCoachingMenuOpen(false)}
                            >
                              Leadership Coaching Program
                            </a>
                            <a
                              href="https://www.netskill.com/netskills-one-on-one-internal-coaching/"
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
            <a
              href="#schedule"
              className="block mt-4 px-3 py-2 bg-white text-[#14467b] rounded-md text-sm font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule a Call
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}


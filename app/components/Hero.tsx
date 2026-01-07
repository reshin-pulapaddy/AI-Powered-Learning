import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#14467b] via-[#1a5a9a] to-[#0f3a5f] text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                            Corporate Training
                        </div>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            The Most Advanced AI-Powered Corporate Training Platform            </h1>

                        <p className="text-lg text-blue-100 sm:text-xl">
                        January 1, 2026
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="#read-more"
                                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-[#14467b] font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Read Article
                            </Link>
                            <Link
                                href="#explore"
                                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
                            >
                                Explore Platforms
                            </Link>
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="relative hidden lg:block">
                        <div className="relative h-96 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <div className="mx-auto w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <svg
                                            className="w-16 h-16 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-white/80 text-sm font-medium">AI-Powered Learning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
                <svg
                    className="w-full h-12 text-white dark:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path d="M0,0 C150,60 350,60 600,30 C850,0 1050,60 1200,30 L1200,120 L0,120 Z"></path>
                </svg>
            </div>
        </section>
    );
}


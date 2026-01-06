import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MainContent />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

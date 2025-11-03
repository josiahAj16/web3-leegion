import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import FindRolePage from './pages/FindRolePage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string, anchor?: string) => {
    setCurrentPage(page);
    // Use a timeout to ensure the new page is rendered before trying to scroll
    setTimeout(() => {
      if (anchor) {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 via-gray-900 to-gray-900 z-0"></div>
      <div className="relative z-10">
        <Header navigate={navigate} />
        <main className="container mx-auto px-6 pt-24">
          {currentPage === 'home' && <HomePage navigate={navigate} />}
          {currentPage === 'findRole' && <FindRolePage />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;


import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Stats from './components/Stats';
import NextMatches from './components/NextMatches';
import LastScores from './components/LastScores';
import Standings from './components/Standings';
import TopScorers from './components/TopScorers';
import Footer from './components/Footer';
import Groups from './components/Groups';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-green-800 via-green-900 to-black text-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <main className="space-y-12 mt-8">
          <Stats />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NextMatches />
            <LastScores />
          </div>
          <Groups />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <Standings />
            </div>
            <TopScorers />
          </div>
        </main>
        <Footer />
      </div>
      <SpeedInsights />
    </div>
  );
};

export default App;

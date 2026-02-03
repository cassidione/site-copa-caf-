
import React from 'react';
import SectionCard from './SectionCard';

const topScorers = [
  { pos: '1°', name: 'João Silva', team: 'time', goals: 0 },
  { pos: '2°', name: 'Pedro Santos', team: 'time', goals: 0 },
  { pos: '3°', name: 'Lucas Oliveira', team: 'time', goals: 0 },
  { pos: '4°', name: 'Marcos Lima', team: 'time', goals: 0 },
  { pos: '5°', name: 'Rafael Costa', team: 'time', goals: 0 },
  { pos: '6°', name: 'Bruno Alves', team: 'time', goals: 0 },
  { pos: '7°', name: 'Felipe Souza', team: 'time', goals: 0 },
  { pos: '8°', name: 'Diego Ferreira', team: 'time', goals: 0 },
  { pos: '9°', name: 'André Pereira', team: 'time', goals: 0 },
  { pos: '10°', name: 'Carlos Ribeiro', team: 'time', goals: 0 },
];

const TopScorers: React.FC = () => {
  return (
    <SectionCard title="Artilharia" icon="fas fa-futbol">
      <div className="space-y-3">
        {topScorers.map((scorer, index) => (
          <div key={index} className="flex items-center p-3 bg-green-900/50 rounded-lg hover:bg-green-800/70 transition-colors duration-200">
            <div className="w-8 text-center font-bold text-yellow-400">{scorer.pos}</div>
            <div className="flex-1 ml-4">
              <div className="font-semibold text-white">{scorer.name}</div>
              <div className="text-sm text-green-300">{scorer.team}</div>
            </div>
            <div className="font-bold text-lg text-white">{scorer.goals} <span className="text-sm font-normal text-gray-400">gols</span></div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default TopScorers;


import React from 'react';
import SectionCard from './SectionCard';

const nextMatches = [
  { group: 'Grupo A', team1: 'time', team2: 'time', date: '07 de fev', time: '08:00H' },
  { group: 'Grupo B', team1: 'time', team2: 'time', date: '07 de fev', time: '10:00H' },
  { group: 'Grupo C', team1: 'time', team2: 'time', date: '07 de fev', time: '13:00H' },
  { group: 'Grupo D', team1: 'time', team2: 'time', date: '07 de fev', time: '15:00H' },
];

const NextMatches: React.FC = () => {
  return (
    <SectionCard title="Próximos Jogos" icon="fas fa-forward">
      <div className="space-y-4">
        {nextMatches.map((match, index) => (
          <div key={index} className="p-4 bg-green-900/50 rounded-lg hover:bg-green-800/70 transition-colors duration-200">
            <p className="text-xs text-yellow-400 font-bold mb-2">{match.group}</p>
            <div className="flex items-center justify-between">
              <div className="text-right w-2/5 font-semibold text-lg">{match.team1}</div>
              <div className="text-center w-1/5 text-gray-400 text-sm font-mono">vs</div>
              <div className="text-left w-2/5 font-semibold text-lg">{match.team2}</div>
            </div>
             <div className="text-center mt-2 text-sm text-green-300">
                <span>{match.date}</span> • <span>{match.time}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default NextMatches;

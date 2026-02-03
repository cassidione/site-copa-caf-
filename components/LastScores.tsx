
import React from 'react';
import SectionCard from './SectionCard';

const lastScores = [
  { game: '1° jogo', team1: 'time', score1: 0, team2: 'time', score2: 0 },
  { game: '2° jogo', team1: 'time', score1: 0, team2: 'time', score2: 0 },
  { game: '3° jogo', team1: 'time', score1: 0, team2: 'time', score2: 0 },
  { game: '4° jogo', team1: 'time', score1: 0, team2: 'time', score2: 0 },
];

const LastScores: React.FC = () => {
  return (
    <SectionCard title="Placar dos últimos jogos" icon="fas fa-history">
      <div className="space-y-4">
        {lastScores.map((score, index) => (
          <div key={index} className="p-4 bg-green-900/50 rounded-lg hover:bg-green-800/70 transition-colors duration-200">
            <p className="text-xs text-yellow-400 font-bold mb-2">{score.game}</p>
            <div className="flex items-center justify-center text-lg">
              <span className="w-2/5 text-right font-medium capitalize">{score.team1}</span>
              <span className="w-1/5 text-center font-bold text-2xl text-white">
                {score.score1} - {score.score2}
              </span>
              <span className="w-2/5 text-left font-medium capitalize">{score.team2}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default LastScores;

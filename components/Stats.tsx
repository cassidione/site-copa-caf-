
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10 transform hover:-translate-y-2 transition-transform duration-300">
    <div className="text-yellow-400 text-5xl mb-2"><i className={icon}></i></div>
    <div className="text-4xl font-bold">{value}</div>
    <div className="text-green-300 uppercase tracking-wider">{label}</div>
  </div>
);

const Stats: React.FC = () => {
  const stats = [
    { value: '20', label: 'Times', icon: 'fas fa-users' },
    { value: '4', label: 'Grupos', icon: 'fas fa-sitemap' },
    { value: '4', label: 'Jogos por dia', icon: 'fas fa-calendar-day' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} icon={stat.icon} />
      ))}
    </div>
  );
};

export default Stats;

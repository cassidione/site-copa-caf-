
import React from 'react';
import SectionCard from './SectionCard';

const groupsData = {
  'Grupo A': ['time', 'time', 'time', 'time', 'time'],
  'Grupo B': ['time', 'time', 'time', 'time', 'time'],
  'Grupo C': ['time', 'time', 'time', 'time', 'time'],
  'Grupo D': ['time', 'time', 'time', 'time', 'time'],
};

const Groups: React.FC = () => {
  return (
    <SectionCard title="Grupos" icon="fas fa-layer-group">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(groupsData).map(([groupName, teams]) => (
          <div key={groupName}>
            <h3 className="text-lg font-bold text-yellow-400 mb-3">{groupName}</h3>
            <ul className="space-y-2">
              {teams.map((team, index) => (
                <li key={index} className="flex items-center bg-green-900/50 p-2 rounded-md">
                  <span className="text-gray-400 font-semibold mr-3">{index + 1}</span>
                  <span className="text-white capitalize">{team}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Groups;

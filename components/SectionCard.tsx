
import React, { type ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  children: ReactNode;
  icon?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, children, icon }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
          {icon && <i className={`${icon} mr-3`}></i>}
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SectionCard;

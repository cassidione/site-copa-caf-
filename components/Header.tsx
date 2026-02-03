
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-10 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
      <div className="flex justify-center items-center gap-4 mb-4">
        <img src="img/logo ccf.png" alt="Troféu Copa Café Guarani" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
        <div>
           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
               COPA CAFÉ GUARANI
             </span>
           </h1>
        </div>
      </div>
      <p className="text-md md:text-lg text-green-200 max-w-2xl mx-auto">
        O maior campeonato de futebol amador da região • 20 times • 4 grupos
      </p>
    </header>
  );
};

export default Header;


import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-16 py-8 border-t border-green-700/50">
      <div className="mb-4 flex justify-center items-center gap-6 text-2xl">
        <a href="#" className="text-green-300 hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-instagram mr-2"></i>
            <span className="text-lg font-semibold">COPACAFÉGUARANI</span>
        </a>
        <a href="#" className="text-green-300 hover:text-yellow-400 transition-colors duration-300">
            <i className="fab fa-youtube mr-2"></i>
            <span className="text-lg font-semibold">COPACAFÉ</span>
        </a>
      </div>
      <p className="text-green-200 max-w-lg mx-auto">
        FIQUE POR DENTRO DE TUDO QUE ACONTECE DENTRO DAS QUATRO LINHAS DO GRAMADO.
      </p>
      <p className="text-xs text-green-500 mt-6">
        © 2024 Copa Café Guarani. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;

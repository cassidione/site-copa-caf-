
import React from 'react';
import SectionCard from './SectionCard';

const mediaItems = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop', alt: 'Jogador de futebol chutando a bola' },
  { type: 'video', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', poster: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1517424911139-7a2dc79e1b23?q=80&w=1770&auto=format&fit=crop', alt: 'Campo de futebol visto de cima' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1964&auto=format&fit=crop', alt: 'Torcida em um estádio de futebol' },
];

const MediaGallery: React.FC = () => {
  return (
    <SectionCard title="Fotos e Vídeos" icon="fas fa-images">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mediaItems.map((item, index) => (
          <div key={index} className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 shadow-lg cursor-pointer">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <video
                controls
                poster={item.poster}
                className="w-full h-full object-cover"
              >
                <source src={item.src} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            )}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default MediaGallery;

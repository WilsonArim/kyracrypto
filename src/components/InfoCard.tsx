import React, { useState } from 'react';

interface Slide {
  image: string; // caminho da imagem ou emoji
  alt?: string;
  caption?: string;
}

interface InfoCardProps {
  title: string;
  description: string;
  slides?: Slide[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, slides }) => {
  const [current, setCurrent] = useState(0);
  const hasSlides = slides && slides.length > 0;

  const nextSlide = () => setCurrent((prev) => (slides && prev < slides.length - 1 ? prev + 1 : 0));
  const prevSlide = () => setCurrent((prev) => (slides && prev > 0 ? prev - 1 : (slides ? slides.length - 1 : 0)));

  return (
    <div className="bg-[#232234] border border-cyan-400 rounded-2xl p-6 flex flex-col items-center w-full max-w-md shadow-lg m-2">
      <h2 className="text-2xl font-bold text-cyan-300 mb-2 text-center">{title}</h2>
      {hasSlides && (
        <div className="relative flex flex-col items-center mb-3 w-full">
          <div className="flex items-center justify-center w-full h-32">
            {slides![current].image.startsWith('/') ? (
              <img src={slides![current].image} alt={slides![current].alt || ''} className="h-28 object-contain" />
            ) : (
              <span className="text-6xl">{slides![current].image}</span>
            )}
          </div>
          {slides![current].caption && (
            <div className="text-gray-300 text-sm mt-1 text-center">{slides![current].caption}</div>
          )}
          {slides!.length > 1 && (
            <div className="flex justify-center items-center mt-2 space-x-2">
              <button onClick={prevSlide} className="text-cyan-400 px-2 py-1 rounded hover:bg-cyan-900">◀</button>
              <span className="text-gray-400 text-xs">{current + 1}/{slides!.length}</span>
              <button onClick={nextSlide} className="text-cyan-400 px-2 py-1 rounded hover:bg-cyan-900">▶</button>
            </div>
          )}
        </div>
      )}
      <p className="text-gray-200 text-base text-center mb-2">{description}</p>
    </div>
  );
};

export default InfoCard; 
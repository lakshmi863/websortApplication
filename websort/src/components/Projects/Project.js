import React, { useState } from 'react';

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const slides = [
    { image: "/images/app development.jpg", title: "App Development", description: "Description for App Dev" },
    { image: "/images/uiux design.jpg", title: "UI/UX Design", description: "User-focused designs" },
    { image: "/images/web.jpg", title: "Web Development", description: "Responsive and modern" },
    { image: "/images/web development.jpg", title: "Web Design", description: "Clean UI/UX" },
    { image: "/images/app.jpg", title: "Mobile App", description: "Cross-platform apps" },
    { image: "/images/iot.jpg", title: "AI & IoT", description: "Innovative AI & IoT" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
    alert(`Clicked: ${slides[index].title}`);
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/Project.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <h1 className="text-white text-center text-3xl font-semibold mb-6">Our Projects</h1>

      {/* Slider Container */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex justify-center gap-6 px-4">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            const isHovered = index === hoverIndex;

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`cursor-pointer transition-transform duration-300 flex-shrink-0 ${
                  isActive || isHovered ? 'scale-110 z-20' : 'scale-90 opacity-80'
                }`}
                style={{
                  width: '250px',
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{slide.title}</h3>
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;

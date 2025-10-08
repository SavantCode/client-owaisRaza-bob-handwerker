import React from 'react';
import vividBackground from '../assets/vivid-blurred-colorful-background.jpg'; 
// Adjust path if needed

const Hero = () => {
  return (
    <section
      className="bg-[#0a2540] h-[50vh] w-full flex flex-col justify-center items-center text-center select-none overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Huge “BOB” text with vivid gradient fill */}
      <h1
        className="text-[25vw] sm:text-[20vw] md:text-[18vw] lg:text-[15vw] font-extrabold uppercase tracking-widest text-transparent bg-clip-text leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        style={{
          backgroundImage: `url(${vividBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        BOB
      </h1>

      {/* Subtitle — still vivid, but smaller and elegant */}
      <p
        className="text-[4vw] sm:text-[3vw] md:text-[2vw] mt-4 font-semibold text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        style={{
          backgroundImage: `url(${vividBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Handwerker & Aufträge weltweit
      </p>
    </section>
  );
};

export default Hero;



// import React from 'react';

// const Hero = () => {
//   // Image used to create the holographic / rainbow effect
//   const holographicImageUrl =
//     'https://images.unsplash.com/photo-1565494149836-e1f72a493a5a?q=80&w=2574&auto=format&fit=crop';

//   return (
//     <section
//       className="bg-[#0a2540] h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center select-none"
//       aria-label="Hero Section"
//     >
//       {/* Main BOB heading with holographic text effect */}
//       <h1
//         className="text-7xl sm:text-8xl md:text-9xl font-extrabold uppercase tracking-widest text-transparent bg-clip-text leading-tight"
//         style={{
//           backgroundImage: `url(${holographicImageUrl})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         BOB
//       </h1>

//       {/* Subheading with same text effect */}
//       <p
//         className="text-lg sm:text-xl md:text-2xl mt-4 font-semibold text-transparent bg-clip-text"
//         style={{
//           backgroundImage: `url(${holographicImageUrl})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         Handwerker & Aufträge weltweit
//       </p>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from 'react';

function Minerals() {
  const [size, setSize] = useState(90); // Start at 90vw/vh

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newSize = Math.min(90 + scrollY * 0.05, 100); // Adjust as needed
      setSize(newSize);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* First section: taller and with flex centering */}
      <section className="h-[100vh] w-screen relative overflow-hidden flex justify-center">
        <div
          className="sticky top-0 flex items-center justify-center w-screen h-screen"
        >
          <div
            className="bg-slate-500 transition-all duration-300"
            style={{
              width: `${size}vw`,
              height: `${size}vh`
            }}
          ></div>
        </div>
      </section>

      {/* Second section */}
      <section className="h-screen w-screen bg-slate-800"></section>
    </div>
  );
}

export default Minerals;

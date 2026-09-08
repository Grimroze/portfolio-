import React from 'react';

export default function Preloader() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Pure Aesthetic Rotating Glowing Orb (No Text) */}
      <div className="loader-wrapper">
        <div className="loader" />
      </div>
    </div>
  );
}

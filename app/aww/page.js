import React from 'react';

function Yes() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="relative w-full max-w-screen-lg">
        <video
          src="gif/lego.mp4"
          autoPlay
          loop
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}

export default Yes;

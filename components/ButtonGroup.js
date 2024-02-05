"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ButtonGroup = () => {
  const [yesSize, setYesSize] = useState(16);
  const [noSize, setNoSize] = useState(16);
  const [currentNoIndex, setCurrentNoIndex] = useState(0);
  const [currentNoValue, setCurrentNoValue] = useState("No");
  const router = useRouter();

  const noButton = ["Are you sure?", "Really sure?", "think again!", "Last chance!", "Are you really really sure?", "Give it another chance"];

  const onYes = () => {
    router.push('/aww')

  };

  const onNo = () => {
    setNoSize((prevSize) => prevSize / 1.2);
    setYesSize((prevSize) => prevSize * 1.2);

    // Update the "No" button text to the next value in the array
    setCurrentNoIndex((prevIndex) => (prevIndex + 1) % noButton.length);
    setCurrentNoValue(noButton[currentNoIndex])
  };

  return (
    <div className="justify-center space-x-5 text-center lg:max-w-5xl lg:w-full">
      <button
        style={{ fontSize: `${yesSize}px` }}
        className="mb-3 font-semibold bg-green-400 dark:bg-green-600"
        onClick={onYes}
      >
        Yes
      </button>
      <button
        style={{ fontSize: `${noSize}px` }}
        className="mb-3 font-semibold bg-red-400 dark:bg-red-600"
        onClick={onNo}
      >
        {currentNoValue}
      </button>
    </div>
  );
};

export default ButtonGroup;

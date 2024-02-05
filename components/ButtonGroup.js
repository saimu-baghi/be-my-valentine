"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ButtonGroup = () => {
  const [yesSize, setYesSize] = useState(24);
  const [noSize, setNoSize] = useState(24);
  const [currentNoIndex, setCurrentNoIndex] = useState(0);
  const [currentNoValue, setCurrentNoValue] = useState("No");
  const router = useRouter();

  const noButton = ["Are you sure?", "Really sure?", "think again!", "Last chance!", "Are you really really sure?", "This could be a mistake!", "Don't be so cold!", "Change of heart?", "Is this your final answer?", "Give it another chance", "You are breaking my heart!"];

  const onYes = () => {
    router.push('/aww')

  };

  const onNo = () => {
    setNoSize((prevSize) => prevSize / 1.16);
    setYesSize((prevSize) => prevSize * 1.2);

    // Update the "No" button text to the next value in the array
    setCurrentNoIndex((prevIndex) => (prevIndex + 1) % noButton.length);
    setCurrentNoValue(noButton[currentNoIndex])
  };

  return (
    <div className="justify-center space-x-5 text-center lg:max-w-5xl lg:w-full">
      <button
        style={{ fontSize: `${yesSize}px` }}
        className="mb-3 font-semibold bg-green-400 dark:bg-green-600 hover:bg-green-300 dark:hover:bg-green-500"
        onClick={onYes}
      >
        Yes
      </button>
      <button
        style={{ fontSize: `${noSize}px` }}
        className="mb-3 font-semibold bg-red-400 dark:bg-red-600 hover:bg-red-300 dark:hover:bg-red-500"
        onClick={onNo}
      >
        {currentNoValue}
      </button>
    </div>
  );
};

export default ButtonGroup;

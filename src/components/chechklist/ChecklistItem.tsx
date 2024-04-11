import React from "react";
import { CiLock, CiUnlock } from "react-icons/ci";
import { ChecklistItemProps } from '@components/types/ChecklistType'


const ChecklistItem: React.FC<ChecklistItemProps> = ({ word, onClick, checked, onLock }) => {
  const handleClick = () => {
    if (!word.locked) {
      onClick();
    }
  };

    const calculateRemainingTime = (timestamp: number) => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - timestamp;
      const remainingTime = Math.max(0, 5000 - elapsedTime); // Limit to 0 if exceeded 5 seconds
      return Math.ceil(remainingTime / 1000); // Convert milliseconds to seconds and round up
    };
    

    const handleLock = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      onLock();
    };
      
  return (
    <>
      {checked ? 
      (
        <div>
          <div onClick={handleClick} className="word-button flex justify-between border-2 border-[#d4d1f5] hover:border-[#9597c1]">
            <div className="flex justify-center ml-[40%]">
            <span  className="">{word.word} </span>
            {word.locked ? (
              <button onClick={handleLock} className="ml-[20%]" ><CiLock /></button>
            ) : (
              <button onClick={handleLock} className="ml-[20%]"><CiUnlock /></button>
            )}
            </div>
            <div>
            {word.timestamp > 0 && !word.locked && ( // Show countdown timer only if word is not locked
            <div className="timer-icon  self-center text-[16px] mr-[1.1em] text-[#ff4444]">
              {calculateRemainingTime(word.timestamp)}
            </div>
          )}
          </div>
          </div>
          
        </div>
      ) : (
        <div>
          <button className="word-button" onClick={handleClick}>{word.word}</button>
        </div>
        
      )}
    </>
  );
};

export default ChecklistItem;

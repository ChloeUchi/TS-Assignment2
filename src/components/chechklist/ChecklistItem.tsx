import React from "react";
import { CiLock, CiUnlock } from "react-icons/ci";
// import { FiClock } from "react-icons/fi";

interface Props {
  checked: boolean;
  word: {
    timestamp: number;
    word: string;
    locked?: boolean;
  };
  onClick: () => void;
  onLock: () => void;
}

const ChecklistItem: React.FC<Props> = ({ word, onClick, checked, onLock }) => {
  const handleClick = () => {
    if (!word.locked) {
      onClick();
    }
  };

  const handleLock = () => {
    onLock();
  };

    const calculateRemainingTime = (timestamp: number) => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - timestamp;
      const remainingTime = Math.max(0, 5000 - elapsedTime); // Limit to 0 if exceeded 5 seconds
      return Math.ceil(remainingTime / 1000); // Convert milliseconds to seconds and round up
    };
    
  return (
    <>
      {checked ? 
      (
        <div>
          <div className="word-button flex justify-between border-2 border-[#d4d1f5] hover:border-[#9597c1]">
            <div className="flex justify-between">
            <button onClick={handleClick} className="pl-[7em]">{word.word} </button>
            {word.locked ? (
              <button onClick={handleLock} className="ml-[1em] mr-[2em]" ><CiLock /></button>
              // <i onClick={handleLock}><CiLock /></i>
            ) : (
              <button onClick={handleLock} className="ml-[1em] mr-[2em]"><CiUnlock /></button>
              // <i onClick={handleLock}><CiUnlock /></i>
            )}
            </div>
            <div>
            {word.timestamp > 0 && !word.locked && ( // Show countdown timer only if word is not locked
            <div className="timer-icon  self-center text-sm mt-[1.9em] mr-[1em] text-[#ff4444]">
              {/* <FiClock />  */}
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

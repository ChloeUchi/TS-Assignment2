import React from "react";
import { CiLock, CiUnlock } from "react-icons/ci";

interface Props {
  checked: boolean;
  word: {
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

  return (
    <>
      {checked ? 
      (
        <div>
          <div className="word-button">
            <button onClick={handleClick} className="pr-[5em]">{word.word} </button>
            {word.locked ? (
              <button onClick={handleLock}><CiLock /></button>
              // <i onClick={handleLock}><CiLock /></i>
            ) : (
              <button onClick={handleLock}><CiUnlock /></button>
              // <i onClick={handleLock}><CiUnlock /></i>
            )}
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

// import React from 'react'
// import ChecklistItem from "./ChecklistItem";

// interface Props {
//   title?: string;
//   check: boolean;
//   vocabulary: {
//     word: string;
//     lang: string;
//     locked: boolean;
//   }[];
//   onClick: (index: number, lang: string, locked: boolean) => void;
//   onLock: (index: number, lang: string, locked: boolean) => void;
// }

// const ChecklistContent: React.FC<Props> = ({  vocabulary, onClick, check,onLock }) => {
//     return (
//       <div>
//         {/* <h2>{title}</h2> */}
//         {vocabulary.map((word, index) => (
//           <ChecklistItem
//             key={index}
//             word={word}
//             checked={check}
//             onClick={() => onClick(index, word.lang, word.locked )}
//             onLock={() => onLock(index,word.lang, word.locked )}
//           />
//         ))}
//       </div>
//     );
// }

// export default ChecklistContent
// Inside VocabularyList.tsx

import React from "react";
import ChecklistItem from "./ChecklistItem";
// import { FiClock } from "react-icons/fi";

interface Props {
  check: boolean;
  vocabulary: {
    word: string;
    lang: string;
    locked: boolean;
    timestamp: number;
  }[];
  onClick: (index: number, lang: string, locked: boolean) => void;
  onLock: (index: number, lang: string, locked: boolean) => void;
}

const ChecklistContent: React.FC<Props> = ({
  vocabulary,
  onClick,
  check,
  onLock,
}) => {
  // const calculateRemainingTime = (timestamp: number) => {
  //   const currentTime = Date.now();
  //   const elapsedTime = currentTime - timestamp;
  //   const remainingTime = Math.max(0, 5000 - elapsedTime); // Limit to 0 if exceeded 5 seconds
  //   return Math.ceil(remainingTime / 1000); // Convert milliseconds to seconds and round up
  // };

  return (
    <div>
      {vocabulary.map((word, index) => (
        <div key={index} className="word-container" >
          {/* style={{display:'flex'}} */}
          <ChecklistItem  
            word={word}
            onClick={() => onClick(index, word.lang, word.locked)}
            onLock={() => onLock(index, word.lang, word.locked)}
            checked={check}
          />
          {/* {word.timestamp > 0 && !word.locked && ( // Show countdown timer only if word is not locked
            <div className="timer-icon">
              <FiClock /> {calculateRemainingTime(word.timestamp)}
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default ChecklistContent;

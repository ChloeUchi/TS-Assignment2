// ChecklistContent.tsx

import React, { useState, useEffect } from 'react';
import ChecklistItem from './ChecklistItem';

interface Word {
  lang: string;
  word: string;
}

interface ChecklistContentProps {
  words: Word[];
  selectedWord: string | null; // Added for compatibility
  onItemClick: (word: string) => void;
}

const ChecklistContent: React.FC<ChecklistContentProps> = ({ words, selectedWord, onItemClick }) => {
  const [selectedWords, setSelectedWords] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const timeoutId = setInterval(() => {
      const currentTime = new Date().getTime();
      const newSelectedWords: { [key: string]: number } = {};

      for (const word in selectedWords) {
        const timePressed = selectedWords[word];
        if ((currentTime - timePressed) <= 5000) {
          newSelectedWords[word] = timePressed;
        }
      }

      setSelectedWords(newSelectedWords);
    }, 1000); // Run every second

    return () => clearInterval(timeoutId);
  }, [selectedWords]);

  const handleClick = (word: string) => {
    setSelectedWords(prevSelectedWords => ({
      ...prevSelectedWords,
      [word]: new Date().getTime(),
    }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* Vocabulary column */}
      <div>
        {words.map((word, index) => {
          if (!selectedWords[word.word]) {
            return (
              <ChecklistItem
                key={index}
                text={word.word}
                onClick={() => handleClick(word.word)}
                isSelected={false}
              />
            );
          }
          return null;
        })}
      </div>
      {/* Thai Language column */}
      <div>
        {Object.keys(selectedWords).map((selectedWord, index) => {
          const thaiWord = words.find(word => word.word === selectedWord && word.lang === 'TH');
          return thaiWord ? <ChecklistItem key={index} text={thaiWord.word} isSelected={false} onClick={() => handleClick(thaiWord.word)} /> : null;
        })}
      </div>
      {/* English Language column */}
      <div>
        {Object.keys(selectedWords).map((selectedWord, index) => {
          const englishWord = words.find(word => word.word === selectedWord && word.lang === 'EN');
          return englishWord ? <ChecklistItem key={index} text={englishWord.word} isSelected={false} onClick={() => handleClick(englishWord.word)} /> : null;
        })}
      </div>
    </div>
  );
};

export default ChecklistContent;

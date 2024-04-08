// Checklist.tsx

import React, { useState } from 'react';
import ChecklistHeader from './ChecklistHeader';
import ChecklistContent from './ChecklistContent';

interface Word {
  lang: string;
  word: string;
}

interface ChecklistProps {
  words: Word[];
}

const Checklist: React.FC<ChecklistProps> = ({ words }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const handleItemClick = (word: string) => {
    setSelectedWord(word);
  };

  return (
    <div>
      <ChecklistHeader />
      <ChecklistContent words={words} selectedWords={selectedWord ? [selectedWord] : []} onItemClick={handleItemClick} />

    </div>
  );
};

export default Checklist;

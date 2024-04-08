// WordList.tsx

import React from 'react';
import Checklist from '@components/chechklist/Checklist';
import wordData from '@function/word.json';

const WordList: React.FC = () => {
  return <Checklist words={wordData} />;
};

export default WordList;

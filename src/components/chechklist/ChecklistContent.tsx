import React from "react";
import ChecklistItem from "./ChecklistItem";
import { Props } from '@components/types/ChecklistType'

const ChecklistContent: React.FC<Props> = ({
  vocabulary,
  onClick,
  check,
  onLock,
}) => {
  return (
    <div>
      {vocabulary.map((word, index) => (
        <div key={index} className="word-container" >
          <ChecklistItem  
            word={word}
            onClick={() => onClick(index, word.lang, word.locked)}
            onLock={() => onLock(index, word.lang, word.locked)}
            checked={check}
          />
        </div>
      ))}
    </div>
  );
};

export default ChecklistContent;

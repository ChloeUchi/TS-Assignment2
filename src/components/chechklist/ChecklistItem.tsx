// ChecklistItem.tsx

import React from 'react';

interface ChecklistItemProps {
  text: string;
  isSelected: boolean;
  onClick?: () => void; // Make onClick prop optional
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ text, isSelected, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', backgroundColor: isSelected ? 'lightblue' : 'transparent' }}>
      {text}
    </div>
  );
};

export default ChecklistItem;

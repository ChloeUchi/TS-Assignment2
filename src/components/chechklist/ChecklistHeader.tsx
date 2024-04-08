// ChecklistHeader.tsx

import React from 'react';
const ChecklistHeader: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h2>คำศัพย์</h2>
      <h2>ภาษาไทย</h2>
      <h2>ภาษาอังกฤษ</h2>
    </div>
  );
};

export default ChecklistHeader;


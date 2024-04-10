// ChecklistHeader.tsx

import React from 'react';
const ChecklistHeader: React.FC = () => {
  return (
    <>
    <div className='flex-container'>
      <div className='div-style border-4 border-[#54517e] font-bold'>คำศัพท์</div>
      <div className='div-style border-4 border-[#54517e] font-bold'>ภาษาไทย</div>
      <div className='div-style border-4 border-[#54517e] font-bold'>ภาษาอังกฤษ</div>
    </div>
    </>
  );
};

export default ChecklistHeader;


import React from 'react';
import ChecklistHeader from '@components/chechklist/ChecklistHeader';
import Checklist from '@components/chechklist/Checklist';

const Page: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
      <div className="col-span-3">
        <ChecklistHeader />
      </div>
      <div className="col-span-1">
        {/* First column content */}
        <Checklist />
      </div>
      <div className="col-span-1">
        {/* Second column content */}
        <Checklist />
      </div>
      <div className="col-span-1">
        {/* Third column content */}
        <Checklist />
      </div>
      <div className="col-span-3">
        {/* Additional content for second row, if any */}
      </div>
    </div>
  );
};

export default Page;

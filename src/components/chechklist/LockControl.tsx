// LockControl.tsx

import React from 'react';
import { FaLock, FaUnlock } from 'react-icons/fa';

interface LockControlProps {
  locked: boolean;
  onToggleLock: () => void;
}

const LockControl: React.FC<LockControlProps> = ({ locked, onToggleLock }) => {
  return (
    <>
      {locked ? <FaLock onClick={onToggleLock} /> : <FaUnlock onClick={onToggleLock} />}
    </>
  );
};

export default LockControl;

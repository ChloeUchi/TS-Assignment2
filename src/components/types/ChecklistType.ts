export interface Word {
    timestamp: number;
    lang: string;
    word: string;
    locked: boolean;
  }

  export interface Props {
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

  export interface ChecklistItemProps {
    checked: boolean;
    word: {
      timestamp: number;
      word: string;
      locked?: boolean;
    };
    onClick: () => void;
    onLock: () => void;
  }
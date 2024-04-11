import { Word } from "@components/types/ChecklistType";

// utils/wordUtils.ts
export async function getWord(): Promise<Word[]> {
    try {
      const response = await fetch("word.json");
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
  
      const wordData: Word[] = data.map((item: any) => ({
        timestamp: 0,
        lang: item.lang,
        word: item.word,
        locked: false,
      }));
  
      return wordData;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
  export function handleAutoRemove(
    setWords: React.Dispatch<React.SetStateAction<Word[]>>
  ) {
    return () => {
      setWords((prevWords) =>
        prevWords.map((word) => {
          if (!word.locked && Date.now() - word.timestamp > 5000) {
            setWords((prevWords) => [...prevWords, word]);
            return null;
          }
          return word;
        }).filter((w): w is Word => w !== null)
      );
    };
  }
  
  // Define other utility functions related to words if needed
  
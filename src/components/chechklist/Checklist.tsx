
import React, { useState, useEffect } from "react";
import ChecklistContent from "./ChecklistContent";
import ChecklistHeader from "./ChecklistHeader";

interface Word {
  timestamp: number;
  lang: string;
  word: string;
  locked: boolean;
}

const Checklist: React.FC = () => {
  const [word, setWord] = useState<Word[]>([]);
  const [thaiWord, setThaiWord] = useState<Word[]>([]);
  const [engWord, setEngWord] = useState<Word[]>([]);

  useEffect(() => {
    getWord();
  }, []);

  const getWord = async () => {
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

      setWord(wordData);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleClick = (index: number) => {
  //   const clickedWord = word[index];
  //   const updatedWord = { ...clickedWord, timestamp: Date.now() };
  //   if (clickedWord.lang === "TH") {
  //     setThaiWord((prevThaiWord) => [...prevThaiWord, updatedWord]);
  //     setWord((prevWord) => prevWord.filter((_, i) => i !== index));
  //   } else if (clickedWord.lang === "EN") {
  //     setEngWord((prevEngWord) => [...prevEngWord, updatedWord]);
  //     setWord((prevWord) => prevWord.filter((_, i) => i !== index));
  //   }
  // };
  const handleClick = (index: number) => {
    const clickedWord = word[index];
    const updatedWord = { ...clickedWord, timestamp: Date.now() }; // Update timestamp
    if (clickedWord.lang === "TH") {
      setThaiWord((prevThaiWord) => [...prevThaiWord, updatedWord]);
      setWord((prevWord) => prevWord.filter((_, i) => i !== index));
    } else if (clickedWord.lang === "EN") {
      setEngWord((prevEngWord) => [...prevEngWord, updatedWord]);
      setWord((prevWord) => prevWord.filter((_, i) => i !== index));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleAutoRemove();
    }, 1000);

    return () => clearInterval(timer);
  }, [thaiWord, engWord]);

  const handleAutoRemove = () => {
// Inside handleAutoRemove function
setThaiWord((prevThaiWord) =>
  prevThaiWord.map((word) => {
    if (!word.locked && Date.now() - word.timestamp > 5000) {
      setWord((prevWord) => [...prevWord, word]);
      return null;
    }
    return word;
  }).filter((w): w is Word => w !== null) // Add type assertion to filter
);

setEngWord((prevEngWord) =>
  prevEngWord.map((word) => {
    if (!word.locked && Date.now() - word.timestamp > 5000) {
      setWord((prevWord) => [...prevWord, word]);
      return null;
    }
    return word;
  }).filter((w): w is Word => w !== null) // Add type assertion to filter
);

  };

  const handleResetWord = (index: number, lang: string, locked: boolean) => {
    if (locked) {
      return;
    } else {
      if (lang === "TH") {
        const clickedThaiWord = thaiWord[index];
        setWord((prevWord) => [...prevWord, clickedThaiWord]);
        setThaiWord((prevThaiWord) =>
          prevThaiWord.filter((_, i) => i !== index)
        );
      } else if (lang === "EN") {
        const clickedEngWord = engWord[index];
        setWord((prevWord) => [...prevWord, clickedEngWord]);
        setEngWord((prevEngWord) => prevEngWord.filter((_, i) => i !== index));
      }
    }
  };

  // const handleLockWord = (index: number, lang: string) => {
  //   if (lang === "TH") {
  //     const lockedThai = thaiWord.map((word, idx) => {
  //       if (idx === index) {
  //         return {
  //           ...word,
  //           locked: !word.locked,
  //         };
  //       }
  //       return word;
  //     });
  //     setThaiWord(lockedThai);
  //   } else if (lang === "EN") {
  //     const lockedEng = engWord.map((word, idx) => {
  //       if (idx === index) {
  //         return {
  //           ...word,
  //           locked: !word.locked,
  //         };
  //       }
  //       return word;
  //     });
  //     setEngWord(lockedEng);
  //   }
  // };
  const handleLockWord = (index: number, lang: string) => {
    if (lang === "TH") {
      const lockedThai = thaiWord.map((word, idx) => {
        if (idx === index) {
          return {
            ...word,
            locked: !word.locked,
            timestamp: Date.now(), // Update timestamp when locked
          };
        }
        return word;
      });
      setThaiWord(lockedThai);
    } else if (lang === "EN") {
      const lockedEng = engWord.map((word, idx) => {
        if (idx === index) {
          return {
            ...word,
            locked: !word.locked,
            timestamp: Date.now(), // Update timestamp when locked
          };
        }
        return word;
      });
      setEngWord(lockedEng);
    }
  };
  return (
    <>
      <ChecklistHeader />
      <div className="flex-container">
        <div className="shadow-xl border-4 border-[#54517e] h-[72em]">
          <ChecklistContent
            check={false}
            vocabulary={word}
            onClick={handleClick}
            onLock={handleLockWord}
          />
        </div>
        <div className="shadow-xl border-4 border-[#54517e] h-[72em]">
          <ChecklistContent
            check={true}
            vocabulary={thaiWord}
            onClick={handleResetWord}
            onLock={handleLockWord}
          />
        </div>
        <div className="shadow-xl border-4 border-[#54517e] h-[72em]">
          <ChecklistContent
            check={true}
            vocabulary={engWord}
            onClick={handleResetWord}
            onLock={handleLockWord}
          />
        </div>
      </div>
    </>
  );
};

export default Checklist;


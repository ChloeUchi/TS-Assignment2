// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import WordList from '@components/workdlist/Wordlist'
// import ChecklistHeader from '@components/chechklist/ChecklistHeader'
import Checklist from '@components/chechklist/Checklist'
import wordData from './function/word.json'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <ChecklistHeader />
      <WordList /> */}
      <Checklist words={wordData} />
    </>
  )
}

export default App
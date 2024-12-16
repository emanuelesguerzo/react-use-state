import LanguageButton from "./components/LanguageButton";
import LanguageCard from "./components/LanguageCard";
import languages from "./data/languages";
import { useState } from "react";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  return (
    <>
      <header>
        <h1>Learn Web Developement</h1>
      </header>

      <ul className="container row">
        {languages.map((curLanguage) => {
          return (
            <li key={curLanguage.id}>
              <LanguageButton
                language={curLanguage}
                isActive={selectedLanguage && selectedLanguage.id === curLanguage.id}
                onClick={() => setSelectedLanguage(curLanguage)}
              />
            </li>
          )
        })}
      </ul>
      
      <LanguageCard
        selectedLanguage={selectedLanguage}
      />
    </>
  )
}

export default App;

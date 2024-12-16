import languages from "./data/languages";
import { useState } from "react";

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <>
      <header>
        <h1>Learn Web Developement</h1>
      </header>

      <ul className="container row">
        {languages.map((curLanguage) => {
          return (
            <li key={curLanguage.id}>
              <button 
                onClick={() => setSelectedLanguage(curLanguage)}
                className={selectedLanguage.id === curLanguage.id ? "active" : ""}
              >
                {curLanguage.title}
              </button>
            </li>
          )
        })}
      </ul>

      <div className="container card">
        <h2>{selectedLanguage.title}</h2>
        <p>{selectedLanguage.description}</p>
      </div>
    </>
  )
}

export default App;

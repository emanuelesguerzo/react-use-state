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
              <button 
                onClick={() => setSelectedLanguage(curLanguage)}
                className={
                  selectedLanguage && 
                  selectedLanguage.id === curLanguage.id ? "active" : ""
                }
              >
                {curLanguage.title}
              </button>
            </li>
          )
        })}
      </ul>

      <div className="container card">
        {selectedLanguage ? (
          <>
            <h2>{selectedLanguage.title}</h2>
            <p>{selectedLanguage.description}</p>
          </>
        ) : (
          <>
            <p>Nessun linguaggio selezionato. Seleziona un linguaggio dalla lista.</p>
          </>
        )}
      </div>
    </>
  )
}

export default App;

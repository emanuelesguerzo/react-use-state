import languages from "./data/languages";

function App() {

  return (
    <>
      <header>
        <h1>Learn Web Developement</h1>
      </header>
      <ul className="container row">
        {languages.map((curLanguage) => {
          console.log(curLanguage);
          return (
            <li key={curLanguage.id}>
              <button>{curLanguage.title}</button>
            </li>
          )
        })}
      </ul>

      
    </>
  )
}

export default App;

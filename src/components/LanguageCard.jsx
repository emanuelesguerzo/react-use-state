import style from "./LanguageCard.module.css"

function LanguageCard({ selectedLanguage }) {
    return (
        <div className={`container ${style.card}`}>
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
    )
}

export default LanguageCard;
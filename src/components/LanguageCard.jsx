function LanguageCard({ selectedLanguage }) {
    return (
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
    )
}

export default LanguageCard;
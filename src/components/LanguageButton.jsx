function LanguageButton({ language, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={isActive ? "active" : ""}
        >
            {language.title}
        </button>
    )
}

export default LanguageButton;
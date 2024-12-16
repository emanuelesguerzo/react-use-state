import style from "./LanguageButton.module.css"

function LanguageButton({ language, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={isActive ? style.active : ""}
        >
            {language.title}
        </button>
    )
}

export default LanguageButton;
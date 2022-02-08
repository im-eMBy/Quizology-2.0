import "../../scss/shared-componenets/_switch-button.scss";

export const SwitchButton: React.FC<{ onChange: Function, isActive: boolean }> = ({ onChange, isActive }) => {
    return <button className={isActive ? "switch-button switch-button--active" : "switch-button"} onClick={() => onChange()}>
        <span className={isActive ? "switch-button__circle switch-button__circle--active" : "switch-button__circle"}></span>
    </button>
}
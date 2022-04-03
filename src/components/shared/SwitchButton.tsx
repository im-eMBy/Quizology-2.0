import "../../scss/shared-componenets/_switch-button.scss";

type Props = {
    onChange: Function,
    isActive: boolean
}

export const SwitchButton: React.FC<Props> = ({ onChange, isActive }) => {
    const handleClick = () => {
        onChange();
    }

    return <button className={isActive ? "switch-button switch-button--active" : "switch-button"} onClick={handleClick}>
        <span className={isActive ? "switch-button__circle switch-button__circle--active" : "switch-button__circle"}></span>
    </button>
}
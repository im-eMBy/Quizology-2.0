import { useState } from "react";

type Props = {
    onClick: Function,
    styleClass?: string
}

export const SafeButton: React.FC<Props> = ({ children, onClick, styleClass }) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        if (!isClicked) {
            setIsClicked(true);
            return;
        }
        onClick();
    }
    if (isClicked) return <>
        <p>Na pewno?</p>
        <button className={styleClass} onClick={() => setIsClicked(false)}>Anuluj</button>
        <button className={styleClass} onClick={handleClick}>Tak</button>
    </>
    return <button className={styleClass} onClick={handleClick}>{children}</button>
}
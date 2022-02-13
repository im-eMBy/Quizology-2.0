interface Props {
    width: number,
    transitionDuration: number
}

export const QuizResultStripe: React.FC<Props> = ({ width, transitionDuration }) => {

    return <div className="quiz__result-stripe">
        <div style={{ width: `${width}%`, transitionDuration: `${transitionDuration}s` }} />
    </div>
}
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    <span className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </span>
);

export default Buttons;
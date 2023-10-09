import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    onClick={setAllDone}
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>

                <button onClick={toggleHideDone} className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
            </>
        )}
    </div >
);

export default Buttons;
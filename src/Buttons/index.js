import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__item"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>

                <button className="buttons__item">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
            </>
        )}
    </div >
);

export default Buttons;
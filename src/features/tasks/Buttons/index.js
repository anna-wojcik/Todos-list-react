import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "./styled";
import {
    toggleHideDone,
    setAllDone,
    selectHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    fetchExampleTasks,
} from "../tasksSlice";


const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const areTaskEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();

    return (
        <Container>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {!areTaskEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Container>
    )
};

export default Buttons;
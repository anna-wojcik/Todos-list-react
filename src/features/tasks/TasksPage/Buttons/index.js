import { useSelector, useDispatch } from "react-redux";
import { Container } from "./styled";
import { StyledButton } from "../StyledButton";
import {
    toggleHideDone,
    setAllDone,
    selectHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
} from "../../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const areTaskEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();

    return (
        <Container>
            {!areTaskEmpty && (
                <>
                    <StyledButton onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                        </StyledButton>
                    <StyledButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </StyledButton>
                </>
            )}
        </Container>
    )
};

export default Buttons;
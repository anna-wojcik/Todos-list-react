import { Container } from "./styled";
import { StyledButton } from "../StyledButton";
import { fetchExampleTasks, selectTasksAreLoading } from "../../tasksSlice";
import { useSelector, useDispatch } from "react-redux";

const DownloadTasksButton = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectTasksAreLoading);

    return (
        <Container>
            <StyledButton
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={isLoading}
            >
                {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </StyledButton>
        </Container>
    );
};

export default DownloadTasksButton;
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { toggleTaskDone, removeTask, selectHideDone, selectTaskByQuery } from "../../tasksSlice";
import { List, Item, Content, Button, StyledLink } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    $hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        $toggleDone
                    >
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content $done={task.done}>
                        <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
                        $remove
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TaskList;
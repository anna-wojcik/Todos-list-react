import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Main } from "../../../common/Main/styled";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Main>
            <Header
                title="Szczegłówy zadania"
            />
            <Section
                title={task ? task.content : "Sorka, nie znalezniono zadania 😜"}
                body={task ? (
                    <>
                        <strong>Ukończono: </strong> {task.done ? "Tak" : "Nie"}
                    </>
                ) : null}
            />
        </Main>
    );
}

export default TaskPage;

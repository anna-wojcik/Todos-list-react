import { call, put, delay, select, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks, toggleTasksAreLoading } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    console.log("Zaczynam prace");
    try {
        yield put(toggleTasksAreLoading());
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
        yield put(toggleTasksAreLoading());
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}; 
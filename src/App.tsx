import { Provider } from "react-redux";
import "./App.scss";
import { BoardComponent } from "./components/board/board";
import store from "./store/store";
import { NewTaskButton } from "./components/newTaskButton/newTaskButton";
import { ModalComponent } from "./components/modal/modal";

function App() {
    return (
        <>
            <Provider store={store}>
                <NewTaskButton></NewTaskButton>
                <BoardComponent></BoardComponent>
                <ModalComponent></ModalComponent>
            </Provider>
        </>
    );
}

export default App;

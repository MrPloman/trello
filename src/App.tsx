import { Provider } from "react-redux";
import "./App.scss";
import { BoardComponent } from "./components/board/board";
import store from "./store/store";
import { NewTaskButton } from "./components/newTaskButton/newTaskButton";
import { ModalComponent } from "./components/modal/modal";

function App() {
    // const dispatch = useAppDispatch();
    return (
        <>
            <Provider store={store}>
                <h2>Arriba</h2>
                <NewTaskButton></NewTaskButton>

                <BoardComponent></BoardComponent>
                <ModalComponent></ModalComponent>
            </Provider>
        </>
    );
}

export default App;

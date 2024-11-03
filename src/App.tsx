import { Provider } from "react-redux";
import "./App.scss";
import { BoardComponent } from "./components/board/board";
import store from "./store/store";
import { ModalComponent } from "./components/modal/modal";
import { useAppDispatch } from "./hooks/useTasksDispatch";

function App() {
    // const dispatch = useAppDispatch();
    return (
        <>
            <Provider store={store}>
                <h2>Arriba</h2>
                <BoardComponent></BoardComponent>
            </Provider>
        </>
    );
}

export default App;

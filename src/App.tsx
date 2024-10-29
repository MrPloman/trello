import { Provider } from "react-redux";
import "./App.scss";
import { BoardComponent } from "./components/board/board";
import store from "./store/store";

function App() {
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

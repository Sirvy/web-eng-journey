import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./index/IndexPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<IndexPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

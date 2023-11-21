import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./index/IndexPage";
import TestPage from "./index/TestPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<IndexPage/>}/>
                </Route>
                <Route path="/test" element={<TestPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

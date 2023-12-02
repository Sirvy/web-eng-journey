import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import CoursesPage from "./pages/CoursesPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage/>}/>
                </Route>
                <Route path="/courses">
                    <Route index element={<CoursesPage/>}/>
                </Route>
                <Route path="/test" element={<TestPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

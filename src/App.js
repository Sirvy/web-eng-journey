import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./index/IndexPage";

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<IndexPage />}/>
              <Route path="*" />
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;

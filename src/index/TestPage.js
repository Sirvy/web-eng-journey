import MarkupReader from "./MarkupReader";
import {Link} from "react-router-dom";

const TestPage = () => {
    return (
        <>
            <MarkupReader source="content/test.md"/>
            <Link to={"/"}>Back</Link>
        </>
    );
}

export default TestPage;
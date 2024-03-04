import MarkupReader from "../components/MarkupReader";
import {Link} from "react-router-dom";

const TestPage = () => {
    return (
        <>
            <MarkupReader source="content/test.md"/>
            <MarkupReader source="content/math/algebra.md"/>
            <Link to={"/"}>Back</Link>
        </>
    );
}

export default TestPage;
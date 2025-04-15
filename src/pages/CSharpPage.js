import MarkupReader from "../components/MarkupReader";
import {Link} from "react-router-dom";

const CSharpPage = () => {
    return (
        <>
            <MarkupReader source="content/csharp.md"/>
            <Link to={"/"}>Back</Link>
        </>
    );
}

export default CSharpPage;
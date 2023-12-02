import {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const MarkupReader = ({source}) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(source);
                const text = await response.text();
                setMarkdown(text);
            } catch (error) {
                console.error('Error fetching Markdown:', error);
            }
        };

        fetchMarkdown();
    }, [source]);

    return (
        <div className="markdown-container">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                urlTransform={uri => {
                    if (uri.endsWith(".png") || uri.endsWith(".jpg")) {
                        return `/${uri}`
                    }
                    return uri
                }}
            >
                {markdown}
            </ReactMarkdown>
        </div>
    );
}

export default MarkupReader;
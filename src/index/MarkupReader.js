import {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';

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
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}

export default MarkupReader;
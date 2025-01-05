import '../../index.css';
import { useState } from 'react';

const ScholarshipList = ({data}: any) => {
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

    const toggleExpand = (index: number) => {
        setExpanded(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    }

    const truncateText = (text: string, length: number) => {
        if (text.length <= length) {
            return text;
        }
        return text.substring(0, length) + "...";
    }

    return (
        <>
            {
                data.map((scholarship: any, index: number) => (
                    <div className="card" key={index}>
                        <p><a href={scholarship.url}>{scholarship.name}</a></p>
                        <p>
                            {expanded[index] ? scholarship.description : truncateText(scholarship.description, 100)}
                            <button className="expandToggleButton" onClick={() => toggleExpand(index)}>
                                {expanded[index] ? "Collapse all" : "See more"}
                            </button>
                        </p>
                    </div>
                ))
            }
        </>
    )
}

export default ScholarshipList
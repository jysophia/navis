import '../../index.css';
import { useState } from 'react';
import { writeToDB } from './WebScraper';

const ScholarshipList = ({data}: any) => {
    const [toBeSavedList, setToBeSavedList] = useState(data);
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

    const handleCheckboxChange = (index: number) => {
        const newData = [...toBeSavedList];
        newData[index].saved = !newData[index].saved;
        setToBeSavedList(newData);
    }

    const addSelectedToDB = () => {
        const savedList = toBeSavedList.filter((scholarship: any) => scholarship.saved);
        writeToDB(savedList);
    }

    return (
        <>
        <button onClick={addSelectedToDB}>Add Selected</button>
            {
                toBeSavedList.map((scholarship: any, index: number) => (
                    <div className="card" key={index}>
                        <input type="checkbox" checked={scholarship.saved} onChange={() => handleCheckboxChange(index)}/>
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
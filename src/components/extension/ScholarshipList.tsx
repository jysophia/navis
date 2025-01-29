import '../../index.css';
import { useState, useEffect } from 'react';
import { writeToDB } from './WebScraper';
import ParserException from "./ParserException"
import cardDivider from '../../assets/cardDivider.svg';
import bookmarkSaved from '../../assets/bookmarkSaved.svg';
import bookmarkUnsaved from '../../assets/bookmarkUnsaved.svg';

const ScholarshipList = ({data}: any) => {
    const [toBeSavedList, setToBeSavedList] = useState(data);
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
    const [numberOfScholarships, setNumberOfScholarships] = useState(0);

    useEffect( () => {
        setNumberOfScholarships(toBeSavedList.length);
    }, [])

    const toggleExpand = (index: number) => {
        setExpanded(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    }

    const truncateText = (text: string) => {
        if (typeof text !== 'string') {
            throw ParserException;
        }
        if (text.length <= 100) {
            return text;
        }
        return text.substring(0, 100) + "...";
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

    const goToApplication = (index: number) => {
        if (toBeSavedList[index].href === undefined) {
            throw ParserException;
        } else {
            window.open(toBeSavedList[index]?.href);
        }
    }

    return (
        <>
        <div className="result-header">
            <h1 className="result-title">Page Results</h1>
        </div>
        <div className="result-subheader">
            <p className="result-text">Showing {numberOfScholarships} results</p>
            <button onClick={addSelectedToDB} className="result-add-db-btn">Add Selected</button>
        </div>
            {
                toBeSavedList.map((scholarship: any, index: number) => (
                    <div className="card" key={index}>
                        <div className="card-header">
                            <p><a href={scholarship.url}>{scholarship.name}</a></p>
                            <img
                                onClick={() => handleCheckboxChange(index)} style={{ cursor: 'pointer'}}
                                src={scholarship.saved ? bookmarkSaved : bookmarkUnsaved}
                                alt={scholarship.saved ? "[X]" : "[ ]"}
                                className="bookmark"
                                height={36}
                                width={36}
                            />
                        </div>
                        <div className="card-body">
                            <p>{expanded[index] ? scholarship.description : truncateText(scholarship.description)}</p>
                        </div>
                        <div className="card-tail">
                            <button className="expandToggleButton" onClick={() => toggleExpand(index)}>
                                {expanded[index] ? "Collapse all" : "See more"}
                            </button>
                            <button className="goToApplicationButton" onClick={() => goToApplication(index)}>
                                Go to Application
                            </button>
                        </div>
                        <img src={cardDivider}/>
                    </div>
                ))
            }
        </>
    )
}

export default ScholarshipList
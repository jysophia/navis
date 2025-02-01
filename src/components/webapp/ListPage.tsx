import { useEffect, useState } from 'react';
import '../../index.css';
import ParserException from "../extension/ParserException";
import { Scholarship } from "../../Scholarship";
import cardDivider from '../../assets/cardDivider.svg';
import bookmarkSaved from '../../assets/bookmarkSaved.svg';
import bookmarkUnsaved from '../../assets/bookmarkUnsaved.svg';
import { deleteFromDB } from '../extension/WebScraper';

const ListPage = () => {
    const [scholarships, setScholarships] = useState<Scholarship[]>([]);
    const [toBeUnsavedList, setToBeUnsavedList] = useState<Scholarship[]>(scholarships);
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
    const [numberOfScholarships, setNumberOfScholarships] = useState(0);
    const [previewScholarshipSite, setPreviewScholarshipSite] = useState<string | null>(null);

    useEffect( () => {
        setNumberOfScholarships(scholarships.length);
    }, [])
    
    useEffect(() => {
        getScholarships();
    }, [])

    const getScholarships = async () => {
        console.log('Retrieving data from db...');
        const port = 3000;
        const url = `http://localhost:${port}/api/scholarships`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            setScholarships(data);
        } catch (error: any) {
            console.error('Failed to get data: ', error);
        }
    }
    
    const handleCheckboxChange = (index: number) => {
        const newData = [...scholarships];
        newData[index].saved = !newData[index].saved;
        setToBeUnsavedList(newData);
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

    const toggleExpand = (index: number) => {
        setExpanded(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    }

    const goToApplication = (index: number) => {
        if (scholarships[index].href === undefined) {
            throw ParserException;
        } else {
            window.open(scholarships[index]?.href);
        }
    }

    const deleteScholarships = () => {
        const refreshedList = toBeUnsavedList.filter((scholarship : any) => !scholarship.saved);
        deleteFromDB(refreshedList);
        getScholarships();
    }

    const openScholarshipSite = (index : number) => {
        const selectedScholarship = scholarships[index];
        if (selectedScholarship.href === undefined) {
            throw ParserException;
        } else {
            setPreviewScholarshipSite(selectedScholarship.href);
        }
    }

    return (
        <>
            <div className="page-container">
                <div className="saved-scholarships-container">
                    <div className="result-header">
                        <h1 className="result-title">Saved Scholarships</h1>
                    </div>
                    <div className="result-subheader">
                        <p className="result-text">Showing {numberOfScholarships} results</p>
                        <button onClick={deleteScholarships} className="result-add-db-btn">Delete Unselected Items</button>
                    </div>
                    <div className="saved-scholarships-header">
                        <div className="saved-scholarships-body">
                            {scholarships.map((scholarship: any, index: number) => (
                                <div className="card" key={index}>
                                <div className="card-header">
                                    <p style={{ cursor: 'pointer' }} onClick={() => openScholarshipSite(index)}><a href={scholarship.url}>{scholarship.name}</a></p>
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
                            ))}
                        </div>
                    </div>
                </div>
                <div className="preview-container">
                    {previewScholarshipSite ? (
                        <iframe src={previewScholarshipSite} title="Scholarship Preview" width="100%" height="100%" />
                    ) : (
                        <p>This is the preview of the website.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default ListPage
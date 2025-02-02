import '../../index.css';
import { useEffect, useState } from 'react';
import { Scholarship } from "../../Scholarship";
import { deleteFromDB } from '../extension/WebScraper';
import ParserException from "../extension/ParserException";
import cardDivider from '../../assets/cardDivider.svg';
import bookmarkSaved from '../../assets/bookmarkSaved.svg';
import bookmarkUnsaved from '../../assets/bookmarkUnsaved.svg';
import navisLogo from '../../../public/navisLogo.png';

const ListPage = () => {
    const [scholarships, setScholarships] = useState<Scholarship[]>([]);
    const [toBeUnsavedList, setToBeUnsavedList] = useState<Scholarship[]>(scholarships);
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
    const [numberOfScholarships, setNumberOfScholarships] = useState(0);
    const [isPreviewSelected, setIsPreviewSelected] = useState<boolean>(false);
    const [previewScholarshipSite, setPreviewScholarshipSite] = useState<string | undefined>(undefined);

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
        if (scholarships[index]) {
            if (scholarships[index].href !== undefined) {
                window.open(scholarships[index].href, '_blank', 'noopener, noreferrer');
            }
        }
    }

    const deleteScholarships = () => {
        const refreshedList = toBeUnsavedList.filter((scholarship : any) => !scholarship.saved);
        deleteFromDB(refreshedList);
        getScholarships();
    }

    const openScholarshipSite = (index : number) => {
        const selectedScholarship = scholarships[index];
        if (selectedScholarship.href === null) {
            setIsPreviewSelected(false);
        } else {
            setPreviewScholarshipSite(selectedScholarship.href);
            setIsPreviewSelected(true);
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
                    {isPreviewSelected ? (
                        <div>
                            <iframe src={previewScholarshipSite} title="Scholarship Preview" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" width={840} height={785} />
                        </div>
                    ) : (
                        <div className="saved-scholarships-landing">
                            <img src={navisLogo} className="navis-logo-landing" height={100} width={70}></img>
                            <h2>Nothing to sea here...</h2>
                            <h1>Click on a scholarShip to view in browser.</h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ListPage
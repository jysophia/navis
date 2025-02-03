import '../../index.css';
import { useEffect, useState } from 'react';
import { CohereClient } from "cohere-ai";
import { parseText } from "../extension/WebScraper"
import Calendar from "./Calendar";
import longerLine from '../../assets/longerLine.svg';
import todaysDate from '../../assets/todaysDate.svg';
import deadline from '../../assets/deadline.svg';
import deadlineBarEmpty from '../../assets/deadlineBarEmpty.svg';
import deadlineBarFill from '../../assets/deadlineBarFill.svg';

const WebHomePage = () => {
    const [featuredNews, setFeaturedNews] = useState([]);
    const [featuredNewsSuccess, setFeaturedNewsSuccess] = useState(false);
    const deadlines = [
        { date: '2025-02-15', scholarship: 'UBC Scholarships for Women in STEM' },
        { date: '2025-02-28', scholarship: 'Students in the Faculty of Science' },
        { date: '2025-03-08', scholarship: 'Awards and Scholarships for UBC Aboriginal Students' },
        { date: '2025-03-29', scholarship: 'Gracie Hopper Scholarship for CS Students' },
        { date: '2025-04-13', scholarship: 'UBC Entrance Scholarship' }
    ];
    const api_key = import.meta.env.VITE_COHERE_API_KEY;
    const todaydate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })

    useEffect(() => {
        if (featuredNews.length === 0) {
            sendQuery();
        }
    }, []);

    const sendQuery = async () => {
        const client = new CohereClient({ token: api_key });
        const response = await client.chat(
        {
            message: `list, summarize, and link the top two featured news on scholarship programs in Canada. Organize this into the following format: news headline && url && description. Use * as bullet points and use plain text.`,
            model: "command-r-08-2024",
            preamble: "You are an AI-assistant chatbot. You are trained to assist users by providing thorough and helpful responses to their queries."
        });
        let parsedFeaturedNewsList: any = [];
        if (parsedFeaturedNewsList === undefined) {
            setFeaturedNewsSuccess(false);
        } else {
            parsedFeaturedNewsList = (parseText(response.text));
            console.log(parsedFeaturedNewsList);
            setFeaturedNews(parsedFeaturedNewsList);
            setFeaturedNewsSuccess(true);
        }
    }

    // Reference: copilot
    const getApproachingDeadlines = () => {
        const today = new Date();
        return deadlines.filter((deadline) => {
            const deadlineDate = new Date(deadline.date);
            const diffTime = Math.abs(deadlineDate.getTime() - today.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 30;
        });
    }

    // Reference: copilot
    const calculateProgress = (deadlineDate: Date): number => {
        const today = new Date();
        const totalDays = 30;
        const diffTime = Math.abs(new Date(deadlineDate).getTime() - today.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return ((totalDays - diffDays) / totalDays) * 100;
    };

    // Reference: copilot
    const getDaysLeft = (deadlineDate: Date): number => {
        const today = new Date();
        const diffTime = Math.abs(new Date(deadlineDate).getTime() - today.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    const approachingDeadlines = getApproachingDeadlines();

    return (
        <>
            <div className="page-container">
                <div className="webapp-landing-page">
                    <div className="webapp-landing-header">
                        <img src='/navisLogo.png' height={60} width={44}/>
                        <h1>Hey Navis,</h1>
                    </div>
                    <div className="webapp-landing-subheader">
                        <img src={deadline}></img>
                        <h2>You have new scholarships! <a href="#/webapp/list">Go check it out</a></h2>
                    </div>
                    <div className="webapp-landing-body">
                        <h3>Approaching Deadlines</h3>
                        {
                            approachingDeadlines.map((deadline: any, index: number) => (
                                <div className="deadline">
                                    <div className="deadline-text" key={index}>
                                        <p>{deadline.scholarship}</p>
                                        <p>{deadline.date}</p>
                                    </div>
                                    <div className="deadline-bar">
                                        <div className="deadline-bar-empty"></div>
                                        <div
                                            className="deadline-bar-fill"
                                            style={{
                                                width: `${calculateProgress(new Date(deadline.date))}%`
                                            }}
                                        ></div>
                                        <div className="days-left">
                                        {getDaysLeft(new Date(deadline.date))} days left
                                    </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="webapp-landing-tail">
                        <h3>Featured News</h3>
                        { featuredNewsSuccess ? (
                            featuredNews.map((news: any, index: number) => (
                                <div className="card" key={index}>
                                    <div className="card-header">
                                        <p style={{ cursor: 'pointer' }}><a href={news.url}>{news.name}</a></p>
                                    </div>
                                    <div className="card-body">
                                        <p>{news.description}</p>
                                    </div>
                                    <p>{todaydate}</p>
                                    <img src={longerLine}/>
                                </div>
                        ))) : (
                            <div>
                                <p>Loading today's news...</p>
                            </div>
                        )}
                    </div>
                    
                </div>
                <div className="calendar">
                    <Calendar deadlines={deadlines}/>
                    <div className="calendar-tail">
                        <div className="calendar-legend">
                            <img src={todaysDate}></img>
                            <p className="calendar-legend-text">Today's Date</p>
                        </div>
                        <div className="calendar-legend">
                            <img src={deadline}></img>
                            <p className="calendar-legend-text">Deadline</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebHomePage
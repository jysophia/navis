import '../../index.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { CohereClient } from "cohere-ai";
import { parseText } from "../extension/WebScraper"
import longerLine from '../../assets/longerLine.svg';

const WebHomePage = () => {
    const [featuredNews, setFeaturedNews] = useState([]);
    const [featuredNewsSuccess, setFeaturedNewsSuccess] = useState(false);
    const api_key = import.meta.env.VITE_COHERE_API_KEY;
    const todaydate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
    const calendardate = new Date().toLocaleDateString('en-US', {
        month: 'long',
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
        console.log(response.text);
        let parsedFeaturedNewsList: any = [];
        if (parsedFeaturedNewsList === undefined) {
            setFeaturedNewsSuccess(false);
        }
        parsedFeaturedNewsList = (parseText(response.text));
        setFeaturedNews(parsedFeaturedNewsList);
        setFeaturedNewsSuccess(true);
    }

    return (
        <>
            <div className="page-container">
                <div className="webapp-landing-page">
                    <div className="webapp-landing-header">
                        <img src='/public/navisLogo.png' />
                        <h1>Hey Navis,</h1>
                    </div>
                    <div className="webapp-landing-subheader">
                        <h2>You added 1 new scholarship! Go check it out</h2>
                    </div>
                    <div className="webapp-landing-body">
                        <h3>Applications in Progress</h3>
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
                            </div>
                        )}
                    </div>
                    
                </div>
                <div className="calendar">
                    <h2>{calendardate}</h2>
                </div>
            </div>
        </>
    )
}

export default WebHomePage
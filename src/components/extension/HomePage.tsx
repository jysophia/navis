import { useState, useEffect } from 'react'
import { CohereClient } from "cohere-ai";
import { parseText } from "./WebScraper"
import ScholarshipList from './ScholarshipList';

export default function HomePage() {
    const [scholarships, setScholarships] = useState([]);
    const [currentURL, setCurrentURL] = useState("");
    const [message, setMessage] = useState("Press button to scrape web");
    const [success, setSuccess] = useState(false);
    const api_key = import.meta.env.VITE_COHERE_API_KEY;

    useEffect(() => {
        if (currentURL.length > 0) {
            sendQuery();
            setCurrentURL("");
        }
    })

    useEffect(() => {
        if (scholarships) {
            console.log(scholarships);
        }
    }, [scholarships]);

    const sendQuery = async () => {
        const client = new CohereClient({ token: api_key });
        const response = await client.chat(
        {
            message: `list, summarize, and link the scholarship information from this href: ${currentURL} and organize the list into the following format: name && url && description. Use * as bullet points and use plain text.`,
            model: "command-r-08-2024",
            preamble: "You are an AI-assistant chatbot. You are trained to assist users by providing thorough and helpful responses to their queries."
        }
        )
        let parsedScholarshipList = parseText(response.text);
        if (parsedScholarshipList.length > 0) {
            setScholarships(parsedScholarshipList);
            setMessage("Successfully extracted scholarships");
            setSuccess(true);
            return
        } else {
            setMessage("Please try again");
            return
        }
    }

    const getUrl = async () => {
        let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        const url = tab.url || "";
        setCurrentURL(url);
        setMessage("Loading...");
    }

    const openWebApp = () => {
        const webAppUrl = process.env.NODE_ENV === "development" ? "http://localhost:5173/#/webapp" : "http://localhost:5173/#/webapp";
        chrome.tabs.create({ url: webAppUrl });
    }

    return (
        <>
            <h1>Navis</h1>
            <div>
            <button className="openWebAppButton" onClick={openWebApp}>Open Web App</button>
                { success ? (
                    <ScholarshipList data={scholarships}/>
                ) : (
                    <div className="homepage">
                        <p className="read-the-docs">{message}</p>
                        <button className="scanPageButton" onClick={() => getUrl()}>Scan Page</button>
                    </div>
                ) }
            </div>
        </>
    )
}
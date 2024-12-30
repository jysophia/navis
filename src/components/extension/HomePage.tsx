import { useState, useEffect } from 'react'
import { CohereClient } from "cohere-ai";
import { parseText } from "./WebScraper"
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

export default function HomePage() {
    const [scholarships, setScholarships] = useState([]);
    const [currentURL, setCurrentURL] = useState("");
    const [success, setSuccess] = useState("Press button to scrape web");
    const api_key = import.meta.env.VITE_COHERE_API_KEY;

    useEffect(() => {
        if (currentURL.length > 0) {
            sendQuery();
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
            setSuccess("Successfully extracted scholarships");
            setScholarships(parsedScholarshipList);
        } else {
            setSuccess("Please try again");
        }
    }

    const getUrl = async () => {
        let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        const url = tab.url || "";
        setCurrentURL(url);
        setSuccess("Loading...");
    }

    return (
        <>
            <div>
            <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => getUrl()}>
                scrape website
                </button>
                <p>
                {success}
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}
import { useState, useEffect } from 'react'
import { CohereClient } from "cohere-ai";
import { parseText } from "./WebScraper"
import title_dark from "../../assets/navisTitleDefault.svg";
import title_light from "../../assets/navisTitleSuccess.svg";
import exit_dark from "../../assets/exit_dark.svg";
import exit_light from "../../assets/exit_light.png";
import ScholarshipList from './ScholarshipList';

const HomePage = () => {
    const [scholarships, setScholarships] = useState([]);
    const [currentURL, setCurrentURL] = useState("");
    const [message, setMessage] = useState("Click below to start scanning!");
    const [success, setSuccess] = useState(false);
    const api_key = import.meta.env.VITE_COHERE_API_KEY;

    useEffect(() => {
        if (currentURL.length > 0) {
            sendQuery();
            setCurrentURL("");
        }
    })

    const sendQuery = async () => {
        const client = new CohereClient({ token: api_key });
        const response = await client.chat(
        {
            message: `list, summarize, and link the scholarship information from this href: ${currentURL} and organize the list into the following format: name && url && description. Use * as bullet points and use plain text.`,
            model: "command-r-08-2024",
            preamble: "You are an AI-assistant chatbot. You are trained to assist users by providing thorough and helpful responses to their queries."
        }
        )
        let parsedScholarshipList: any = [];
        parsedScholarshipList = parseText(response.text);
        if (parsedScholarshipList === undefined) {
            setMessage("Please try again");
            return
        } else if (parsedScholarshipList.length > 0) {
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
        setMessage("One moment, Navis is collecting Scholarship Information...");
    }

    const openWebApp = () => {
        const webAppUrl = process.env.NODE_ENV === "development" ? "http://localhost:5173/#/webapp" : "http://localhost:5173/#/webapp";
        chrome.tabs.create({ url: webAppUrl });
    }

    const closeExtension = () => {
        // Close the extension
    }

    return (
        <>
            <div className="homepage">
                { success ? (
                    <div className="banner_success">
                        <img src={title_light} alt="Navis" className="navis_title"></img>
                        <button className="openWebAppButton" onClick={openWebApp}>
                            Go To Dashboard
                        </button>
                        <button className="exit" onClick={closeExtension}>
                            <img src={exit_light} alt="Exit" className="exit"></img>
                        </button>
                    </div>
                ) : (
                    <div className="banner_default">
                        <img src={title_dark} alt="Navis" className="navis_title"></img>
                        <button className="openWebAppButton" onClick={openWebApp}>
                            Go To Dashboard
                        </button>
                        <button className="exit" onClick={closeExtension}>
                            <img src={exit_dark} alt="Exit" className="exit"></img>
                        </button>
                    </div>
                )}
            </div>
            <div>
                { success ? (
                    <ScholarshipList data={scholarships}/>
                ) : (
                    <div className="scan_section">
                        <p className="read-the-docs">{message}</p>
                        <button className="scanPageButton" onClick={() => getUrl()}>Scan Page</button>
                    </div>
                ) }
            </div>
        </>
    )
}

export default HomePage
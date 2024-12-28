import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CohereClient } from "cohere-ai";
import { parseText } from "./components/WebScraper"

function App() {
  const [scholarships, setScholarships] = useState([]);
  const api_key = import.meta.env.VITE_COHERE_API_KEY;

  useEffect(() => {
    if (scholarships) {
      console.log(scholarships);
    }
  }, [scholarships])

  const scrapeWeb = async () => {
    const client = new CohereClient({ token: api_key });        
    const response = await client.chat(
      {
        message: "list, summarize, and hyperlink the scholarship information from this href: https://students.ubc.ca/finances/awards-scholarships-bursaries/ and organize the list into the following format: Scholarship name; link; and description. Use * as bullet points and use plain text.",
        model: "command-r-08-2024",
        preamble: "You are an AI-assistant chatbot. You are trained to assist users by providing thorough and helpful responses to their queries."
      }
    )
    setScholarships(parseText(response.text));
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
        <button onClick={() => scrapeWeb()}>
          scrape website
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import axios from "axios";
import React, { useState, useEffect } from "react";
import "./RandomQuote.css";

const RandomQuote = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [res, setRes] = useState([]);

  const getRes = async () => {
    try {
      const response = await axios.get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      setRes(response.data.quotes);
      setQuoteIndex(Math.floor(Math.random() * response.data.quotes.length));
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    getRes();
  }, []);

  const handleNewQuote = () => {
    setQuoteIndex(Math.floor(Math.random() * res.length));
  };

  return (
    <div className="quote-box">
      {res.length > 0 ? (
        <>
          <div className="text">{res[quoteIndex]?.quote}</div>
          <div className="author">{res[quoteIndex]?.author}</div>
          <button className="new-quote" onClick={handleNewQuote}>
            New quote
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${res[quoteIndex]?.quote} - ${res[quoteIndex]?.author}`}
            id="tweet-quote"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomQuote;

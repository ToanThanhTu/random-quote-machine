import "./styles/QuoteBox.css";
import Text from "./Text";
import Author from "./Author";
import Buttons from "./Buttons";
import { useEffect, useState } from "react";

function QuoteBox() {
    const [quotes, setQuotes] = useState([]);
    const [quoteObj, setQuoteObj] = useState({ quote: "", author: "" });

    const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then((res) => res.json())
            .then((data) => {
                setQuotes(data.quotes);
                getRandomQuote(data.quotes);
            })
            .catch((err) => {
                console.log("Error loading quotes data: ", err);
            });
    }, []);

    function getRandomQuote(loadedQuotes = quotes) {
        if (loadedQuotes.length > 0) {
            const randomQuote = loadedQuotes[Math.floor(Math.random() * (quotes.length))];
            setQuoteObj(randomQuote);
        }
        setColor();
    }

    function setColor() {
        const randomColor = colors[Math.floor(Math.random() * (colors.length))];
        document.documentElement.style.setProperty('--theme', randomColor);
    }

    return (
        <div id="quote-box">
            <Text text={quoteObj.quote} />
            <Author author={quoteObj.author} />
            <Buttons text={quoteObj.quote} author={quoteObj.author} handleClick={() => getRandomQuote()} />
        </div>
    );
}

export default QuoteBox;
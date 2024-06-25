import "./styles/QuoteBox.css";
import Text from "./Text";
import Author from "./Author";
import Buttons from "./Buttons";
import { useEffect, useState } from "react";

// Define the QuoteBox component
function QuoteBox() {
    // States to hold the array of quotes and the current quote object (quote and author)
    const [quotes, setQuotes] = useState([]);
    const [quoteObj, setQuoteObj] = useState({ quote: "", author: "" });

    // Array of colors for dynamic theming
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

    // useEffect hook to fetch quotes data on component mount
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then((res) => res.json()) // Parse the JSON response
            .then((data) => {
                setQuotes(data.quotes); // Set the quotes state with fetched data
                getRandomQuote(data.quotes); // Set an initial random quote
            })
            .catch((err) => {
                console.log("Error loading quotes data: ", err); // Log errors if any
            });
    }, []); // Empty dependency array means this effect runs once on mount

    // Function to get a random quote from the loaded quotes array
    function getRandomQuote(loadedQuotes = quotes) {
        if (loadedQuotes.length > 0) {
            // Get a random quote object from the array with Math random and floor functions
            const randomQuote = loadedQuotes[Math.floor(Math.random() * (quotes.length))];
            setQuoteObj(randomQuote); // Update the current quote object state
            setColor(); // Update the theme color
        }
    }

    // Function to set a random color theme
    function setColor() {
        // Get a random color from the colors array with Math random and floor functions
        const randomColor = colors[Math.floor(Math.random() * (colors.length))];

        // Apply the color as the --theme CSS variable
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
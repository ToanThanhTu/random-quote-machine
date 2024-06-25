import "./styles/Buttons.css";
import SocialMediaButtons from "./SocialMediaButtons";

// Define the NewQuoteButton component that gets a new quote on click
function NewQuoteButton({ handleClick }) {
    return <button id="new-quote" onClick={handleClick}>New quote</button>;
}

// Define the Buttons component that includes social media sharing and new quote functionality
function Buttons({ text, author, handleClick }) {
    return (
        <div className="buttons-container">
            <SocialMediaButtons text={text} author={author} />
            <NewQuoteButton handleClick={handleClick}/>
        </div>
    );
}

export default Buttons;
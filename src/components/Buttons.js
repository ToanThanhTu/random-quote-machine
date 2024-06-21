import "./styles/Buttons.css";
import SocialMediaButtons from "./SocialMediaButtons";

function NewQuoteButton({ handleClick }) {
    return <button id="new-quote" onClick={handleClick}>New quote</button>;
}

function Buttons({ text, author, handleClick }) {
    return (
        <div className="buttons-container">
            <SocialMediaButtons text={text} author={author} />
            <NewQuoteButton handleClick={handleClick}/>
        </div>
    );
}

export default Buttons;
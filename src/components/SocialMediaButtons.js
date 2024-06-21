import "./styles/SocialMediaButtons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function TweetQuoteButton({ text, author }) {
    return (
        <a id="tweet-quote" className="button" href="facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
        </a>
    );
}

function FacebookButton({ text, author }) {
    return (
        <a id="facebook-button" className="button" href="facebook.com" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
        </a>
    );
}

function SocialMediaButtons({ text, author }) {
    return (
        <div className="social-media-buttons">
            <TweetQuoteButton text={text} author={author} />
            <FacebookButton text={text} author={author} />
        </div>
    );
}

export default SocialMediaButtons;
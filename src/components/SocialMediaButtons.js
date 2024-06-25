import "./styles/SocialMediaButtons.css";

// Import FontAwesomeIcon component and specific icons (Tumblr and X) for social media buttons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

// Define the TweetQuoteButton component for sharing the quote on X (Twitter)
function TweetQuoteButton({ text, author }) {
    // Encode the quote and author to be URL-friendly
    const encodedTweet = encodeURIComponent(`"${text}" - ${author}`);

    // Construct the URL for tweeting the quote with pre-filled contents
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodedTweet}`;

    // Render a link that opens the tweet URL in a new tab
    return (
        <a id="tweet-quote" className="button" href={tweetURL} target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
        </a>
    );
}

// Define the TumblrButton component for sharing the quote on Tumblr
function TumblrButton({ text, author }) {
    // Encode the text and author for including in the URL
    const encodedAuthor = encodeURIComponent(author);
    const encodedText = encodeURIComponent(text);
    
    // Construct the Tumblr URL for creating a new text post with pre-filled contents
    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=+${encodedAuthor}+&content=+${encodedText}+&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

    // Render a link that opens the Tumblr share URL in a new tab
    return (
        <a id="tumblr-button" className="button" href={tumblrUrl} target="_blank">
            <FontAwesomeIcon icon={faTumblr} />
        </a>
    );
}

// Define the SocialMediaButtons component that includes both Twitter and Tumblr share buttons
function SocialMediaButtons({ text, author }) {
    return (
        <div className="social-media-buttons">
            <TweetQuoteButton text={text} author={author} />
            <TumblrButton text={text} author={author} />
        </div>
    );
}

export default SocialMediaButtons;
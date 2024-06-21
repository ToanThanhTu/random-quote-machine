import "./styles/SocialMediaButtons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function TweetQuoteButton({ text, author }) {
    const encodedTweet = encodeURIComponent(`"${text}" - ${author}`);

    const tweetURL = `https://twitter.com/intent/tweet?text=${encodedTweet}`;

    return (
        <a id="tweet-quote" className="button" href={tweetURL} target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
        </a>
    );
}

function FacebookButton({ text, author }) {
    // Encode the text and author for including in the post URL
    const encodedAuthor = encodeURIComponent(author);
    const encodedText = encodeURIComponent(text);
    
    // Tumblr URL for creating a new text post with pre-filled content
    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=+${encodedAuthor}+&content=+${encodedText}+&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

    return (
        <a id="facebook-button" className="button" href={tumblrUrl} target="_blank">
            <FontAwesomeIcon icon={faTumblr} />
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
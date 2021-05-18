import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/all";

function SocialMedia() {
    return (
        <div>
            <a className={'icon'} target={'_blank'} rel={'noreferrer noopener'} href={'https://twitter.com/afunderburg'}><FaTwitter /></a>
            <a className={'icon'} target={'_blank'} rel={'noreferrer noopener'} href={'https://github.com/beloved'}><FaGithub /></a>
            <a className={'icon'} target={'_blank'} rel={'noreferrer noopener'} href={'https://www.linkedin.com/in/amyfunderburg'}><FaLinkedin /></a>

        </div>
    );
}

export default SocialMedia;
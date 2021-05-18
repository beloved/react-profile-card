import {FaHeart} from "react-icons/all";

function Likes(props) {
    return (
        <div>
            <p><FaHeart className={'heart-icon'} onClick ={props.handleLikes}/><br /> {props.count} Likes</p>

        </div>
);
}

export default Likes;
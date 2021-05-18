import profileImg from '../profile-img.jpg';
function Avatar() {
    return (
        <img className={'profileImage'} src={profileImg} alt={'profile-image'}/>
    );
}

export default Avatar;
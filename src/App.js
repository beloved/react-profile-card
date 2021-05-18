import Header from './components/Header.js';
import Avatar from './components/Avatar.js';
import DisplayText from './components/DisplayText.js';
import Button from './components/Button.js';
import Footer from './components/Footer.js';
import './App.css';
import Likes from "./components/Likes";
import {useState} from "react";


function App() {
    // const [state, setState] = useState(initialState);
    const [displayText, setDisplayText] = useState('Hello!');
    const [likes, setLikes] = useState('0');

    const handleName = () => {
        setDisplayText('Amy Funderburg')
    }

    const handleSkill = () => {
        setDisplayText('I am a Frontend Developer')
    }

    const handleLikes = () => {
        let count = likes;
        count++;
        setLikes(count);
    }


  return (
    <div className="App">
        <Header />
        <Avatar />
        <DisplayText text = {displayText}/>
        <Button btnLabel = {'Name'} handleDisplay = {handleName}/><br />
        <Button btnLabel = {'Skills'} handleDisplay = {handleSkill}/>
        <Likes count = {likes} handleLikes = {handleLikes}/>
        <Footer />
    </div>
  );
};

export default App;

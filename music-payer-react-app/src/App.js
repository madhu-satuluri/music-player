import React from 'react';
import {useState,useEffect} from "react";
import './App.css';
import Player from './components/Player';

function App(){
const [songs] = useState([
  {
    "title": "Easy on me",
    "artist": "Adele",
    "album": "Easy on me",
    "track": "Easy on me",
    "year": "1",
    "img_src": "https://i1.sndcdn.com/artworks-GSvPigmkmpKHRi8C-Sv4aJw-t500x500.jpg",
    "src": "./songs/adele_easy_on_me_official_video_mp3_48839.mp3",
},
{
  "title": "10 Things I hate about u",
  "artist": "Leah kate",
  "album": "10 Things I hate about u",
  "track": "10 Things I hate about u",
  "year": "1",
  "img_src": "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/10_Things_I_Hate_About_You_film.jpg/220px-10_Things_I_Hate_About_You_film.jpg",
  "src": "./songs/Leah_Kate_-_10_Things_I_Hate_About_You_(NoniBase.Com).mp3",
},

    {
        "title": "$orries",
        "artist": "Peachy!",
        "album": " Shiloh",
        "track": "$orries",
        "year": "1",
        "img_src": "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/08/22/2a/08222a36-1ae3-832a-2674-3af9d39bcca9/cover.jpg/400x400cc.jpg",
        "src": "./songs/$orries.mp3",
    },
    {
      "title": "Wish I was Better",
      "artist": "kina and yaeow",
      "album": " Things I wanted to tell you",
      "track": "Wish I was Better",
      "year": "1",
      "img_src": "https://i.scdn.co/image/ab67616d0000b273b67b69ce28c07fa6c05632d3",
      "src": "./songs/Wish I was Better.mp3",
  },
  {
    "title": "Sad Vibes",
    "artist": "Shiloh",
    "album": " Call me sometimes please",
    "track": "Sad vibes",
    "year": "1",
    "img_src": "https://i.scdn.co/image/ab67616d0000b273f42e2e3e97fae073e40a3699",
    "src": "./songs/Sad Vibes.mp3",
},

    {
        "title": "Can We Kiss Forever?",
        "artist": "Kina",
        "album": " Adriana Proenza",
        "track": "Can We Kiss Forever?",
        "year": "1",
        "img_src": "https://i1.sndcdn.com/artworks-000643553161-3gnivj-t500x500.jpg",
        "src": "./songs/Can We Kiss Forever .mp3",
    },

]);
const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);


useEffect(()=>{
  setNextSongIndex(()=>{
  if (currentSongIndex + 1 >songs.length - 1 ){
    return 0;
  } else{
    return currentSongIndex + 1;
  }
});
},[currentSongIndex]);

 return (
    <div className="App">
      <Player 
      currentSongIndex={currentSongIndex} 
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex} 
      songs={songs} 
      />
    </div>
  );
}

export default App;

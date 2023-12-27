import React from "react";
import "./PlayerPlaylist.css";

const playlist = [
  {
    id: 1,
    title: "Sparkle",
    artst: "Radwimps",
    album: "Your Name",
    duration: "3:02",
  }, 
  {
    id: 2,
    title: "Kaise Hua",
    artst: "Arijit SIngh",
    album: "Kabir Singh",
    duration: "3:34",
  },
  {
    id: 3,
    title: "Tum Ho(slowed + reverb)",
    artst: "Mohit Chauhan",
    album: "Rockstar",
    duration: "5:53",
  },
  {
    id: 4,
    title: "Ehsan Tera Hoga Mujpar",
    artst: "M. Rafi",
    album: "Junglee",
    duration: "6:02",
  },
  {
    id: 5,
    title: "Govind Bolo",
    artst: "Jubin Nautiyal",
    album: "Krishna Bhajans",
    duration: "2:33",
  },
  {
    id: 6,
    title: "Suger",
    artst: "Maroon 5",
    album: "V",
    duration: "3:35",
  },
  {
    id: 7,
    title: "Main Hoon",
    artst: "Arijit Singh",
    album: "Days of Tafree",
    duration: "3:44",
  },
  {
    id: 8,
    title: "Give Me Some Sunshine",
    artst: "Shrihari",
    album: "3 Idiots",
    duration: "2:43",
  },
  {
    id: 9,
    title: "Perfect",
    artst: "Ronny",
    album: "Prihan",
    duration: "3:55",
  },
];

export default function PlayerPlaylist() {
  return (
    <div className="player-playlist-container">
      <div className="player-playlist-header">
        <div className="playlist-image-card"></div>

        <div className="playlist-body">
          
          <p>PLAYLIST</p>
          <span>Spotify Studio</span>
          <h1>Best of Mine</h1>
          </div>
        
      </div>
      <div class="divider"></div>
      <div className="playlist-list">
      <div className="playlist-list-id">#</div>
        <div className="playlist-list-title">TITLE</div>
        <div className="playlist-list-album">ALBUM</div>
        <div className="playlist-list-duration">DURATION</div>
        </div>
      
      <div className="playlist-list-container">
        {playlist.map((item) => {
          return (
            <div className="playlist-list">
              <div className="playlist-list-id">{item.id}</div>
              <div className="playlist-list-title">{item.title}</div>
              <div className="playlist-list-album">{item.album}</div>
              <div className="playlist-list-duration">{item.duration}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import "./Sidebar.css";

import { ReactComponent as HomeIcon } from "../assets/Homeicon.svg";
import { ReactComponent as Searchicon } from "../assets/Searchicon.svg";
import { ReactComponent as Libraryicon } from "../assets/Libraryicon.svg";

const myPlaylist = [
  {
    id: 1,
    name: "Soulful Arijit",
  },
  {
    id: 2,
    name: "Anime OST",
  },
  {
    id: 3,
    name: "Shri Krishna",
  },
  {
    id: 4,
    name: "Romantic Mix",
  },
  {
    id: 5,
    name: "Old Songs",
  },
  {
    id: 6,
    name: "My Favourite",
  },
  {
    id: 7,
    name: "Lofi Songs",
  },
  {
    id: 8,
    name: "Bhajans",
  },
];

export default function Sidebar() {
  return (
    <div className="side-bar-container">
      <div className="side-bar-items">
        <HomeIcon width={"18px"} strokeWidth={"2px"} /> Home
      </div>
      <div className="side-bar-items">
        <Searchicon width={"18px"} strokeWidth={"2px"} /> Search
      </div>
      <div className="side-bar-items">
        <Libraryicon width={"18px"} strokeWidth={"2px"} /> Library
      </div>
      <div class="divider"></div>
      <div className="side-options">
        {myPlaylist.map((item) => {
          return (
            <div className="side-bar-items" key={item.id}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

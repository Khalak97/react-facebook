import React from "react";

import "./StoryReel.css";

import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.pexels.com/photos/5274440/pexels-photo-5274440.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        profileSrc="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        title="User 1"
      />
      <Story
        image="https://images.pexels.com/photos/5274440/pexels-photo-5274440.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        profileSrc="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        title="User 2"
      />
      <Story
        image="https://images.pexels.com/photos/5274440/pexels-photo-5274440.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        profileSrc="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        title="User 3"
      />
    </div>
  );
}

export default StoryReel;

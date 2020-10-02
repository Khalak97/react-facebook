import React from "react";

import "./Feed.css";

import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        message="It works!"
        timestamp="Timestamp"
        username="User name"
        image="https://images.pexels.com/photos/5161632/pexels-photo-5161632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Post
        profilePic="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        message="It works!"
        timestamp="Timestamp"
        username="User name"
        image="https://images.pexels.com/photos/5161632/pexels-photo-5161632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Post
        profilePic="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        message="It works!"
        timestamp="Timestamp"
        username="User name"
        image="https://images.pexels.com/photos/5161632/pexels-photo-5161632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
    </div>
  );
}

export default Feed;

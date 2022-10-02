import React, { useState } from "react";

const Post = (props) => {
  // const [read, setRead] = useState(false);
  // const [background, setBackground] = useState("hsl(211, 68%, 94%)");

  const handleClick = () => {
    if (props.online === true) {
      props.setBackground(() => "#fff");
      props.setRead(() => true);
      props.setCount((prevCount) => prevCount - 1);
    }

    if (props.count == 0) {
      props.setCount(0);
    }
  };

  return (
    <div className="container">
      <div
        className="post"
        onClick={handleClick}
        style={
          props.online
            ? { background: props.background }
            : { background: "#fff" }
        }
      >
        <img
          className="avatar"
          src={`../images/${props.avatar}`}
          alt="avatar mark"
        />
        <div className="post-text">
          <span className="name">{props.name}</span> {props.firstMessage}{" "}
          <span style={{ color: "hsl(219, 12%, 42%)", fontWeight: "800" }}>
            {props.secondMessage}{" "}
            {props.online == true && (
              <div
                className="circle"
                style={
                  props.read
                    ? { display: "none" }
                    : { background: "hsl(1, 90%, 64%)" }
                }
              ></div>
            )}
          </span>
          <div className="post-recent">{props.recent}</div>
          {props.comments && (
            <div className="comments">
              Hello, thanks for setting up the Chess Club, I've been a member
              for a few weeks now and i'm already having lots of fun and
              improving my game.
            </div>
          )}
        </div>
        {props.avatarDisplay && (
          <img className="avatar-right" src={`../images/${props.avatarLeft}`} />
        )}
      </div>
    </div>
  );
};

export default Post;

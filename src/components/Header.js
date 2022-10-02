import React from "react";

const Header = (props) => {
  const handleClick = () => {
    props.setCount(0);
    props.setBackground("#fff");
    props.setRead(true);
  };
  return (
    <header>
      <div className="container">
        <div className="header">
          <h2>Notifications</h2>
          <span
            className="counter"
            style={
              props.count == 0
                ? { backgroundColor: "red" }
                : { backgroundColor: "hsl(219, 85%, 26%)" }
            }
          >
            {props.count}
          </span>
          <p onClick={handleClick}>Mark all as read</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
// import data from "./data";

function App() {
  const [count, setCount] = useState(3);
  const [read, setRead] = useState(false);
  const [online, setOnline] = useState(true);
  const [background, setBackground] = useState("hsl(211, 68%, 94%)");
  const comments = true;
  const avatarDisplay = true;

  // const postData = data.map((item) => {
  //   return (
  //     <Post
  //       key={item.id}
  //       avatar={item.avatar}
  //       name={item.name}
  //       firstMessage={item.firstMessage}
  //       secondMessage={item.secondMessage}
  //       online={item.online}
  //       recent={item.recent}
  //     />
  //   );
  // });

  return (
    <div className="App">
      <Header
        count={count}
        setCount={setCount}
        read={read}
        setRead={setRead}
        background={background}
        setBackground={setBackground}
      />
      <main>
        <Post
          avatar="avatar-mark-webber.webp"
          name="Mark Webber"
          firstMessage="reacted to your recent"
          secondMessage="My first tournament today"
          online={online}
          setOnline={setOnline}
          count={count}
          setCount={setCount}
          read={read}
          setRead={setRead}
          background={background}
          setBackground={setBackground}
          recent="1m ago"
        />
        <Post
          avatar="avatar-angela-gray.webp"
          name="Angela Gray"
          firstMessage="followed you"
          online={online}
          setOnline={setOnline}
          count={count}
          setCount={setCount}
          read={read}
          setRead={setRead}
          background={background}
          setBackground={setBackground}
          recent="5m ago"
        />
        <Post
          avatar="avatar-jacob-Thompson.webp"
          name="Jacob Thompson"
          firstMessage="has joined your group"
          secondMessage="Chess Club"
          online={online}
          setOnline={setOnline}
          count={count}
          setCount={setCount}
          read={read}
          setRead={setRead}
          background={background}
          setBackground={setBackground}
          recent="1 day ago"
        />
        <Post
          avatar="avatar-rizky-hasanuddin.webp"
          name="Rizky Hasanuddin"
          firstMessage="sent you a private message"
          online={!online}
          read={read}
          setRead={setRead}
          comments={comments}
          recent="5 days ago"
        />
        <Post
          avatar="avatar-kimberly-smith.webp"
          name="Kimberly Smith"
          firstMessage="commented on your picture"
          online={!online}
          read={read}
          setRead={setRead}
          avatarLeft="image-chess.webp"
          avatarDisplay={avatarDisplay}
          recent="1 week ago"
        />
        <Post
          avatar="avatar-nathan-peterson.webp"
          name="Nathan Peterson"
          firstMessage="reacted to your recent post"
          secondMessage="5 end-game strategies to increase your win rate"
          online={!online}
          read={read}
          setRead={setRead}
          recent="2 weeks ago"
        />
        <Post
          avatar="avatar-anna-kim.webp"
          name="Anna Kim"
          firstMessage="left the group"
          online={!online}
          read={read}
          setRead={setRead}
          recent="2 weeks ago"
        />
      </main>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import PostForm from "./Components/PostForm";
import FetchPost from "./Components/FetchPost";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="container pt-2">
REACT APP
      <div className={"row"}>
        <div className={"col"}>
            POST FORN
<PostForm/>
        </div>
      </div>
      <div className={"row"}>
        <div className={"col"}>
            СИНХРОННЫЕ ПОСТЫ
<Posts/>
        </div>
        <div className={"col"}>
            АСИНХРОННЫЕ ПОСТЫ
<FetchPost/>
        </div>
      </div>
    </div>
  );
}

export default App;

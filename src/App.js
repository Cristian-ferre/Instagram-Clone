import React, { useState } from "react"
import Post from "./components/posts/Post"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Story from "./components/story/Story"
import "./App.css"


function App() {
  const [posts, setPosts] = useState([
    {
      username: "carrot_cake",
      caption: "Felicidade!",
      imageUrl:
        "https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "mk_b_jordan",
      caption: "Sorte de todos os dias!",
      imageUrl:
        "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "mk_b_jordan",
      caption: "Sorte de todos os dias!",
      imageUrl:
        "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "mk_b_jordan",
      caption: "Sorte de todos os dias!",
      imageUrl:
        "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);


  return (
    <div className="app">

      <Header />


      <div className="estruturaMain">


        <div className="timeline">
          <Story />



          {posts.map((post) => (

            <Post
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
            />
          ))}
          <Post />
        </div>

        <div>
          <Sidebar />
        </div>

      </div>



    </div>
  );
}

export default App;


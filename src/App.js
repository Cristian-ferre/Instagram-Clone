import React, { useState } from "react"
import Post from "./components/posts/Post"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Story from "./components/story/Story"
import img from "../src/components/files/fatosdes.jpg"

import "./App.css"



function App() {

  const [posts, setPosts] = useState([
    {
      username: "fatosdesconhecidos",
      caption: "Muitas espinhas na adolescência é sinal de que você será um adulto com aparência mais jovem. Sim, há uma luz no fim do túnel. Um estudo feito com 1.205 irmãs gêmeas chegou a conclusão de que aquelas com acne, iriam conservar uma pele jovem por um período maior de tempo. Já aquelas que tinham uma boa pele quando jovens, envelheciam mais rápido. Especialistas acreditam que a acne constrói um tipo de proteção natural contra o envelhecimento, retardando o aparecimento de rugas e marcas do tempo.",
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


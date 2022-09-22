import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mayaraviana.png",
      name: "Mayara Viana",
      role: "Digital Designer and Front-end Developer @LDI",
    },
    content: [
      { type: "paragraph", content: "Hi Guys 👋" },
      {
        type: "paragraph",
        content:
          "I just finish a new project to my portfolio. To see more go to my website 🚀",
      },
      { type: "link", content: "mayaraviana.com" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/LauraBeatris.png",
      name: "Laura Beatris",
      role: "Educator @Company",
    },
    content: [
      { type: "paragraph", content: "Hi Guys 👋" },
      {
        type: "paragraph",
        content:
          "I just finish a new project to my portfolio. To see more go to my website 🚀",
      },
      { type: "link", content: "mayaraviana.com" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

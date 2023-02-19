import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import { DefaultPage } from "../../components/DefaultPage";
import { PostModelo } from "../../components/PostModelo";
import posts from "../../json/posts.json";
import styles from './Post.module.css'
import { NotFound } from "../404";
import "./Post.css";
import { PostCard } from "../../components/PostCard";

export const Post = () => {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) return <NotFound />;

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => {
      b.id - a.id;
    })
    .slice(0, 4)

  return (
    <DefaultPage>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        title={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
        <h2 className={styles.tituloOutrosPosts}>
          Outros posts que você pode gostar:
        </h2>
        <ul className={styles.postsRecomendados}>
          {postsRecomendados.map((post) => (
              <li key={post.id}><PostCard title={post.titulo} id={post.id} /></li>
              ))}
        </ul>
      </PostModelo>
    </DefaultPage>
  );
};

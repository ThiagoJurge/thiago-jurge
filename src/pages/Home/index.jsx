import React from "react";
import styles from './Home.module.css'
import posts from '../../json/posts.json'
import { PostCard } from "../../components/PostCard";

export const Home = () => {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post)=>
        (
          <li key={post.id}>
            
            <PostCard title={post.titulo} text={post.texto} id={post.id}/>
            
            </li>
        ))}
      </ul>
    </main>
  );
};

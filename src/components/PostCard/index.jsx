import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { MainButton } from "../MainButton";
import styles from "./Post.module.css";
import { ReadOutlined } from "@ant-design/icons";
const { Meta } = Card;

export const PostCard = ({ id, text, title }) => {
  return (
    <Link to={`/posts/${id}`}>
      <Card
        hoverable
        style={{
          width: 300,
        }}
        cover={
          <img
            className={styles.capa}
            src={`/assets/posts/${id}/capa.png`}
            alt={title}
          />
        }
        actions={[
          <MainButton>
            <ReadOutlined /> Ler
          </MainButton>,
        ]}
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
};

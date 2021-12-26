import moment from "moment";
import styles from "../../../styles/Posts.module.css";

import { FiHeart, FiMessageCircle } from "react-icons/fi";

export default function Posts({ posts }) {
  console.log(posts.data);
  return (
    <div>
      {posts &&
        posts?.data.map((post) => {
          return (
            <div key={post.id} className={styles.container}>
              <div className={styles.header}>
                <div className={styles.date}>
                  {moment(post.attributes.createdAt).format("D MMMM YYYY")}
                </div>
                <h1 className={styles.title}>{post.attributes.Title}</h1>
              </div>

              <div>
                <img
                  // src={post.attributes.Image}
                  src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt={`${post.attributes.Title} post image`}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.footer}>
                <div className={styles.actions}>
                  <FiHeart className={styles.action} />
                  <FiMessageCircle className={styles.action} />
                </div>
                <div className={styles.author}>
                  <span>Posted by: </span>
                  <span>Hiba Abdel Karim</span>
                  {/* {post.attributes.author.name} */}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

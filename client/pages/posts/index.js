import moment from "moment";
import styles from "../../styles/Posts.module.css";

export default function Posts({ posts }) {
  console.log(posts.data);
  return (
    <div>
      {posts &&
        posts?.data.map((post) => {
          return (
            <div key={post.id} className={styles.container}>
              <div className={styles.date}>
                {moment(post.attributes.createdAt).format("D MMMM YYYY")}
              </div>
              <h1 className={styles.title}>{post.attributes.Title}</h1>
              <div>
                <img
                  src={post.attributes.Image}
                  alt={`${post.attributes.Title} post image`}
                  height={400}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

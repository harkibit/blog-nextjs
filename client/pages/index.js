import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Posts from "./posts";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hiba's Blog</title>
        <meta name="description" content="Hiba Abdel Karim's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  // with this function we can generate data on the server side or on the client side
  // we can't get data using fetch in next.js it should be get using this function

  const fetchData = await fetch("http://localhost:1337/api/posts");
  const posts = await fetchData.json();

  console.log(posts.data);

  return {
    props: { posts },
  };
}

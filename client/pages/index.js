import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Posts from "../components/elements/posts/Posts";

import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hiba's Blog</title>
        <meta name="description" content="Hiba Abdel Karim's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <navbar className={styles.navbarContainer}>
        <ul className={styles.navbarUl}>
          <li></li>
          <li>Blog</li>
          <li>Search</li>
        </ul>
      </navbar>

      <div className={styles.body}>
        <div className={styles.sidebar}>
          <FiLinkedin className={styles.socialmediaIcon} />
          <FiGithub className={styles.socialmediaIcon} />
          <FiTwitter className={styles.socialmediaIcon} />
        </div>

        <div className={styles.posts}>
          <Posts posts={posts} />
        </div>

        <div className={styles.rightContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </div>
      </div>
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

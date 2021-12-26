export default function Post() {
  return <div>hello</div>;
}

// tell next how many pages there are
export async function getStaticPath() {
  const res = await fetch("http://localhost:1337/api/posts");
  const posts = await res.json();

  posts.map((post) => {});

  const path = posts.map((post) => {
    return { params: { slug: post.Slug } };
  });

  return {
    path,
    fallback: false,
  };
}

// for each individual page retrieve its information
export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch("http://localhost:1337/api/posts");
}

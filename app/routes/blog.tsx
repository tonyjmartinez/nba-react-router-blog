import { Link } from "react-router";

const postModules = import.meta.glob("../content/posts/*.mdx", { eager: true });

interface PostMeta {
  meta?: { title?: string; date?: string };
}

const posts = Object.entries(postModules).map(([path, module]) => {
  const slug = path.split("/").pop()?.replace(/\.mdx$/, "") ?? path;
  const { meta } = module as PostMeta;
  return { slug, title: meta?.title ?? slug, date: meta?.date };
});

export default function Blog() {
  return (
    <main className="prose dark:prose-invert max-w-none p-4">
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

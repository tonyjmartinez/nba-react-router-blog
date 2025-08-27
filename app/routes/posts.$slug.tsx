import { useParams } from "react-router";

const postModules = import.meta.glob("../content/posts/*.mdx", { eager: true });

export default function Post() {
  const { slug } = useParams() as { slug?: string };
  const key = `../content/posts/${slug}.mdx`;
  const mod = postModules[key] as { default: React.ComponentType; meta?: { title?: string } } | undefined;
  if (!mod) {
    return <main className="p-4">Post not found</main>;
  }
  const Component = mod.default;
  const title = mod.meta?.title ?? slug;
  return (
    <main className="prose dark:prose-invert max-w-none p-4">
      <h1>{title}</h1>
      <Component />
    </main>
  );
}

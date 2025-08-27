import type { Route } from "./+types/home";
import HomeContent from "../content/home.mdx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="prose dark:prose-invert max-w-none p-4">
      <HomeContent />
    </main>
  );
}

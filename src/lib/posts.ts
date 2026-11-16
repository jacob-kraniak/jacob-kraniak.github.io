import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

/** Drafts stay visible in `astro dev` and drop out of production builds. */
export function isPublicPost(post: Post): boolean {
  return !(import.meta.env.PROD && post.data.draft === true);
}

export async function getPublicPosts(): Promise<Post[]> {
  const posts = await getCollection("posts");
  return posts
    .filter(isPublicPost)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function statusClass(status: string): string {
  if (status === "active" || status === "done") return "text-primary";
  if (status === "idea") return "ph";
  return "mute";
}

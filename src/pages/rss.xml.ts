import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import siteData from "../data/site.yml";
import type { SiteContent } from "../lib/types";
import { getPublicPosts } from "../lib/posts";

const site = siteData as unknown as SiteContent;

export async function GET(context: APIContext) {
  const posts = await getPublicPosts();
  return rss({
    title: `${site.identity.handle} — build log`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { astroExpressiveCode } from "@astrojs/starlight/expressive-code";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroExpressiveCode(),
    mdx(),
    starlight({
      title: "Jspark.dev",
      description: "웹 개발과 관련된 게시물 모음입니다.",
      lastUpdated: true,
      locales: {
        root: {
          label: "한국어",
          lang: "ko-KR",
        },
      },
      favicon: "/favicon.ico",
      sidebar: [{ label: "게시물 목록", autogenerate: { directory: "posts" } }],
      social: {
        github: "https://github.com/jsparkdev",
        "x.com": "https://x.com/jsparkdev",
      },
    }),
  ],
});

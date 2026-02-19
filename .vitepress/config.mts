import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Peter Park",
  description: "Documentation of my life and work",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Education",
        items: [{ text: "Education", link: "/education" }],
      },
      {
        text: "Media Appearances",
        items: [{ text: "Media Appearances", link: "/media_appearances" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/petercpark" }],
  },
});

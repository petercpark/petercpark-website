import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Peter Park",
  description: "Documentation of my life and work",
  base: "/petercpark-website/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      //{ text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Achievements",
        items: [
          { text: "Education", link: "/education" },
          { text: "Career", link: "/career" },
          { text: "Media Appearances", link: "/media_appearances" },
          { text: "Publications", link: "/publications" },
          {
            text: "Hobbies",
            link: "/hobbies",
            items: [
              { text: "Cubing", link: "/hobbies/cubing" },
              { text: "Stenography", link: "/hobbies/stenography" },
              { text: "Coding", link: "/hobbies/coding" },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/petercpark" }],
  },
});

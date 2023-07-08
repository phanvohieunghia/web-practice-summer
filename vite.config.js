import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const fileNames = ["src", "components", "assets", "page", "router"];
// const filePaths = fileNames.reduce((acc, cur) => ({
//   ...acc,
//   [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
// }));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //   ...filePaths,
    // },
    alias: [{ find: "@", replacement: "/src" }],
  },
});
3;

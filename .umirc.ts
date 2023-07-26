import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: '/form', component: 'Form'},
    { path: '/home', component: 'Home'},
    { path: '/detail', component: 'Detail'},
  ],
  npmClient: 'tnpm',
  extraBabelPlugins: ['babel-plugin-istanbul'],
});

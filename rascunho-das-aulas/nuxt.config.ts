// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
	alias: {
		assets: '/<rootDir>/assets/'
	},
	css: ["~/assets/css/main.scss"],
	postcss: {
    	plugins: {
    	  tailwindcss: {},
    	  autoprefixer: {},
    	},
  },
});

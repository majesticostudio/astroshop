import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	adapter: cloudflare(),
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: "css-variables",
		},
	},
	shikiConfig: {
		wrap: true,
		skipInline: false,
		drafts: true,
	},
	site: "https://astroshop.majestico.co",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		mdx(),
		react(),
		markdoc(),
		keystatic(),
	],
});

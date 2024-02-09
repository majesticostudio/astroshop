/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontSize: {
			xs: [
				"0.75rem",
				{
					lineHeight: "1rem",
				},
			],
			sm: [
				"0.875rem",
				{
					lineHeight: "1.5rem",
				},
			],
			base: [
				"1rem",
				{
					lineHeight: "1.75rem",
				},
			],
			lg: [
				"1.125rem",
				{
					lineHeight: "2rem",
				},
			],
			xl: [
				"1.25rem",
				{
					lineHeight: "2rem",
				},
			],
			"2xl": [
				"1.5rem",
				{
					lineHeight: "2rem",
				},
			],
			"3xl": [
				"2rem",
				{
					lineHeight: "2.5rem",
				},
			],
			"4xl": [
				"2.5rem",
				{
					lineHeight: "3.5rem",
				},
			],
			"5xl": [
				"3rem",
				{
					lineHeight: "3.5rem",
				},
			],
			"6xl": [
				"3.75rem",
				{
					lineHeight: "1",
				},
			],
			"7xl": [
				"4.5rem",
				{
					lineHeight: "1.1",
				},
			],
			"8xl": [
				"6rem",
				{
					lineHeight: "1",
				},
			],
			"9xl": [
				"8rem",
				{
					lineHeight: "1",
				},
			],
		},
		extend: {
			backgroundImage: (theme) => ({
				screens: "url('/path-to/image.png')",
			}),
			colors: {
				black: "#161616",
				blue: {
					50: "#EBF0FF",
					100: "#D6E2FF",
					200: "#ADC5FF",
					300: "#85A7FF",
					400: "#5C8AFF",
					500: "#366EFF",
					600: "#0045F5",
					700: "#0034B8",
					800: "#00237A",
					900: "#00113D",
					950: "#00091F",
				},
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
};

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "selector",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				extensions: {
					ts: "#3178c6",
					js: "#f7df1e",
					jsx: "#61dbfb",
					css: "#20639b",
					html: "#FF5733",
				},
				light: {
					primary: {
						normal: "#007acc",
					},
					secondary: {
						normal: "#1e1e1e",
						aside: "#333333",
						navBar: "#252525",
						header: "#3c3c3c",
						alternate: "#0e0e0e",
						highlight: "#37373e",
					},
					background: {
						normal: "#f5f5f5",
					},
					backgroundHeader: {
						normal: "#2D3133",
					},
					yellow: {
						normal: "#E5C365",
					},
				},
				dark: {
					primary: {
						normal: "#007acc",
						highlight: "#00b1fb",
					},
					secondary: {
						normal: "#f1f1f1",
						alternate: "#4a4c4e",
					},
					background: {
						normal: "#252526",
					},
					backgroundHeader: {
						normal: "#2D3133",
					},
					yellow: {
						normal: "#E5C365",
					},
				},
				gray: {
					heavy: "#c9cbce",
					light: "#ebebeb",
					xlight: "#f3f3f3",
				},
			},
			animation: {
				fade: "fade",
				"slide-down-fade": "slide-down-fade",
				"zoom-in": "zoom-in",
				"zoom-out": "zoom-out",
			},
			keyframes: {
				fade: {
					"0%": {
						opacity: 0,
					},
					"100%": {
						opacity: "100%",
					},
				},
				"slide-down-fade": {
					"0%": {
						transform: "translateY(-50%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "100%",
					},
				},
				"zoom-in": {
					"0%": {
						transform: "scale(25%)",
					},
					"100%": {
						transform: "scale(100%)",
					},
				},
				"zoom-out": {
					"0%": {
						transform: "scale(100%)",
					},
					"100%": {
						transform: "scale(0%)",
					},
				},
			},
		},
	},
	plugins: [],
}

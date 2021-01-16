module.exports = {
	siteMetadata: {
		title:
			'Web Boost - A Beginner-Friendly Fullstack Web Development Course Using Following',
		description:
			'An Agile way to learn web development. This document will provide all the necessary guidelines need a beginner to be a fullstack web developer. Fullstack Development journey begins with Web Boost',
		author: 'HM Nayem',
		siteUrl: 'https://webboost.stacklearner.com',
	},
	plugins: [
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'G-RVMNCQBRFE',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Montserrat\:300,400,500,600,700`,
					`Quicksand\:300,400,500,600,700`,
				],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-plugin-theme-ui`,
			options: {
				preset: '@theme-ui/preset-tailwind',
			},
		},
	],
};

import React from 'react';
import { Helmet } from 'react-helmet';

import getData from '../mapdata';
import { getImage } from '../assets';

const SEO = () => {
	const site = getData('site');
	return (
		<Helmet>
			<meta
				name='title'
				content={`${site.meta.title} - ${site.meta.subtitle}`}
			/>
			<meta name='description' content={site.meta.summary} />
			<meta name='keywords' content={site.meta.keywords} />
			<meta name='twitter:card' content={site.meta.title} />
			<meta
				name='twitter:title'
				content={`${site.meta.title} - ${site.meta.subtitle}`}
			/>
			<meta name='twitter:image' content={getImage('hero')} />
			<meta
				property='og:url'
				content='https://webboost.stacklearner.com'
			/>
			<meta property='og:type' content='website' />
			<meta
				property='og:title'
				content={`${site.meta.title} - ${site.meta.subtitle}`}
			/>
			<meta property='og:description' content={site.meta.summary} />
			<meta property='og:image' content={getImage('hero')} />
			<meta name='robots' content='index' />
			<title>{`${site.meta.title} - ${site.meta.subtitle}`}</title>
		</Helmet>
	);
};

export default SEO;

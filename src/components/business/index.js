/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

import { Container, SectionTitle } from '../common';
import Achievements from '../achievements';
import Faqs from './Faqs';
import getData from '../../mapdata';

const Business = () => {
	const business = getData('business');
	const bullets = business.bullets;
	const faq = business.faqs;

	return (
		<Box sx={{ mt: 5 }}>
			<Container>
				<SectionTitle title={business.title} body={business.summary} />
			</Container>
			<Achievements data={bullets} />
			<Container containerSx={{ mt: 4 }}>
				<SectionTitle title={faq.title} body={faq.summary} />
				<Faqs
					faqs={faq.faqs}
					message={business.congratulation.summary}
					title={business.congratulation.title}
				/>
			</Container>
		</Box>
	);
};

export default Business;

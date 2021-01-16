/** @jsx jsx */
import { jsx } from 'theme-ui';
import shortid from 'shortid';

import { Box } from '../common';
import FaqItem from './FaqItem';
import Congratulation from '../sprints/Congratulation';

const Faqs = ({ faqs, message, title }) => {
	return (
		<Box>
			{faqs.map((faq) => (
				<FaqItem key={shortid.generate()} item={faq} />
			))}
			<Congratulation title={title} message={message} />
		</Box>
	);
};

export default Faqs;

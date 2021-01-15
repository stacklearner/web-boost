/** @jsx jsx */
import { jsx } from 'theme-ui';
import shortid from 'shortid';
import Box from '../common/Box';
import FaqItem from './FaqItem';

const faqs = [
	{
		question: 'What is Your Name?',
		answer: {
			text: 'My Name is HM Nayem',
			keyPoints: ['Hasan', 'Mahmud', 'Nayem'],
		},
	},
	{
		question: 'What is Your Name?',
		answer: {
			text: 'My Name is Shegufa Taranjum',
			keyPoints: ['Shegufa', 'Taranjum'],
		},
	},
];

const Faqs = () => {
	return (
		<Box>
			{faqs.map((faq) => (
				<FaqItem key={shortid.generate()} item={faq} />
			))}
		</Box>
	);
};

export default Faqs;

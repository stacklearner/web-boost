/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, body }) => {
	return (
		<Box sx={{ textAlign: 'center' }}>
			<Heading
				as='h1'
				sx={{
					color: 'title',
					fontFamily: 'heading',
					fontWeight: 'heading',
					fontSize: 6,
					marginBottom: 4,
				}}
			>
				{title}
			</Heading>
			<Text
				sx={{
					color: 'subtitle',
					fontFamily: 'body',
					fontWeight: 'body',
					fontSize: 4,
					marginBottom: 5,
				}}
			>
				{body}
			</Text>
		</Box>
	);
};

export default SectionTitle;

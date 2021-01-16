/** @jsx jsx */
import { jsx } from 'theme-ui';

import Box from './Box';
import Heading from './Heading';
import Text from './Text';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, body }) => {
	return (
		<Box textAlign='center'>
			<Heading fontSize={[5, 5, 5, 6, 6]} marginBottom={[3, 3, 3, 4, 4]}>
				{title}
			</Heading>
			<Text marginBottom='5'>{body}</Text>
		</Box>
	);
};

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};
export default SectionTitle;

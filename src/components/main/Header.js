/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

import { Flex, Heading, Text } from '../common';

const Header = ({ title, sprint, duration, summary }) => {
	return (
		<Flex flexDirection='column' justifyContent='center' px={[3, 4, 5]}>
			<Heading color='primary' fontSize={[5, 6]}>
				{title}
			</Heading>
			<Flex mt='3' mb='4' flexWrap='wrap'>
				<Heading
					as='h2'
					fontSize='4'
					fontFamily='body'
					color='subtitle'
					width={['100%', '100%', '100%', 'auto']}
				>
					SPRINT: {sprint}
				</Heading>
				<Heading
					as='h2'
					fontSize='4'
					fontFamily='body'
					color='subtitle'
					width={['100%', '100%', '100%', 'auto']}
					mx={[0, 0, 0, 4]}
				>
					Duration: {duration}
				</Heading>
			</Flex>
			<Text fontFamily='bangla' fontSize='3'>
				{summary}
			</Text>
		</Flex>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	sprint: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
};

export default Header;

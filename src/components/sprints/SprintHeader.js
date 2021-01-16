/** @jsx jsx*/
import { jsx, Image, useColorMode } from 'theme-ui';
import PropTypes from 'prop-types';

import { Flex, Text, IconButton } from '../common';
import { getIcon } from '../../assets';

const SprintHeader = ({ duration, sprint, toggle, setToggle }) => {
	const [colorMode] = useColorMode();
	const mode = colorMode === 'default' ? 'light' : 'dark';
	return (
		<Flex alignItems='center' flexWrap='wrap'>
			<Flex
				width={['100%', '100%', '100%', 'auto', 'auto']}
				alignItems='center'
			>
				<Image src={getIcon('sprint', mode)} sx={{ width: '3rem' }} />
				<Text
					ml={[3, 3, 3, 4, 4]}
					fontSize={[4, 4, 4, 5, 5]}
					fontWeight='heading'
					cursor='pointer'
					onClick={() => setToggle(!toggle)}
				>
					What's Inside? Explore The Sprints
				</Text>
			</Flex>
			<Flex
				width={['100%', '100%', '100%', 'auto', 'auto']}
				alignItems='center'
				ml={[5, 5, 5, 'auto', 'auto']}
			>
				<Text mr={[3, 3, 3, 4, 4]}>{duration}</Text>
				<Text mr={[3, 3, 3, 4, 4]}>{sprint} Sprints</Text>
				<IconButton
					ml={['auto', 'auto', 'auto', 0, 0]}
					icon={getIcon('downArrow', mode)}
					width='2rem'
					onClick={() => setToggle(!toggle)}
				/>
			</Flex>
		</Flex>
	);
};

SprintHeader.propTypes = {
	duration: PropTypes.string.isRequired,
	sprint: PropTypes.string.isRequired,
	toggle: PropTypes.bool.isRequired,
	setToggle: PropTypes.func.isRequired,
};

export default SprintHeader;

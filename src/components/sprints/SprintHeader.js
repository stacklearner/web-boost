/** @jsx jsx*/
import { jsx, Image, useColorMode } from 'theme-ui';
import PropTypes from 'prop-types';

import Flex from '../common/Flex';
import Text from '../common/Text';
import IconButton from '../common/IconButton';
import SprintDarkIcon from '../../images/sprint-dark.png';
import SprintWhiteIcon from '../../images/sprint-white.png';
import DownArrowWhite from '../../images/down-arrow-white.png';
import DownArrowDark from '../../images/down-arrow-dark.png';

const SprintHeader = ({ duration, sprint, toggle, setToggle }) => {
	const [colorMode] = useColorMode();
	return (
		<Flex alignItems='center' flexWrap='wrap'>
			<Flex
				width={['100%', '100%', '100%', 'auto', 'auto']}
				alignItems='center'
			>
				<Image
					src={
						colorMode === 'default'
							? SprintWhiteIcon
							: SprintDarkIcon
					}
					sx={{ width: '3rem' }}
				/>
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
					icon={
						colorMode === 'default' ? DownArrowDark : DownArrowWhite
					}
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

/** @jsx jsx*/
import { jsx, Flex, Image, Text, useColorMode } from 'theme-ui';
import IconButton from '../common/IconButton';
import PropTypes from 'prop-types';
import SprintDarkIcon from '../../images/sprint-dark.png';
import SprintWhiteIcon from '../../images/sprint-white.png';
import DownArrowWhite from '../../images/down-arrow-white.png';
import DownArrowDark from '../../images/down-arrow-dark.png';

const SprintHeader = ({ duration, sprint, toggle, setToggle }) => {
	const [colorMode] = useColorMode();
	return (
		<Flex
			sx={{
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Image
				src={colorMode === 'default' ? SprintWhiteIcon : SprintDarkIcon}
				sx={{ width: '3rem' }}
			/>
			<Text
				sx={{
					fontFamily: 'body',
					fontSize: '4',
					color: 'text',
					ml: 4,
					cursor: 'pointer',
				}}
				onClick={() => setToggle(!toggle)}
			>
				Explore The Sprints
			</Text>
			<Text
				sx={{
					fontFamily: 'body',
					fontSize: '4',
					color: 'text',
					ml: 'auto',
					mr: 4,
				}}
			>
				{duration}
			</Text>
			<Text
				sx={{
					fontFamily: 'body',
					fontSize: '4',
					color: 'text',
					mr: 4,
				}}
			>
				{sprint} Sprints
			</Text>
			<IconButton
				icon={colorMode === 'default' ? DownArrowDark : DownArrowWhite}
				width='2rem'
				onClick={() => setToggle(!toggle)}
			/>
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

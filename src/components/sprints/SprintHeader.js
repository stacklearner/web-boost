/** @jsx jsx*/
import { jsx, Flex, Image, Text, IconButton } from 'theme-ui';
import PropTypes from 'prop-types';
import WhiteIcon from '../../images/white.png';

const SprintHeader = ({ duration, sprint, toggle, setToggle }) => {
	return (
		<Flex
			sx={{
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Image src={WhiteIcon} sx={{ width: '2rem' }} />
			<Text
				sx={{ fontFamily: 'body', fontSize: '4', color: 'text', ml: 4 }}
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
				sx={{ cursor: 'pointer' }}
				onClick={() => setToggle(!toggle)}
			>
				<Image src={WhiteIcon} sx={{ width: '2rem' }} />
			</IconButton>
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

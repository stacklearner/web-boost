/** @jsx jsx */
import { jsx, Box, Flex, Text, Image, IconButton } from 'theme-ui';
import PropTypes from 'prop-types';
import WhiteIcon from '../../images/white.png';

const SprintItemHeader = ({ item, toggle, setToggle }) => {
	return (
		<Flex sx={{ alignItems: 'center' }}>
			<Flex
				sx={{
					width: '3rem',
					height: '3rem',
					borderRadius: '50%',
					backgroundColor: 'secondary',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
					sx={{
						fontFamily: 'body',
						fontSize: 4,
						fontWeight: 'bold',
						color: 'heading',
					}}
				>
					{item.count}
				</Text>
			</Flex>
			<Box sx={{ ml: 4 }}>
				<Text
					sx={{
						fontFamily: 'body',
						fontSize: 4,
						fontWeight: 'body',
						color: 'subheading',
					}}
				>
					{item.name}
				</Text>
			</Box>
			<Box sx={{ ml: 'auto', mr: 3 }}>
				<Text
					sx={{
						fontFamily: 'body',
						fontSize: 3,
						fontWeight: 'body',
						color: 'text',
					}}
				>
					{item.duration}
				</Text>
			</Box>
			<IconButton
				sx={{ cursor: 'pointer' }}
				onClick={() => setToggle(!toggle)}
			>
				<Image src={WhiteIcon} sx={{ width: '1.5rem' }} />
			</IconButton>
		</Flex>
	);
};

SprintItemHeader.propTypes = {
	item: PropTypes.object.isRequired,
	toggle: PropTypes.bool.isRequired,
	setToggle: PropTypes.func.isRequired,
};

export default SprintItemHeader;

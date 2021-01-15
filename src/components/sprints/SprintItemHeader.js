/** @jsx jsx */
import { jsx, Box, Flex, Text, useColorMode } from 'theme-ui';
import PropTypes from 'prop-types';
import IconButton from '../common/IconButton';
import DownArrowDark from '../../images/down-arrow-dark.png';
import DownArrowWhite from '../../images/down-arrow-white.png';

const SprintItemHeader = ({ item, toggle, setToggle }) => {
	const [colorMode] = useColorMode();
	return (
		<Flex sx={{ alignItems: 'center' }}>
			<Flex
				sx={{
					width: '3rem',
					height: '3rem',
					borderRadius: '50%',
					backgroundColor: 'primary',
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
						cursor: 'pointer',
					}}
					onClick={() => setToggle(!toggle)}
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
				icon={colorMode === 'default' ? DownArrowDark : DownArrowWhite}
				width='1rem'
				onClick={() => setToggle(!toggle)}
			/>
		</Flex>
	);
};

SprintItemHeader.propTypes = {
	item: PropTypes.object.isRequired,
	toggle: PropTypes.bool.isRequired,
	setToggle: PropTypes.func.isRequired,
};

export default SprintItemHeader;

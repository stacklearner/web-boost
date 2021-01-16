/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import PropTypes from 'prop-types';

import { Box, Flex, FlexCentered, Text, IconButton } from '../common';
import { getIcon } from '../../assets';

const SprintItemHeader = ({ item, toggle, setToggle }) => {
	const [colorMode] = useColorMode();
	const mode = colorMode === 'default' ? 'light' : 'dark';
	return (
		<Flex alignItems='center' flexWrap='wrap'>
			<Flex alignItems='center' width={['100%', '100%', '60%', '60%']}>
				<FlexCentered
					width='3rem'
					height='3rem'
					borderRadius='50%'
					backgroundColor='primary'
				>
					<Text fontWeight='bold' color='reverse'>
						{item.count}
					</Text>
				</FlexCentered>
				<Text
					ml={[3, 3, 3, 4, 4]}
					color='subheading'
					cursor='pointer'
					fontWeight='bold'
					fontSize={[2, 3, 3, 4, 4]}
					onClick={() => setToggle(!toggle)}
				>
					{item.name}
				</Text>
			</Flex>
			<Flex
				alignItems='center'
				ml={[5, 5, 'auto', 'auto']}
				width={['100%', '100%', '40%', '40%']}
			>
				<Box ml={[0, 0, 'auto', 'auto']} mr='3'>
					<Text fontSize={[2, 2, 3, 3, 3]}>{item.duration}</Text>
				</Box>
				<IconButton
					ml={['auto', 'auto', 0, 0, 0]}
					icon={getIcon('downArrow', mode)}
					width='1rem'
					onClick={() => setToggle(!toggle)}
				/>
			</Flex>
		</Flex>
	);
};

SprintItemHeader.propTypes = {
	item: PropTypes.object.isRequired,
	toggle: PropTypes.bool.isRequired,
	setToggle: PropTypes.func.isRequired,
};

export default SprintItemHeader;

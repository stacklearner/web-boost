/** @jsx jsx */
import { jsx, useColorMode, Image } from 'theme-ui';
import PropTypes from 'prop-types';

import Flex from '../common/Flex';
import Box from '../common/Box';
import FlexCentered from '../common/FlexCentered';
import Text from '../common/Text';
import IconButton from '../common/IconButton';

import DownArrowDark from '../../images/down-arrow-dark.png';
import DownArrowWhite from '../../images/down-arrow-white.png';
import CheckDark from '../../images/checked-dark.png';
import CheckWhite from '../../images/checked-white.png';

const FaqItemHeader = ({ question, toggle, setToggle }) => {
	const [colorMode] = useColorMode();
	return (
		<Flex alignItems='center'>
			<FlexCentered
				width='3rem'
				height='3rem'
				borderRadius='50%'
				backgroundColor='primary'
			>
				<Image
					src={colorMode === 'default' ? CheckWhite : CheckDark}
					sx={{ width: '1.8rem', height: 'auto' }}
				/>
			</FlexCentered>
			<Box ml='4'>
				<Text
					cursor='pointer'
					fontFamily='bangla'
					onClick={() => setToggle(!toggle)}
				>
					{question}
				</Text>
			</Box>
			<IconButton
				icon={colorMode === 'default' ? DownArrowDark : DownArrowWhite}
				width='1rem'
				ml='auto'
				onClick={() => setToggle(!toggle)}
			/>
		</Flex>
	);
};

FaqItemHeader.propTypes = {
	question: PropTypes.string.isRequired,
	toggle: PropTypes.bool.isRequired,
	setToggle: PropTypes.func.isRequired,
};

export default FaqItemHeader;

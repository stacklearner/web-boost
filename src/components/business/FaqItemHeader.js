/** @jsx jsx */
import { jsx, useColorMode, Image } from 'theme-ui';
import PropTypes from 'prop-types';

import { Flex, Box, FlexCentered, Text, IconButton } from '../common';
import { getIcon } from '../../assets';

const FaqItemHeader = ({ question, toggle, setToggle }) => {
	const [colorMode] = useColorMode();
	const mode = colorMode === 'default' ? 'light' : 'dark';
	return (
		<Flex alignItems='center'>
			<FlexCentered
				width='3rem'
				height='3rem'
				borderRadius='50%'
				backgroundColor='primary'
			>
				<Image
					src={getIcon('checked', mode)}
					sx={{ width: '1.8rem', height: 'auto' }}
				/>
			</FlexCentered>
			<Box ml='4'>
				<Text
					fontSize='4'
					cursor='pointer'
					fontFamily='bangla'
					onClick={() => setToggle(!toggle)}
				>
					{question}
				</Text>
			</Box>
			<IconButton
				icon={getIcon('downArrow', mode)}
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

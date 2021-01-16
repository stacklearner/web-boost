/** @jsx jsx */
import { jsx, useColorMode, Image } from 'theme-ui';
import PropTypes from 'prop-types';

import { Flex, FlexCentered, Text, IconButton } from '../common';
import { getIcon } from '../../assets';

const FaqItemHeader = ({ question, toggle, setToggle }) => {
	const [colorMode] = useColorMode();
	const mode = colorMode === 'default' ? 'light' : 'dark';
	return (
		<Flex alignItems='center' flexWrap='wrap'>
			<Flex alignItems='center' width='90%'>
				<FlexCentered
					width='3rem'
					height='3rem'
					borderRadius='50%'
					backgroundColor='primary'
				>
					<Image
						src={getIcon('checked', mode)}
						sx={{
							width: '1.5rem',
							height: 'auto',
						}}
					/>
				</FlexCentered>
				<Text
					width='70%'
					ml={[3, 3, 3, 4, 4]}
					color='heading'
					cursor='pointer'
					fontWeight='bold'
					fontFamily='bangla'
					fontSize={[2, 3, 3, 4, 4]}
					onClick={() => setToggle(!toggle)}
				>
					{question}
				</Text>
			</Flex>
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

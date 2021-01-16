/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Flex, Heading, Text, IconButton } from '../common';
import { getIcon } from '../../assets';

const Congratulation = ({ title, message }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<Box p='3' my='2' backgroundColor='success' borderRadius='0.25rem'>
			<Flex alignItems='center'>
				<Image
					sx={{ width: '2.5rem', height: 'auto' }}
					src={getIcon('congratulation')}
				/>
				<Heading
					as='h2'
					fontSize='4'
					color='white'
					ml='4'
					cursor='pointer'
					onClick={() => setToggle(!toggle)}
				>
					{title}
				</Heading>
				<IconButton
					ml='auto'
					width='1rem'
					icon={getIcon('downArrow', 'dark')}
					onClick={() => setToggle(!toggle)}
				/>
			</Flex>
			{toggle && (
				<Box my='4' ml='5'>
					<Text fontFamily='bangla' fontSize='3' color='white'>
						{message}
					</Text>
				</Box>
			)}
		</Box>
	);
};

Congratulation.propTypes = {
	message: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

Congratulation.defaultProps = {
	title: 'Congratulations! You Made It.',
};

export default Congratulation;

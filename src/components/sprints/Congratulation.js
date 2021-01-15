/** @jsx jsx */
import { jsx, Box, Flex, Image, Text, IconButton } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../images/white.png';

const Congratulation = ({ message }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<Box
			sx={{
				p: 3,
				backgroundColor: 'success',
				my: 2,
				borderRadius: '0.25rem',
			}}
		>
			<Flex sx={{ alignItems: 'center' }}>
				<Image sx={{ width: '2rem', height: 'auto' }} src={Icon} />
				<Text
					sx={{
						fontFamily: 'body',
						fontSize: 4,
						fontColor: 'white',
						ml: 4,
					}}
				>
					Congratulation
				</Text>
				<IconButton
					sx={{
						ml: 'auto',
						border: 'none',
						outline: 'none',
						cursor: 'pointer',
					}}
					onClick={() => setToggle(!toggle)}
				>
					<Image
						sx={{ width: '1.5rem', height: 'auto' }}
						src={Icon}
					/>
				</IconButton>
			</Flex>
			{toggle && (
				<Box sx={{ my: 4, ml: 5 }}>
					<Text
						sx={{ fontFamily: 'body', fontSize: 3, color: 'text' }}
					>
						{message}
					</Text>
				</Box>
			)}
		</Box>
	);
};

export default Congratulation;

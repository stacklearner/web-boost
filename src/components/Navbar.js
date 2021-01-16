/** @jsx jsx */
import { Image, jsx } from 'theme-ui';

import { Box, Flex } from './common';
import { getImage, getIcon } from '../assets';
import IconButton from './common/IconButton';

const Navbar = ({ mode, setMode }) => {
	const lMode = mode === 'default' ? 'light' : 'dark';
	return (
		<Box p={3}>
			<Flex
				width={['100%', '100%', '100%', '80%']}
				m='auto'
				alignItems='center'
			>
				<Image sx={{ width: '4rem' }} src={getImage('logo')} />

				<Box ml='auto'>
					<IconButton
						icon={getIcon('toggle', lMode)}
						width='1.5rem'
						onClick={() =>
							setMode(mode === 'default' ? 'dark' : 'default')
						}
					/>
				</Box>
			</Flex>
		</Box>
	);
};

export default Navbar;

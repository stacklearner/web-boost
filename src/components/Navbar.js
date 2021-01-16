/** @jsx jsx */
import { Image, jsx } from 'theme-ui';

import Box from './common/Box';
import Flex from './common/Flex';
import IconButton from './common/IconButton';
import Logo from '../images/logo.png';
import DarkIcon from '../images/dark.png';
import WhiteIcon from '../images/white.png';

const Navbar = ({ mode, setMode }) => {
	return (
		<Box p={3}>
			<Flex
				width={['100%', '100%', '100%', '80%']}
				m='auto'
				alignItems='center'
			>
				<Image sx={{ width: '4rem' }} src={Logo} />

				<Box ml='auto'>
					<IconButton
						icon={mode === 'default' ? DarkIcon : WhiteIcon}
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

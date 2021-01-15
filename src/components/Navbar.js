/** @jsx jsx */
import { Container, Flex, Image, jsx, Box } from 'theme-ui';
import IconButton from './common/IconButton';
import Logo from '../images/logo.png';
import DarkIcon from '../images/dark.png';
import WhiteIcon from '../images/white.png';

const Navbar = ({ mode, setMode }) => {
	return (
		<Container p={3}>
			<Flex
				sx={{
					width: ['100%', '100%', '100%', '70%'],
					m: 'auto',
					alignItems: 'center',
				}}
			>
				<Image sx={{ width: '4rem' }} src={Logo} />

				<Box sx={{ ml: 'auto' }}>
					<IconButton
						icon={mode === 'default' ? DarkIcon : WhiteIcon}
						width='1.5rem'
						onClick={() =>
							setMode(mode === 'default' ? 'dark' : 'default')
						}
					/>
				</Box>
			</Flex>
		</Container>
	);
};

export default Navbar;

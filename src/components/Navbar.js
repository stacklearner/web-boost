/** @jsx jsx */
import { Container, Flex, Image, Text, IconButton, jsx, Box } from 'theme-ui';
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
						sx={{
							border: 'none',
							outline: 'none',
							cursor: 'pointer',
						}}
						aria-label='Toggle dark mode'
						onClick={() =>
							setMode(mode === 'default' ? 'dark' : 'default')
						}
					>
						<img
							style={{ width: '1.5rem', height: 'auto' }}
							src={mode === 'default' ? DarkIcon : WhiteIcon}
							alt='toggle color mode'
						/>
					</IconButton>
				</Box>
			</Flex>
		</Container>
	);
};

export default Navbar;

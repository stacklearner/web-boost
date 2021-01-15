/** @jsx jsx */
import { jsx, Image, Box, Flex, Text, useColorMode } from 'theme-ui';

const Header = ({ title, sprint, duration, body }) => {
	const [colorMode] = useColorMode();
	return (
		<Flex
			sx={{
				width: ['100%', '100%', '40%'],
				flexDirection: 'column',
				justifyContent: 'center',
				mx: 5,
				my: 3,
			}}
		>
			<Text
				sx={{
					fontSize: 6,
					fontFamily: 'heading',
					color: 'title',
				}}
			>
				{title}
			</Text>
			<Flex sx={{ mt: 2, mb: 4 }}>
				<Text
					sx={{
						fontSize: 4,
						fontFamily: 'body',
						color: 'subtitle',
					}}
				>
					SPRINT: {sprint}
				</Text>
				<Text
					sx={{
						fontSize: 4,
						fontFamily: 'body',
						color: 'subtitle',
						mx: 4,
					}}
				>
					Duration: {duration}
				</Text>
			</Flex>
			<Text
				sx={{
					fontSize: 3,
					fontFamily: 'body',
					color: 'text',
				}}
			>
				{body}
			</Text>
		</Flex>
	);
};

export default Header;

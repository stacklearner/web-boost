/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import WhiteIcon from '../../images/white.png';

const SprintItemHeader = ({ item }) => {
	return (
		<Flex sx={{ alignItems: 'center' }}>
			<Flex
				sx={{
					width: '3rem',
					height: '3rem',
					borderRadius: '50%',
					backgroundColor: 'secondary',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
					sx={{
						fontFamily: 'body',
						fontSize: 4,
						fontWeight: 'bold',
						color: 'heading',
					}}
				>
					1
				</Text>
			</Flex>
			<Box sx={{ ml: 4 }}>
				<Text
					sx={{
						fontFamily: 'body',
						fontSize: 4,
						fontWeight: 'body',
						color: 'subheading',
					}}
				>
					Play with HTML & CSS
				</Text>
			</Box>
			<Box sx={{ ml: 'auto', mr: 3 }}>
				<Text
					sx={{
						fontFamily: 'body',
						fontSize: 3,
						fontWeight: 'body',
						color: 'text',
					}}
				>
					15 Days
				</Text>
			</Box>
			<Image src={WhiteIcon} sx={{ width: '1.5rem' }} />
		</Flex>
	);
};

export default SprintItemHeader;

/** @jsx jsx*/
import { jsx, Flex, Image, Text } from 'theme-ui';
import WhiteIcon from '../../images/white.png';

const SprintHeader = () => {
	return (
		<Flex
			sx={{
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Image src={WhiteIcon} sx={{ width: '2rem' }} />
			<Text
				sx={{ fontFamily: 'body', fontSize: '4', color: 'text', ml: 4 }}
			>
				Explore The Sprints
			</Text>
			<Text
				sx={{
					fontFamily: 'body',
					fontSize: '4',
					color: 'text',
					ml: 'auto',
					mr: 4,
				}}
			>
				3 Months
			</Text>
			<Text
				sx={{
					fontFamily: 'body',
					fontSize: '4',
					color: 'text',
					mr: 4,
				}}
			>
				10 Sprints
			</Text>
			<Image src={WhiteIcon} sx={{ width: '2rem' }} />
		</Flex>
	);
};

export default SprintHeader;

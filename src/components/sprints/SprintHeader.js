/** @jsx jsx*/
import { jsx, Flex, Image, Text, IconButton } from 'theme-ui';
import WhiteIcon from '../../images/white.png';

const SprintHeader = ({ toggle, setToggle }) => {
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
			<IconButton
				sx={{ cursor: 'pointer' }}
				onClick={() => setToggle(!toggle)}
			>
				<Image src={WhiteIcon} sx={{ width: '2rem' }} />
			</IconButton>
		</Flex>
	);
};

export default SprintHeader;

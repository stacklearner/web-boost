/** @jsx jsx */
import { jsx, Flex, Text } from 'theme-ui';

const MilestoneItem = ({ count, name, target, color }) => {
	console.log(color);
	return (
		<Flex
			sx={{
				m: 2,
				mt: 4,
				width: ['95%', '45%', '30%'],
				display: 'block',
			}}
		>
			<Flex
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Flex
					sx={{
						width: '6rem',
						height: '6rem',
						backgroundColor: `${color}`,
						borderRadius: '50%',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: 5,
						fontFamily: 'heading',
						fontWeight: 'bold',
						color: 'white',
					}}
				>
					{count}
				</Flex>
				<Text
					sx={{
						mt: '4',
						fontFamily: 'heading',
						fontSize: 5,
						fontWeight: 'bold',
						textAlign: 'center',
						color: 'subtitle',
					}}
				>
					{name}
				</Text>
				<Text
					sx={{
						mt: '3',
						fontFamily: 'body',
						fontSize: 3,
						fontWeight: 'body',
						textAlign: 'center',
						color: 'text',
					}}
				>
					{target}
				</Text>
			</Flex>
		</Flex>
	);
};

export default MilestoneItem;

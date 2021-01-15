/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import shortid from 'shortid';
import Container from '../common/Container';
import getData from '../../mapdata';

const Item = ({ title, body }) => {
	return (
		<Box
			sx={{
				mx: 3,
				my: 4,
				width: ['95%', '45%', '30%'],
				display: 'block',
			}}
		>
			<Text
				sx={{
					fontFamily: 'heading',
					fontSize: 5,
					fontWeight: 'text',
					color: 'title',
				}}
			>
				{title}
			</Text>
			<Text
				sx={{
					mt: 2,
					fontFamily: 'body',
					fontSize: 3,
					fontWeight: 'text',
					color: 'text',
				}}
			>
				{body}
			</Text>
		</Box>
	);
};

const Achievements = ({ data }) => {
	return (
		<Container containerSx={{ backgroundColor: 'backgroundSecondary' }}>
			<Flex
				sx={{
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{data.map((item) => (
					<Item
						key={shortid.generate()}
						title={item.title}
						body={item.body}
					/>
				))}
			</Flex>
		</Container>
	);
};

export default Achievements;

/**
 * Fixed Target
 * Monitor Progress
 * Small Goal
 *
 */

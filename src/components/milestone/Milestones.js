/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import Container from '../common/Container';
import MilestoneItem from './MilestoneItem';

const Milestones = () => {
	return (
		<Container
			containerSx={{ marginTop: 250, paddingTop: 20, paddingBottom: 20 }}
		>
			<Box sx={{ textAlign: 'center' }}>
				<Text
					sx={{
						color: 'title',
						fontFamily: 'heading',
						fontWeight: 'heading',
						fontSize: 6,
						marginBottom: 4,
					}}
				>
					Learn with Agile Methodology
				</Text>
				<Text
					sx={{
						color: 'subtitle',
						fontFamily: 'body',
						fontWeight: 'body',
						fontSize: 4,
						marginBottom: 5,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Doloremque necessitatibus, officia blanditiis eligendi
					quaerat nisi expedita exercitationem est aspernatur libero
					optio cum odio quis pariatur, temporibus at voluptate
					asperiores ab?
				</Text>
			</Box>
			<Flex
				sx={{
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<MilestoneItem
					count='1'
					name='First Milestone'
					target='Reach The Perfect Goal'
					color='milestone1'
				/>
				<MilestoneItem
					count='2'
					name='First Milestone'
					target='Reach The Perfect Goal'
					color='milestone2'
				/>
				<MilestoneItem
					count='3'
					name='First Milestone'
					target='Reach The Perfect Goal'
					color='milestone3'
				/>
				<MilestoneItem
					count='4'
					name='First Milestone'
					target='Reach The Perfect Goal'
					color='milestone4'
				/>
			</Flex>
		</Container>
	);
};

export default Milestones;

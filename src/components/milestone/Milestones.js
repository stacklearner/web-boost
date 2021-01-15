/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import shortid from 'shortid';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import MilestoneItem from './MilestoneItem';
import getData from '../../mapdata';

const Milestones = () => {
	const milestoneSummary = getData('milestoneSummary');
	const milestones = milestoneSummary.milestones || [];
	return (
		<Container
			containerSx={{ marginTop: 250, paddingTop: 20, paddingBottom: 20 }}
		>
			<SectionTitle
				title={milestoneSummary.title}
				body={milestoneSummary.summary}
			/>
			<Flex
				sx={{
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{Object.keys(milestoneSummary.milestones).map((item) => (
					<MilestoneItem
						key={shortid.generate()}
						count={milestones[item].count}
						name={milestones[item].name}
						target={milestones[item].body}
						color={milestones[item].color}
					/>
				))}
			</Flex>
		</Container>
	);
};

export default Milestones;

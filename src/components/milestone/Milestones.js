/** @jsx jsx */
import { jsx } from 'theme-ui';
import shortid from 'shortid';

import Box from '../common/Box';
import FlexCentered from '../common/FlexCentered';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import MilestoneItem from './MilestoneItem';
import getData from '../../mapdata';

const Milestones = () => {
	const milestoneSummary = getData('milestoneSummary');
	const milestones = milestoneSummary.milestones || [];
	return (
		<Container containerSx={{ mt: '15rem', pt: '1.25rem', pb: '1.25rem' }}>
			<SectionTitle
				title={milestoneSummary.title}
				body={milestoneSummary.summary}
			/>
			<FlexCentered flexWrap='wrap'>
				{Object.keys(milestoneSummary.milestones).map((item) => (
					<MilestoneItem
						key={shortid.generate()}
						count={milestones[item].count}
						name={milestones[item].name}
						target={milestones[item].body}
						color={milestones[item].color}
					/>
				))}
			</FlexCentered>
		</Container>
	);
};

export default Milestones;

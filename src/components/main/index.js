/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Template from './Template';
import getData from '../../mapdata';

const Main = () => {
	const milestones = getData('milestones');
	return (
		<Box>
			{milestones &&
				milestones.length > 0 &&
				milestones.map((milestone, index) => (
					<Template
						milestone={milestone}
						direction={index % 2 === 0 ? 'ltr' : 'rtl'}
					/>
				))}
		</Box>
	);
};

export default Main;

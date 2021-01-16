/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Box } from '../common';
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
						open={index === 0 ? true : false}
					/>
				))}
		</Box>
	);
};

export default Main;

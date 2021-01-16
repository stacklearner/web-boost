/** @jsx jsx */
import { jsx } from 'theme-ui';

import Box from '../common/Box';
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

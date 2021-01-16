/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '../common/Box';
import Container from '../common/Container';
import SprintHeader from './SprintHeader';
import Sprints from './Sprints';
import Congratulation from './Congratulation';

const SprintIndex = ({ milestone, open }) => {
	const [toggle, setToggle] = useState(open);
	return (
		<Box backgroundColor='backgroundSecondary'>
			<Container>
				<SprintHeader
					sprint={milestone.sprint}
					duration={milestone.duration}
					toggle={toggle}
					setToggle={setToggle}
				/>
				{toggle && (
					<Box py='4'>
						<Sprints sprints={milestone.sprints} />
						<Congratulation message={milestone.congratulation} />
					</Box>
				)}
			</Container>
		</Box>
	);
};

SprintIndex.propTypes = {
	milestone: PropTypes.object.isRequired,
};

export default SprintIndex;

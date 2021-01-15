/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '../common/Container';
import SprintHeader from './SprintHeader';
import Sprints from './Sprints';
import Congratulation from './Congratulation';

const SprintIndex = ({ milestone }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<Box
			sx={{
				backgroundColor: 'backgroundSecondary',
			}}
		>
			<Container>
				<SprintHeader
					sprint={milestone.sprint}
					duration={milestone.duration}
					toggle={toggle}
					setToggle={setToggle}
				/>
				{toggle && (
					<Box sx={{ py: 4 }}>
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

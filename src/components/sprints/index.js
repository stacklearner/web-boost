/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { useState } from 'react';
import Container from '../common/Container';
import SprintHeader from './SprintHeader';
import Sprints from './Sprints';

const SprintIndex = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<Box
			sx={{
				backgroundColor: 'backgroundSecondary',
			}}
		>
			<Container>
				<SprintHeader toggle={toggle} setToggle={setToggle} />
				{toggle && (
					<Box sx={{ py: 4 }}>
						<Sprints />
					</Box>
				)}
			</Container>
		</Box>
	);
};

export default SprintIndex;

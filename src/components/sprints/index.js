/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Container from '../common/Container';
import SprintHeader from './SprintHeader';
import Sprints from './Sprints';

const SprintIndex = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'backgroundSecondary',
			}}
		>
			<Container>
				<SprintHeader />
				<Box sx={{ py: 4 }}>
					<Sprints />
				</Box>
			</Container>
		</Box>
	);
};

export default SprintIndex;

/** @jsx jsx*/
import { jsx, Box } from 'theme-ui';
import SprintItem from './SprintIem';

const Sprints = () => {
	return (
		<Box
			sx={{
				alignItems: 'center',
			}}
		>
			<SprintItem />
			<SprintItem />
			<SprintItem />
		</Box>
	);
};

export default Sprints;

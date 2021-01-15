/** @jsx jsx*/
import { jsx, Box } from 'theme-ui';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import SprintItem from './SprintIem';

const Sprints = ({ sprints }) => {
	return (
		<Box
			sx={{
				alignItems: 'center',
			}}
		>
			{sprints &&
				sprints.length > 0 &&
				sprints.map((sprint) => (
					<SprintItem key={shortid.generate()} item={sprint} />
				))}
		</Box>
	);
};

Sprints.propTypes = {
	sprints: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sprints;

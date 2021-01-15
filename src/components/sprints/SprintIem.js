/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';
import SprintItemHeader from './SprintItemHeader';
import SprintItemBody from './SprintItemBody';

const SprintItem = ({ item }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<Box
			sx={{
				p: 3,
				backgroundColor: 'background',
				my: 2,
				borderRadius: '0.25rem',
			}}
		>
			<SprintItemHeader
				item={item}
				toggle={toggle}
				setToggle={setToggle}
			/>
			{toggle && <SprintItemBody item={item} />}
		</Box>
	);
};

SprintItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default SprintItem;

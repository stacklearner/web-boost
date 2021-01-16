/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../common';
import SprintItemHeader from './SprintItemHeader';
import SprintItemBody from './SprintItemBody';

const SprintItem = ({ item, open }) => {
	const [toggle, setToggle] = useState(open);
	return (
		<Box p='3' backgroundColor='background' my='2' borderRadius='0.25rem'>
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
	open: PropTypes.bool,
};

export default SprintItem;

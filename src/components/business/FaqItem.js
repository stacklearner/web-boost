/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../common';
import FaqItemHeader from './FaqItemHeader';
import FaqItemBody from './FaqItemBody';

const FaqItem = ({ item }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<Box p='3' backgroundColor='background' my='2' borderRadius='0.25rem'>
			<FaqItemHeader
				question={item.question}
				toggle={toggle}
				setToggle={setToggle}
			/>
			{toggle && <FaqItemBody item={item.answer} />}
		</Box>
	);
};

FaqItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FaqItem;

/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
import SprintItemHeader from './SprintItemHeader';

const SprintItem = ({ item }) => {
	return (
		<Box
			sx={{
				p: 3,
				backgroundColor: 'background',
				my: 2,
				borderRadius: '0.25rem',
			}}
		>
			<SprintItemHeader />
		</Box>
	);
};

export default SprintItem;

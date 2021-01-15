/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { useState } from 'react';
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
			<SprintItemHeader toggle={toggle} setToggle={setToggle} />
			{toggle && (
				<SprintItemBody
					body={`Hello World, Hello Stack Learner, Wow`}
					keyPoints={[
						'One Two Three',
						'Two Three Four',
						'Three Four Five',
					]}
				/>
			)}
		</Box>
	);
};

export default SprintItem;

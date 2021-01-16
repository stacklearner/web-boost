/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

import Box from '../common/Box';
import Text from '../common/Text';

const SprintItemBody = ({ item }) => {
	return (
		<Box>
			<Text
				fontFamily='bangla'
				ml='5'
				mt='3'
				pl={[0, 0, 3, 3]}
				fontSize={[2, 2, 3, 3]}
			>
				{item.contents.text}
			</Text>
			{item &&
				item.contents.keyPoints &&
				item.contents.keyPoints.length > 0 && (
					<ul
						sx={{
							ml: 5,
							mt: 3,
							pl: [0, 0, 3, 3],
							fontSize: [2, 2, 3, 3],
							fontFamily: 'bangla',
							color: 'text',
							listDecorationStyle: 'filled',
						}}
					>
						{item.contents.keyPoints.map((key) => (
							<li key={key} sx={{ ml: 3 }}>
								{key}
							</li>
						))}
					</ul>
				)}
		</Box>
	);
};

SprintItemBody.propTypes = {
	item: PropTypes.object.isRequired,
};

export default SprintItemBody;

/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import PropTypes from 'prop-types';

const SprintItemBody = ({ item }) => {
	return (
		<Box>
			<Text
				sx={{
					ml: 5,
					mt: 3,
					pl: 3,
					fontFamily: 'body',
					fontSize: 3,
					color: 'text',
				}}
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
							pl: 3,
							fontFamily: 'body',
							fontSize: 3,
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

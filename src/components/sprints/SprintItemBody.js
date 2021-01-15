/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';

const SprintItemBody = ({ body, keyPoints }) => {
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
				{body}
			</Text>
			{keyPoints && keyPoints.length > 0 && (
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
					{keyPoints.map((key) => (
						<li key={key} sx={{ ml: 3 }}>
							{key}
						</li>
					))}
				</ul>
			)}
		</Box>
	);
};

export default SprintItemBody;

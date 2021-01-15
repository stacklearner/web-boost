/** @jsx jsx */
import { jsx } from 'theme-ui';
import Box from '../common/Box';
import Text from '../common/Text';
import PropTypes from 'prop-types';

const FaqItemBody = ({ item }) => {
	return (
		<Box>
			<Text ml='5' mt='3' pl='3' fontSize='3'>
				{item.text}
			</Text>
			{item && item.keyPoints && item.keyPoints.length > 0 && (
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
					{item.keyPoints.map((key) => (
						<li key={key} sx={{ ml: 3 }}>
							{key}
						</li>
					))}
				</ul>
			)}
		</Box>
	);
};

FaqItemBody.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FaqItemBody;
